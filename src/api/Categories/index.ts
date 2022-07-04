const { CONTENTFUL_API_TOKEN, CONTENTFUL_SPACE_ID } = import.meta.env;

export const getCategories = async () => {
  const { items: categories } = await (
    await fetch(
      `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_API_TOKEN}&content_type=photoGallery&select=sys.id,fields.title`
    )
  ).json();

  return categories;
};
