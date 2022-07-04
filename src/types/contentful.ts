export type ArtWork = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    photo: {
      fields: {
        title: string;
        file: {
          url: string;
          details: any;
          fileName: string;
          contentType: string;
        };
      };
    };
    tags: Array<string>;
    imageCaption: string;
    dataSheet: string;
  };
};

export type Category = {
  title: string;
  slug: string;
  coverImage: any;
  description: string;
  images: Array<ArtWork>;
};
