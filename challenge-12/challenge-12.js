/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function(){

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = { name: 'Fabricio', lastname: 'Beneduzi', age: 30 };
console.log( 'Propriedades de "person": ' , Object.keys(person));

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));//[ 'name', 'lastname', 'age' ]

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: 'Aventuras', pages: 120});
books.push({name: 'Desventuras', pages: 200});
books.push({name: 'Ações', pages: 320});
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(books);
  /*[ { name: 'Aventuras', pages: 120 },
  { name: 'Desventuras', pages: 200 },
  { name: 'Ações', pages: 320 } ]*/

console.log( '\nLivro que está sendo removido:'  );
/*
Remova o último livro, e mostre-o no console.
*/
books.pop()// { name: 'Ações', pages: 320 }

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);
  /*[ { name: 'Aventuras', pages: 120 },
  { name: 'Desventuras', pages: 200 }]*/

/*
Converta os objetos que ficaram em `books` para strings.
*/

  for(var i in books){
    books[i] = JSON.stringify(books[i]);
  }
 
console.log( '\nLivros em formato string: ',books );//Livros em formato string:  [{"name":"Aventuras","pages":120},{"name":"Desventuras","pages":200}]

/*
Mostre os livros nesse formato no console:
*/
for( var i in books){
  console.log( books[i]);
}
  /*
   {"name":"Aventuras","pages":120}
   {"name":"Desventuras","pages":200}  
 */

/*
Converta os livros novamente para objeto.
*/
  for(var i in books){
    books[i] = JSON.parse(books[i]);
  } 
console.log( '\nAgora os livros são objetos novamente:', books); /* [ { name: 'Aventuras', pages: 120 },
  { name: 'Desventuras', pages: 200 } ]
  */

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for( var i in books){
  for(var prop in books[i]){
    console.log( prop + ': ' + books[i][prop]);
  }
}
  
  /*
  name: Aventuras
pages: 120
name: Desventuras
pages: 200
  */

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['F','A','B','R','I','C','I','O'];
console.log( '\nMeu nome é:' + myName.join(''));//Meu nome é:FABRICIO

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome é:' + myName.join(''));//Meu nome é:FABRICIO

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:', myName.reverse() );//[ 'O', 'I', 'C', 'I', 'R', 'B', 'A', 'F' ]

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());//[ 'A', 'B', 'C', 'F', 'I', 'I', 'O', 'R' ]
  
  
  
})();
