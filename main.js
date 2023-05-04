let cadena = '';
let pos = 0;
let error = 0;

const E = () => T() && E_();

const E_ = () =>
  cadena[pos] == '+' ? (++pos, T() && E_()) : true;

const T = () => F() && T_();

const T_ = () =>
  cadena[pos] == '*' ? (++pos, F() && T_()) : true;

const F = () =>
  cadena[pos] == '('
    ? (++pos, E() && cadena[pos++] == ')')
    : cadena[pos++] == 'i';

// Ejemplo de uso
cadena = '(i+i)*i';
const cadenas = [
  'i', 'i+i', 'i+i+i', 'i*i', '(i)', '(i+i)*i',
  'i+', 'i*', '+i', '*i', 'i+i*'
];

cadenas.forEach(e => {
  cadena = e;
  pos = 0;
  error = 0;
  if (E() && pos == cadena.length && error == 0) {
    console.log(`La cadena [ ${e} ] es valida`);
  } else {
    console.log(`La cadena [ ${e} ] es invalida`);
  }
});