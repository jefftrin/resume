/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jeff Trin`,
    description: `A portfolio to showcase my skills and experience in the technology world. This site uses a combination of the latest web frameworks including Gatsby, React, Bootstrap, and more.`,
    author: `Jeff Trin`,
  },

  plugins: [


    `gatsby-plugin-react-helmet`,
  
    


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Public Sans`,
          'Parisienne',
      
        ],
        display: 'swap'
      }
    }





  ],
}
