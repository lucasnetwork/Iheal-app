/* eslint-disable camelcase */
/* eslint-disable no-undef */
export type productData = {
  id: string;
  name: string;
  description: string;
  priceFormat: number;
  image: string;
  stock: number;
  user_creator: {
    _id: string;
    username: string;
    email: string;
    address: string;
  };
};
// eslint-disable-next-line import/prefer-default-export
export const mapData = (pagesData = [{}] as any): productData[] =>
  pagesData.map((data: any): productData => {
    const { url } = data.image || { url: '' };
    const {
      id: _id,
      username,
      email,
      address,
    } = data.user_creator || {
      id: '',
      username: '',
      email: '',
      address: '',
    };
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
      user_creator: {
        _id,
        username,
        email,
        address,
      },
      stock,
      image: url,
      description,
    };
  });
