module.exports = {
  siteMetadata: {
    title: 'portfolio',
    author: 'Natan Ceballos',
    description: 'JAMstack portfolio and blog website made using Gatsby',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/imagesReadMe/fullscreenScreenshot.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
