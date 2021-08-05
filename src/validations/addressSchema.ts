import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().required(),
  street: Yup.string().required(),
  cep: Yup.string()
    .matches(/(\d{5})-(\d{3})/g)
    .required(),
  complement: Yup.string().required(),
  state: Yup.string().required(),
  district: Yup.string().required(),
  city: Yup.string().required(),
});
