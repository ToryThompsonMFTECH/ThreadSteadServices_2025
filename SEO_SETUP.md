# SEO Setup Guide

This guide will help you improve your Google search rankings.

## 1. Set Your Domain URL

Add this to your `.env.local` file (or your hosting platform's environment variables):

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Replace `yourdomain.com` with your actual domain name.

## 2. Update Business Coordinates (Optional but Recommended)

In `components/StructuredData.tsx`, uncomment and update the `geo` section with your actual business location coordinates:

```typescript
geo: {
  '@type': 'GeoCoordinates',
  latitude: '33.7490', // Your actual latitude
  longitude: '-84.3880', // Your actual longitude
},
```

You can find your coordinates using Google Maps - right-click on your location and copy the coordinates.

## 3. Google Business Profile (Critical for Local SEO)

1. **Create/Claim Your Google Business Profile:**
   - Go to https://business.google.com
   - Create or claim your business listing
   - Add all business information (name, address, phone, hours, photos)
   - Verify your business

2. **Get Reviews:**
   - Ask satisfied customers to leave Google reviews
   - Respond to all reviews (positive and negative)
   - Aim for at least 10+ reviews

## 4. Submit Your Sitemap to Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your website URL)
3. Verify ownership
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

## 5. Additional SEO Tips

### Content Optimization
- Add more detailed service descriptions
- Create blog posts about home repair topics
- Add customer testimonials with names and locations
- Include before/after photos in portfolio

### Local SEO
- Get listed on local directories (Yelp, Angi, HomeAdvisor, etc.)
- Ensure NAP (Name, Address, Phone) consistency across all platforms
- Get backlinks from local business associations
- Partner with local businesses for cross-referrals

### Technical SEO (Already Implemented)
✅ Structured data (JSON-LD schema)
✅ Sitemap.xml
✅ Robots.txt
✅ Meta tags and Open Graph
✅ Mobile-responsive design
✅ Fast page load times

### Off-Page SEO
- Build quality backlinks from local websites
- Get featured in local news or business publications
- Create social media profiles and link to your site
- Participate in local community events

## 6. Monitor Your Progress

- Use Google Search Console to track:
  - Search queries bringing traffic
  - Click-through rates
  - Average position in search results
  - Indexing status

- Use Google Analytics to track:
  - Website traffic
  - User behavior
  - Conversion rates

## 7. Regular Updates

- Update content regularly (add new services, update photos)
- Post new projects to portfolio
- Add fresh testimonials
- Keep service information current

## Expected Timeline

- **1-3 months:** Start seeing improvements in local search
- **3-6 months:** Significant ranking improvements
- **6-12 months:** Strong presence in local search results

Remember: SEO is a long-term strategy. Consistency and quality content are key!

