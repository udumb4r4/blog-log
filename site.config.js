const CONFIG = {
  // profile setting (required)
  profile: {
    name: "udumbara",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "random people",
    bio: "eksperimental",
    email: "udumb4r4@gmail.com",
    linkedin: "-",
    github: "udumb4r4",
    instagram: "",
  },

  projects: [
    {
      name: `udumbara`,
      href: "empty",
    },
  ],

  // blog setting (required)
  blog: {
    title: "udumbara",
    description: "welcome to my blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configuration (required)
  link: "https://udumbara.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
notionConfig: {
  pageId: '276c5b45d3b880af9629c4aa181cd1ce',
},

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "G-Y0Y4DCZG8B",
    },
  },

  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "fSyj9aPWOj6zDpHUQ9imqMifHvk5flFhB6QKd4tTKdc",
    },
  },

  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },

  utterances: {
    enable: true,
    config: {
      repo: 'udumb4r4/blog-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    },
  },

  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },

  isProd: process.env.VERCEL_ENV === "development", // distinguish between development and production environment
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
