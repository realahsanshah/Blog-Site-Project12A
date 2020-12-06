const dotenv=require('dotenv');

dotenv.config();

module.exports = {
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId:process.env.CONTENTFUL_SPACE_ID,
                accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
            },
          },
    ]
}