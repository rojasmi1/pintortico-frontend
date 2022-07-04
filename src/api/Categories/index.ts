import { Category } from "../../types/contentful";
import * as contentful from "contentful";

const { CONTENTFUL_API_TOKEN, CONTENTFUL_SPACE_ID } = import.meta.env;

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_API_TOKEN,
});

export const getCategories = async () => {
  const { items: categories } = await client.getEntries<Category>({
    content_type: "photoGallery",
    select: "sys.id,fields.title",
  });

  return categories;
};
