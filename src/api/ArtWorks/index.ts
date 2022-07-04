import { ArtWork } from "../../types/contentful";

const { CONTENTFUL_API_TOKEN, CONTENTFUL_SPACE_ID } = import.meta.env;

export const getArtWorksByCategory = async (categoryId: string) => {
  const response = await (
    await fetch(
      `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries/${categoryId}?access_token=${CONTENTFUL_API_TOKEN}`
    )
  ).json();
  const artWorkLinks = response.fields.images;
  const artWorks = await Promise.all(
    artWorkLinks.map((artWorkLink) => getArtWork(artWorkLink.sys.id))
  );
  return artWorks;
};
export const getAllArtWorks = async () => {
  const { items } = await (
    await fetch(
      `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_API_TOKEN}&content_type=image&select=sys.id`
    )
  ).json();
  const artWorks = Promise.all(items.map((item) => getArtWork(item.sys.id)));
  return artWorks;
};
export const getArtWork: (id: string) => Promise<ArtWork> = async (id) => {
  const artWork = await (
    await fetch(
      `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries/${id}?access_token=${CONTENTFUL_API_TOKEN}`
    )
  ).json();
  const photoDetails = await (
    await fetch(
      `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/assets/${artWork.fields.photo.sys.id}?access_token=${CONTENTFUL_API_TOKEN}`
    )
  ).json();
  return { ...artWork, fields: { ...artWork.fields, photo: photoDetails } };
};
