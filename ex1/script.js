
const usuario = {
    nome: "Sabrina Elaouar",
    idade: 21,
    email: "sab.estudante@exemplo.com"
};

const usuarioJSON = JSON.stringify(usuario);
console.log("Exercicio 1.2 - Objeto convertido para JSON:", usuarioJSON);


const usuarioObjeto = JSON.parse(usuarioJSON);
console.log("Exercicio 1.3 - Nome extraído do objeto:", usuarioObjeto.nome);


// PARTE 2 
import dadosHome from './data.json' with { type: 'json' };

console.log("Exercicio 2.2 - JSON importado com sucesso:", dadosHome);
console.log("Mensagem da Homepage:", dadosHome.bio);