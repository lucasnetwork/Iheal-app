// eslint-disable-next-line import/prefer-default-export
export const masck = {
  cpf: (value: string) =>
    value
      .replace(/[^\d]+/g, '')
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})(\d)$/, '$1.$2')
      .replace(/^(\d{3})(\d{1,2})$/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'),
  cnpj: (value: string) =>
    value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{3})(\d)$/, '$1.$2')
      .replace(/^(\d{3})(\d)$/, '$1/$2')
      .replace(/^(\d{4})(\d)$/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'),
  cep: (value: string) => {
    const cep = value
      .replace(/[^\d]+/g, '')
      .replace(/^(\d{5})(\d)/, '$1-$2')
      .replace(/^(\d{5})(\d)$/, '$1-$2');
  },
  phone: (value: string) => {
    const phone = value
      .replace(/[^\d]+/g, '')
      .replace(/^(\d{4})(\d)/, '$1-$2')
      .replace(/^(\d{4})(\d)$/, '$1-$2');
  },
};
