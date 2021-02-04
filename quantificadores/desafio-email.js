const texto = `Os e-mails dos convidados são:
                - fulano@cod3r.com.br
                - xico@gmail.com`;

const regex = /[\d\w]+@{1}[\d\w.]+/g;
console.log(texto.match(regex));


const texto2 = `
Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- joao@empresa.info.br
- maria_silva@registro.br
- rafa.sampaio@yahoo.com
`;

console.log(texto2.match(regex));

const regex2 = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g;
console.log(texto2.match(regex2));

const regex3 = /\w+@\w+\.\w{2,4}/g;
console.log(texto2.match(regex3));

const regex4 = /[\w.]+@\w+\.\w{2,4}/g;
console.log(texto2.match(regex4));

const regex5 = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g;
console.log(texto2.match(regex5));