/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Deryx E. Scott | Frontend Software Engineer`,
    description: `Portfolio of Deryx E. Scott, a software engineer specializing in React, TypeScript, JavaScript, enterprise UI systems, and modernizing web applications.`,
    author: `Deryx E. Scott`,
    siteUrl: `https://portfolio-gatsby-nu.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
  ],
};
