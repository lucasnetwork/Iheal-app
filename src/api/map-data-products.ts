/* eslint-disable camelcase */
/* eslint-disable no-undef */
export type productData = {
  id: string;
  name: string;
  description: string;
  priceFormat: string;
  price: number;
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
    const { id, name, price, stock, Description: description } = data;
    const priceFormat = `R$ ${price
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
    return {
      id,
      name,
      priceFormat,
      price,
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
