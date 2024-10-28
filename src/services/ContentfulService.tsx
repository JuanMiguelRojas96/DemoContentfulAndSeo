import { createClient } from 'contentful'
import { CardPeliculaProps } from '../components/atoms/Card/CardPelicula'



const client = createClient({ 
  space: import.meta.env.VITE_CONTENTFUL_SPACE ,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
})


export const getContent = async (entryId: string) => {
  
  try {
    const entry = await client.getEntry(entryId)

    const pelicula: CardPeliculaProps = {
      title: entry.fields.title?.toString() ?? '',
      description: entry.fields.body?.content[0].content[0].value, 
      image: entry?.fields.image?.fields.file.url,
      entryId: entry.sys.id
    }
    
    return pelicula
  } catch (error) {
    console.log('Error fetching content from Contentful', error)
    throw error
  }
}

export const getAllEntriesByContentType = async (contentType: string) => {
  try {
    const response = await client.getEntries({
      content_type: contentType,
    });
  
    const peliculas: CardPeliculaProps[] = response.items.map((item: any) => {
      return {
        title: item.fields.title,
        description: item.fields.body,
        image: item.fields.image.fields.file.url,
        entryId: item.sys.id
      }
    })
    return peliculas;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error; 
  }
};