# Handyman Marketing Website

A high-converting, multi-page marketing website for a local handyman/light construction business built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Multi-page structure (Home, Services, Portfolio, About, Contact)
- ✅ Parallax hero section with smooth scrolling effects
- ✅ Secondary parallax CTA section
- ✅ Mobile-first responsive design
- ✅ SEO-optimized with proper meta tags
- ✅ Accessible forms with ARIA labels
- ✅ Contact form API route with validation
- ✅ Sticky header with mobile menu
- ✅ Professional color scheme

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Business Information

Edit `config/site.ts` and replace all placeholder values:

- `[BUSINESS NAME]` - Your business name
- `[OWNER NAME]` - Owner's name
- `[CITY, STATE]` - Your primary location
- `[CITY]` - City name
- `[STATE]` - State abbreviation
- `[PHONE NUMBER]` - Contact phone number
- `[EMAIL ADDRESS]` - Contact email address
- `[NEARBY CITY 1]`, etc. - Service area cities

### 3. Set Up Google Maps (Optional but Recommended)

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a `.env.local` file in the root directory
3. Add your API key:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

**Note:** Without the API key, the map will show a placeholder message. The map is used in the Service Areas section and Contact page.

### 4. (Optional) Set Up Email

If you want to enable email functionality:

1. Add to your `.env.local` file:
2. Get a Resend API key from [resend.com](https://resend.com)
3. Add your API key and from email address:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL_ADDRESS=noreply@yourdomain.com
```

**Note:** Without email configuration, form submissions will be logged to the console (useful for development).

### 5. Add Service Images (Optional)

The services page is now prepared to display images for each service. To add images:

1. Place service images in `/public/images/services/`
2. Update `config/site.ts` to add image paths to services:

```typescript
{
  name: 'Service Name',
  description: 'Service description',
  category: 'category',
  image: '/images/services/service-name.jpg',
  imageAlt: 'Description of image',
}
```

If no image is provided, a default icon placeholder will be shown.

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 7. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── portfolio/          # Portfolio page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── api/contact/        # Contact form API route
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section with parallax
│   ├── ParallaxSection.tsx # Reusable parallax component
│   ├── ServicesSection.tsx # Services preview
│   ├── PortfolioPreview.tsx # Portfolio preview
│   ├── AboutSection.tsx    # About preview
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── ProcessSection.tsx  # How it works
│   ├── ServiceAreasSection.tsx # Service areas
│   ├── CTASection.tsx      # Call-to-action section
│   └── ContactForm.tsx     # Contact form component
└── config/
    └── site.ts             # Centralized business configuration
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

- `primary` - Main brand color (dark blue)
- `accent` - Accent color (orange/gold)

### Content

All business-specific content is in `config/site.ts`. Update:
- Services list
- Testimonials
- Service areas
- Business information

### Images

Replace placeholder image areas with actual photos:
- Hero background (currently uses gradient pattern)
- Portfolio project images
- About page owner photo

## Next Steps

1. **Update Business Info**: Fill in all placeholders in `config/site.ts`
2. **Add Real Images**: Replace placeholder image areas with actual project photos
3. **Set Up Email**: Configure Resend or another email service
4. **Customize Content**: Update copy to match your brand voice
5. **Test Forms**: Verify contact form works correctly
6. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Resend** - Email service (optional)

## License

This project is for your business use.

