# JM Masala Deployment Checklist

These items require domain, hosting, and third-party account access beyond source code.

## Technical setup
- Install SSL certificate for `jmmasalaexports.com` and `www.jmmasalaexports.com`.
- Confirm `http -> https` redirect is active.
- Deploy `public/sitemap.xml` and submit it in Google Search Console.
- Add Google Search Console verification token as `VITE_GSC_VERIFICATION_TOKEN`.
- Add GA4 Measurement ID as `VITE_GA4_MEASUREMENT_ID`.

## Performance and CDN
- Enable Cloudflare (free tier) with proxy enabled.
- Turn on Brotli, Auto Minify, and browser caching in Cloudflare.
- Upload compressed product images under 200 KB each.

## Security and forms
- Connect form endpoint for email + WhatsApp notification automation.
- Configure Google reCAPTCHA v3 keys and backend verification.
- Schedule automated daily full-site backups with hosting provider.

## SEO operations
- Submit all key URLs in Search Console for indexing.
- Validate Product schema and LocalBusiness schema in Rich Results Test.
- Verify social share previews (Open Graph) on WhatsApp and LinkedIn.
