module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://qiye.space`,
    // Your Name
    name: 'Qiye SUI',
    // Main Site Title
    title: `This is me.`,
    // Description that goes under your name in main bio
    description: `To boldly go where no one has gone before`,
    // Optional: Github account URL
    github: `https://github.com/skiya`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/%E5%A5%87%E5%86%B6-%E9%9A%8B-854997229/`,
    // Content of the About Me section
    about: `I come from Dalian, China. Living in Tokyo since 2020.
      I graduated from Dalian University of Technology (CS, Bachelor). 
      Been working as Kotlin backend dev since 2020.
      Can also do some frontend work (experienced with Vue3 & React).
      Interested in Flutter as well as Rust.
    `,
    experience: [
      {
        name: 'teamLab Inc.',
        description: [
          `Web Developer, October 2020 - Present`,
          `Tokyo`,
          ``,
          `- Designed and developed RESTful APIs (SpringBoot/kotlin, MySQL)`,
          `- Maintain AWS services (ECS, Codepipeline, Lambda, Batch, etc w/CDK)`,
          `- Introduced porting DSL for internal CMS package api`,
          `- Active as reviewer in past projects`,
          ``,
          `Lead development of reusable payment packages in a future-proof way.`,
        ],
        link: 'https://www.team-lab.com/en/search/?q=Web%E3%82%B5%E3%82%A4%E3%83%88%E6%A7%8B%E7%AF%89'
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description: [
          'experienced at work:',
          '',
          '- Spring Boot/kotlin (in production, 2020.10~)',
          '- Nuxt.js/vue3 (pre-release, 2023.04~)',
          '- Python3 (internal tool scripts)',
          '',
          'as hobby:',
          '',
          '- Flutter/dart, Rust',
        ],
      },
      {
        name: 'Databases',
        description: ['MySQL, AWS DynamoDB'],
      },
      {
        name: 'Certifications',
        description:
          ['AWS Solution Architect Associate, AWS Developer Associate'],
      },
      {
        name: 'Other',
        description:
          ['Docker, GCP, CI/CD (GitHub Actions, CodePipeline), API design, TDD'],
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    educations: [
      {
        name: 'Dalian University of Technology',
        description: [
          'Computer Science and Technology(Japanese Intensive), Sep. 2015 - Jul. 2020',
        ],
      },
      {
        name: 'Hokkaido University',
        description: ['Exchange Program(Information Engineering Course), Sep. 2018 - Jun. 2019'],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
