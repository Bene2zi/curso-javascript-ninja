/*
Envolva todo o código desse desafio em uma IIFE.
*/
(funtcion(){

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );

var arr = [1,2,3];
console.log(arr.toString());

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sul     = ['Rio Grande do Sul','Santa Catarina','Parana'];
var sudeste = ['São Paulo','Rio de Janeiro','Minas Gerais','Espirito Santo'];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );
var brasil = sul.concat(sudeste);
console.log(brasil);//[ 'Rio Grande do Sul','Santa Catarina','Parana', 'São Paulo','Rio de Janeiro','Minas Gerais','Espirito Santo' ]

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
brasil.unshift('Acre');
brasil.unshift('Amazonas');
brasil.unshift('Roraima');
console.log(brasil);//[ 'Roraima', 'Amazonas', 'Acre', 'Rio Grande do Sul','Santa Catarina','Parana', 'São Paulo','Rio de Janeiro','Minas Gerais','Espirito Santo' ]

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/

console.log( '\nEstado removido:' );
console.log(brasil.shift());//'Roraima'

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = brasil.slice(2,5);

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
console.log(newSul);//[ 'Rio Grande do Sul','Santa Catarina','Parana' ]

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
console.log(brasil);//['Amazonas', 'Acre', 'Rio Grande do Sul','Santa Catarina','Parana', 'São Paulo','Rio de Janeiro','Minas Gerais','Espirito Santo' ]

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = ['Maranhao','Piaui','Ceara','Bahia','Rio Grande do Norte','Paraiba','Pernambuco','Alagoas','Sergipe'];

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
console.log(nordeste);//[ 'Maranhao','Piaui','Ceara','Bahia','Rio Grande do Norte','Paraiba','Pernambuco','Alagoas','Sergipe' ]
 

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
 var newSudeste = brasil.splice(5,9);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil = brasil.concat(nordeste);

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
console.log(newSudeste);//[ 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espirito Santo' ]

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
console.log(brasil);/* [ 'Amazonas',
  'Acre',
  'Rio Grande do Sul',
  'Santa Catarina',
  'Parana',
  'Maranhao',
  'Piaui',
  'Ceara',
  'Bahia',
  'Rio Grande do Norte',
  'Paraiba',
  'Pernambuco',
  'Alagoas',
  'Sergipe' ] */

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil = [];
 brasil.forEach(function(item,index,array){
  newBrasil.push( {'id': index, 'estado' : item} );
});

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
console.log(newBrasil);/* 
[ { id: 0, estado: 'Amazonas' },
  { id: 1, estado: 'Acre' },
  { id: 2, estado: 'Rio Grande do Sul' },
  { id: 3, estado: 'Santa Catarina' },
  { id: 4, estado: 'Parana' },
  { id: 5, estado: 'Maranhao' },
  { id: 6, estado: 'Piaui' },
  { id: 7, estado: 'Ceara' },
  { id: 8, estado: 'Bahia' },
  { id: 9, estado: 'Rio Grande do Norte' },
  { id: 10, estado: 'Paraiba' },
  { id: 11, estado: 'Pernambuco' },
  { id: 12, estado: 'Alagoas' },
  { id: 13, estado: 'Sergipe' } ] */

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
  var moreThanSeven = brasil.every(function(item){
    return item.length > 7;
  });

  console.log(moreThanSeven ? "Sim, todos os estados tem mais de 7 letras!" : "Nem todos os estados tem mais de 7 letras!");

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
var cearaExist = brasil.some(function(item){
  return item === 'Ceara';
});

console.log(cearaExist ? "Ceará está incluído!" : "Ceará não foi incluído :(" );

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var map = newBrasil.map(function(item,index){
  return { id:     item.id + 1,
           estado: item.estado + ' pertence ao Brasil.'};
});

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
console.log(map);
/*
[ { id: 1, estado: 'Amazonas pertence ao Brasil.' },
  { id: 2, estado: 'Acre pertence ao Brasil.' },
  { id: 3, estado: 'Rio Grande do Sul pertence ao Brasil.' },
  { id: 4, estado: 'Santa Catarina pertence ao Brasil.' },
  { id: 5, estado: 'Parana pertence ao Brasil.' },
  { id: 6, estado: 'Maranhao pertence ao Brasil.' },
  { id: 7, estado: 'Piaui pertence ao Brasil.' },
  { id: 8, estado: 'Ceara pertence ao Brasil.' },
  { id: 9, estado: 'Bahia pertence ao Brasil.' },
  { id: 10, estado: 'Rio Grande do Norte pertence ao Brasil.' },
  { id: 11, estado: 'Paraiba pertence ao Brasil.' },
  { id: 12, estado: 'Pernambuco pertence ao Brasil.' },
  { id: 13, estado: 'Alagoas pertence ao Brasil.' },
  { id: 14, estado: 'Sergipe pertence ao Brasil.' } ]
*/

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
 var filter = map.filter(function(item,index){
  return item.id % 2 === 0;
 });

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
console.log(filter);
/*
[ { id: 2, estado: 'Acre pertence ao Brasil.' },
  { id: 4, estado: 'Santa Catarina pertence ao Brasil.' },
  { id: 6, estado: 'Maranhao pertence ao Brasil.' },
  { id: 8, estado: 'Ceara pertence ao Brasil.' },
  { id: 10, estado: 'Rio Grande do Norte pertence ao Brasil.' },
  { id: 12, estado: 'Pernambuco pertence ao Brasil.' },
  { id: 14, estado: 'Sergipe pertence ao Brasil.' } ]
*/

 });
