/* eslint-disable camelcase */
/* eslint-disable no-undef */
export type productData = {
  id: string;
  name: string;
  Description: string;
  priceFormat: string;
  price: number;
  image: {
    url: string;
  };
  stock: number;
  user_creator: {
    _id: string;
    username: string;
    email: string;
    address: string;
  };
};
// eslint-disable-next-line import/prefer-default-export
export const mapDataProduct = (pagesData: productData) => {
  const { url } = pagesData.image || { url: '' };
  const {
    _id: idd,
    username,
    email,
    address,
  } = pagesData.user_creator || {
    id: '',
    username: '',
    email: '',
    address: '',
  };
  const { id, name, price, stock, Description: description } = pagesData;
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
      idd,
      username,
      email,
      address,
    },
    stock,
    image: url,
    description,
  };
};
