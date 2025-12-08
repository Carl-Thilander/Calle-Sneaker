This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Link to pictures:

https://clipart-library.com/clip-art/transparent-nike-12.htm

## Tech-stack

# Database

Mongodb combined with prisma ORM

## Notes

To achieve a nice experience for the user, I set a fixed max-wdith for all my pages using mui's "lg" attribute. With this implementation, all the pages will appear symmetrical and the overall routing is seamless.

I am using the webkit-settings for handling the sneaker-preview. At first i noticed that my images turned into plain silhouettes which was not the goal. I lacked the texture and depths in the images. To fix that, I used the backgroundImage attribute with a similiar image and set the opacity to 1. So in terms of Z-index placement, my webkit-image (silhoutette) is located at 1 and my shading mask is located at 2. With this layering of images the piece as a whole looks great.
