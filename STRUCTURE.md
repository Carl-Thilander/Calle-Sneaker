# Project Structure

This quick reference describes where core concerns live:

- src/
  - app/ — Next.js route components and route-specific folders
    - features/ — feature-level code (domain logic, server actions, data local to a feature)
      - designer/ — design feature data (DESIGN_AREAS), client/server components
        - areas.ts — DESIGN_AREAS data for sneaker
        - colors.ts — color palettes for the areas
        - types.ts — exported types used across the app (DesignAreaId, SneakerConfig)
      - profile/designs/actions.ts — server actions (CRUD)
  - components/ — presentational shared components
  - types/ — global shared types (UI, app-wide types)
    - ui.ts — ColorMode, ColorModeContextValue
