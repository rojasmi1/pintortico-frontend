import { Category, ArtWork } from "../../types/contentful";
import contentful from "contentful";

const { CONTENTFUL_API_TOKEN, CONTENTFUL_SPACE_ID } = import.meta.env;

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_API_TOKEN,
});

export const getArtWorksByCategory = async (categoryId: string) => {
  const { items } = await client.getEntries<Category>(categoryId);

  return items[0].fields.images;
};
export const getAllArtWorks = async () => {
  const { items } = await client.getEntries<ArtWork>({
    content_type: "image",
    select: "sys.id",
  });

  return items;
};
export const getArtWork: (id: string) => Promise<ArtWork> = async (id) => {
  const artWork = await client.getEntry<ArtWork>(id);
  return artWork;
};
