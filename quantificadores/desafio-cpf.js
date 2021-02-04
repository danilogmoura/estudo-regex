const texto = `
CPF dos aprovados:
- 600.567.890-12
- 765.998.345-23
`;

const regex = /[\d.-]{14}/g;
console.log(texto.match(regex));

const texto2 = `
CPF dos aprovados:
- 600.567.890-12
- 765.998.345-23
- 454.674.333-21
- 678.987.123-87
- 789.112.543-00
`;

const regex2 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
console.log(texto2.match(regex2));