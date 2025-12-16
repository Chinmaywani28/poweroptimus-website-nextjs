/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://poweroptimus.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  additionalPaths: async (config) => {
    const paths = [];

    // 1️⃣ STATIC ROUTES (example)
    const staticRoutes = [
      // "/",
      "/solution",
      "/key-verticals",
      "/key-verticals/capabilities/#air-quality",
      "/key-verticals/capabilities/#hazardous-gas",
      "/key-verticals/capabilities/#sustainability",
      "/key-verticals/capabilities/#boiler-optimization",
      "/key-verticals/capabilities/#occu",
      "/key-verticals/capabilities/#compressor-management",
      "/key-verticals/capabilities/#advanced-hvac",
      "/roles",
      "/roles/responsibilities#predictive-maintenance",
      "/roles/responsibilities#ensure",
      "/roles/responsibilities#employee-awareness",
      "/roles/responsibilities#energy-audits",
      "/roles/responsibilities#real-time",
      "/roles/responsibilities#roi",
      "/roles/responsibilities#data-analysis",
      "/roles/responsibilities#co2-monitoring",
      "/roles/responsibilities#safety-audits",
      "/roles/responsibilities#machine-levels",

      "/resources/blogs",
      "/resources/webinar",
      "/resources/video",
      "/resources/brochure"
    ];

    staticRoutes.forEach((url) => {
      paths.push(config.transform(config, url));
    });

    // 2️⃣ MANUALLY LIST BLOG SLUGS HERE
    // Replace these with your actual slugs
    const blogSlugs = [
      "Driving-Energy-Efficiency-Environmental-Monitoring-and-Sustainability-with-Smart-Energy-Management"
      // Add more blog slugs here
    ];

    blogSlugs.forEach((slug) => {
      paths.push(
        config.transform(config, `/resources/blogs-details/${slug}`)
      );
    });

    const WebinarsSlugs = [
      "Connecting-Energy-Monitoring-Predictive-Maintenance-and-Sustainability-for-Resilient-Operations"
      // Add more blog slugs here
    ];

    WebinarsSlugs.forEach((slug) => {
      paths.push(
        config.transform(config, `/resources/webinar-details/${slug}`)
      );
    });

    return Promise.all(paths);
  },
};
