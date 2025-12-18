import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

type PexelsPhoto = {
  id: number;
  width: number;
  height: number;
  avg_color: string | null;
  alt: string;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
  };
};

async function fetchSneakerPhotos(): Promise<PexelsPhoto[]> {
  // Fetch sneaker photos from Pexels API
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    console.warn("Missing PEXELS_API_KEY – inspiration gallery will be empty.");
    return [];
  }
  try {
    const response = await fetch(
      "https://api.pexels.com/v1/search?query=nike%20sneaker&per_page=30&orientation=portrait%2Clandscape",
      {
        headers: { Authorization: apiKey },
        next: { revalidate: 60 * 15 },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch Pexels photos", await response.text());
      return [];
    }
    // Collect and return photos
    const data = (await response.json()) as { photos?: PexelsPhoto[] };
    return data.photos ?? [];
  } catch (error) {
    console.error("Error fetching Pexels photos", error);
    return [];
  }
}

export default async function GetInspiredPage() {
  // Fetch sneaker photos for masonry gallery
  const photos = await fetchSneakerPhotos();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Get Inspired
        </Typography>
        <Typography color="text.secondary" maxWidth={600} mx="auto" mb={2}>
          A curated stream of sneaker shots from Pexels to kickstart your next
          colorway. Refresh the page anytime for a new selection.
        </Typography>
        <Chip label="Powered by Pexels" color="default" variant="outlined" />
      </Box>
      {/* Display gallery or fallback message */}
      {photos.length === 0 ? (
        <Box
          sx={{
            borderRadius: 4,
            border: "1px dashed",
            borderColor: "divider",
            p: 6,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Couldn't load inspiration photos right now.
          </Typography>
          <Typography color="text.secondary">
            Most likely a reason on our end. Please try again later.
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            columnCount: { xs: 1, sm: 2, lg: 3 },
            columnGap: { xs: 2, sm: 3 },
          }}
        >
          {photos.map((photo) => {
            const imageSrc = photo.src.original;

            return (
              <Box
                key={photo.id}
                sx={{
                  mb: { xs: 2, sm: 3 },
                  breakInside: "avoid",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 3,
                  bgcolor: "background.paper",
                  position: "relative",
                  "&:hover .photo-meta": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <Box sx={{ lineHeight: 0 }}>
                  <Image
                    src={imageSrc}
                    alt={photo.alt || "Sneaker inspiration"}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ width: "100%", height: "auto", display: "block" }}
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="photo-meta"
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    py: 1.5,
                    backgroundColor: `${photo.avg_color ?? "#000000"}cc`,
                    color: photo.avg_color ? "white" : "inherit",
                    backdropFilter: "blur(4px)",
                    opacity: 0,
                    transform: "translateY(16px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, display: "flex", gap: 1 }}
                  >
                    by {photo.photographer}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    #{photo.id}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Container>
  );
}
