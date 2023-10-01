import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `wildflower.green`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Mr De Haviland`,
          `Open Sans\:300`, // you can also specify font weights and styles
          `Lora\:400`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};

export default config;
