function maskCep(value: string, callback: (newValue: string) => void) {
  let newValue = value.match(/\d+/g)?.join('') || '';
  const { length } = newValue;
  if (length > 8) {
    return;
  }
  newValue = newValue.replace(/\D/g, '');
  newValue = newValue.replace(/^(\d{5})(\d+)/g, '$1-$2');
  callback(newValue);
}
export default maskCep;
