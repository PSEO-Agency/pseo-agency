
INSERT INTO public.partners (name, slug, partner_type, region, logo_url, short_description, full_description, is_published, is_featured, sort_order, expertise_tags, integrations, website_url)
VALUES 
(
  'MagDeveloper',
  'magdeveloper',
  'tech',
  'Netherlands',
  '/lovable-uploads/magdeveloper-logo.png',
  'MagDeveloper specializes in Magento e-commerce development, offering custom solutions for scalable online stores.',
  'MagDeveloper is a leading Magento development agency based in the Netherlands, delivering high-performance e-commerce solutions. They combine deep technical expertise with strategic thinking to help brands grow their online presence through robust, scalable Magento stores.',
  true,
  false,
  3,
  '["Magento Development", "E-commerce", "Custom Integrations", "Performance Optimization"]'::jsonb,
  '["Magento", "Adobe Commerce", "PHP", "MySQL"]'::jsonb,
  'https://magdeveloper.nl'
),
(
  'Webshop Importer',
  'webshop-importer',
  'tech',
  'Netherlands',
  '/lovable-uploads/webshop-importer-logo.png',
  'Webshop Importer provides automated product data import solutions for e-commerce platforms, streamlining catalog management.',
  'Webshop Importer offers powerful automated import tools that help e-commerce businesses efficiently manage and synchronize their product catalogs across multiple platforms. Their solutions save time and reduce errors in product data management.',
  true,
  false,
  4,
  '["Product Data Import", "E-commerce Automation", "Catalog Management", "Data Synchronization"]'::jsonb,
  '["Magento", "WooCommerce", "Shopify", "CSV/XML Import"]'::jsonb,
  'https://webshopimporter.com'
);
