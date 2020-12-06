const dotenv=require('dotenv');

dotenv.config();
let spaceIdValue;
let accessTokenValue
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    spaceIdValue=process.env.CONTENTFUL_SPACE_ID;
    accessTokenValue=process.env.CONTENTFUL_ACCESS_TOKEN
// } else {
    // spaceIdValue=secrets.CONTENTFUL_SPACE_ID;
    // accessTokenValue=secrets.CONTENTFUL_ACCESS_TOKEN
// }

module.exports = {
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId:spaceIdValue,
                accessToken:accessTokenValue,
                forceFullSync: true,
            },
          },
    ]
}