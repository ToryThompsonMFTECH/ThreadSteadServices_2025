# Service Images Directory

This directory contains image folders for each service offered by Thread Stead Services.

## Folder Structure

Each service has its own folder named using a URL-friendly slug based on the service name. For example:
- `TV Wall Mount Installation` → `tv-wall-mount-installation/`
- `Bathroom Remodeling and Repair` → `bathroom-remodeling-and-repair/`
- `Baseboard Installation and Repair` → `baseboard-installation-and-repair/`

## Adding Images

1. **Find the service folder** - Navigate to the folder matching your service name (slugified)
2. **Drop your images** - Add your image files directly into the service folder
3. **Supported formats** - Use common image formats: `.jpg`, `.jpeg`, `.png`, `.webp`
4. **Naming** - You can name images anything you like, but descriptive names help:
   - `before.jpg`, `after.jpg`
   - `example-1.jpg`, `example-2.jpg`
   - `main.jpg`, `detail.jpg`

## Image Usage

Images placed in these folders will be automatically available for use in:
- Service detail pages (`/services/[service-slug]`)
- Service category pages
- Portfolio galleries
- Service listings

## Example

For the service "Baseboard Installation and Repair":
- Folder: `public/images/services/baseboard-installation-and-repair/`
- Add images: `baseboard-1.jpg`, `baseboard-2.jpg`, etc.
- Images will be accessible at: `/images/services/baseboard-installation-and-repair/baseboard-1.jpg`

## Notes

- Each folder contains a `.gitkeep` file to ensure empty folders are tracked in git
- You can add as many images as needed to each service folder
- Images should be optimized for web use (recommended: under 500KB per image)
- Consider using descriptive alt text when referencing images in the code

