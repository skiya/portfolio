module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://devfolio.qiye.space`,
    // Your Name
    name: 'Qiye SUI',
    // Main Site Title
    title: `This is me.`,
    // Description that goes under your name in main bio
    description: `Clean coder. Problem solver. Idea creator.`,
    // Optional: Github account URL
    github: `https://github.com/sqiye`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/%E5%A5%87%E5%86%B6-%E9%9A%8B-854997229/`,
    // Content of the About Me section
    about: `I come from Dalian, China. Graduated from Dalian University of Technology with CS as my major, and Japanese as secondary degree. Been working as a Back-end engineer at Tokyo from 2020. When at work I am fully dedicated at finish my job with clean, manageable code and do my best in assisting my fellow co-workers. In private, I like to game with a sip of wine. Also, on vacations, I like traveling and enjoy wandering in different towns. I take "To boldly go where no one has gone before" from Star Trek as my motto, as I love to live on the bleeding edge of tech.`,
    experience: [
      {
        name: 'teamLab Inc.',
        description: 'Backend Developer, October 2020 - Present',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Kotlin, Spring Boot, Spring Cloud, JavaScript (ES6+), Typescript, Golang, Node.js, Express.js, React, Ruby on Rails, Dart, Flutter',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL, AWS DynamoDB',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), GCP, CI/CD (GitHub Actions, CodePipeline), API design, TDD',
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
