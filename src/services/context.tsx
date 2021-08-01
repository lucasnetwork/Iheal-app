import React, { createContext, useState } from 'react';

type product = {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  total?: number;
  priceFormat?: string;
  priceFormatTotal?: string;
  description: string;
};

type cartProps = {
  products: Array<product>;
  totalQuantity: number;
  total: number;
  totalPriceFormat: string;
};

interface constexProps {
  cart: cartProps;
  addItem(newProduct: product, quantity: number): void;
  DeleteItem(id: number, quantity: number): void;
}

export const ContextApp = createContext({} as constexProps);

const ContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<cartProps>({
    products: [],
    totalQuantity: 0,
    total: 0,
    totalPriceFormat: 'R$ 0,00',
  });

  function updateItem(newProduct: product, quantity: number) {
    const newCart = { ...cart };
    const newProducts = newCart.products.map(productSingle => {
      if (productSingle.id === newProduct.id) {
        return {
          ...productSingle,
          total: (productSingle.total || 0) + productSingle.price * quantity,
          quantity: (productSingle.quantity || 0) + quantity,
          priceFormatTotal: `R$ ${(
            (productSingle.total || 0) +
            productSingle.price * quantity
          )
            .toFixed(2)
            .replace('.', ',')}`,
        };
      }
      return productSingle;
    });
    newCart.products = newProducts;
    newCart.total += newProduct.price * quantity;
    newCart.totalPriceFormat = `R$ ${newCart.total
      .toFixed(2)
      .replace('.', ',')}`;

    setCart(newCart);
  }

  function addNewItem(newProduct: product, quantity: number) {
    const newCart = { ...cart };
    newCart.products = [
      ...newCart.products,
      {
        ...newProduct,
        total: newProduct.price * quantity,
        quantity,
        priceFormatTotal: `R$ ${(newProduct.price * quantity)
          .toFixed(2)
          .replace('.', ',')}`,
        priceFormat: `R$ ${newProduct.price.toFixed(2).replace('.', ',')}`,
      },
    ];
    newCart.total += newProduct.price * quantity;
    newCart.totalPriceFormat = `R$ ${newCart.total
      .toFixed(2)
      .replace('.', ',')}`;
    setCart(newCart);
  }

  function addItem(newProduct: product, quantity: number) {
    const existProduct = cart.products.find(
      productSingle => productSingle.id === newProduct.id
    );

    if (existProduct) {
      updateItem(newProduct, quantity);
      return;
    }
    addNewItem(newProduct, quantity);
  }

  function DeleteItem(id: number, quantity: number) {
    const newCart = { ...cart };
    const existProduct = cart.products.find(
      productSingle => productSingle.id === id
    );
    if (!existProduct || (existProduct.quantity || 0) < quantity) {
      return;
    }

    newCart.totalQuantity -= quantity;
    newCart.total -= quantity * (existProduct.price || 0);
    newCart.totalPriceFormat = `R$ ${newCart.total
      .toFixed(2)
      .replace('.', ',')}`;

    if (existProduct?.quantity === quantity) {
      newCart.products = newCart.products.filter(
        singleProduct => singleProduct.id !== id
      );

      setCart(newCart);
      return;
    }
    newCart.products = newCart.products.map(singleProduct => {
      if (singleProduct.id === id) {
        const newProduct = { ...singleProduct };

        newProduct.quantity = (newProduct.quantity || 0) - quantity;
        newProduct.total =
          (newProduct.total || 0) - singleProduct.price * quantity;
        newProduct.priceFormatTotal = `R$ ${(newProduct.total * quantity)
          .toFixed(2)
          .replace('.', ',')}`;
        return newProduct;
      }
      return singleProduct;
    });
    setCart(newCart);
  }

  return (
    <ContextApp.Provider value={{ cart, addItem, DeleteItem }}>
      {children}
    </ContextApp.Provider>
  );
};

export default ContextProvider;
