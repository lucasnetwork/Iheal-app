/* eslint-disable camelcase */
/* eslint-disable no-undef */
export type productData = {
  id: string;
  name: string;
  description: string;
  priceFormat: number;
  image: string;
  stock: number;
  user_creator: any;
};
// eslint-disable-next-line import/prefer-default-export
export const mapData = (pagesData = [{}] as any): productData[] =>
  pagesData.map((data: any): productData => {
    const { url } = data.image || { url: '' };
    const {
      id,
      name,
      price: priceFormat,
      user_creator,
      stock,
      Description: description,
    } = data;

    return {
      id,
      name,
      priceFormat,
      user_creator,
      stock,
      image: url,
      description,
    };
  });
