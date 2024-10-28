import { GraphQLClient, gql } from "graphql-request";
import { CardPeliculaProps } from "../components/atoms/Card/CardPelicula";

const  SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE;
const  ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const  GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;


const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});



export const getAllEntriesByContentType = async (contentType: string) => {
    const query = gql`
      query GetEntriesByContentType {
        ${contentType}Collection {
          items{
            sys {
              id
            }
            title
            body{
              json
            }
            image {
              url
            }
          }
        }
      }
    `;

    const variables = { contentType };

    try {
      const response = await client.request(query, variables);      
      
      const peliculas: CardPeliculaProps[] = response[`${contentType}Collection`].items.map((item: any) => {
        return {
          title: item.title,
          description: item.body.json,
          image: item.image.url,
          entryId: item.sys.id
        }
      })

      return peliculas;

    } catch (error) {
      console.error('Error fetching entries:', error);
      throw error;
    }
  };

