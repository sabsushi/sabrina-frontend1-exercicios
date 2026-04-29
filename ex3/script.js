const pessoa = { nome: "Estudante", idade: 20, email: "estudante@escola.pt" };
const pJSON = JSON.stringify(pessoa);
console.log(pJSON);
console.log(JSON.parse(pJSON).nome);

fetch('./data.json')
    .then(res => res.json())
    .then(dados => console.log(dados))
    .catch(err => console.log(err));

const form = document.getElementById('formAluno');
const listaDiv = document.getElementById('lista');

function atualizarLista() {
    const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    listaDiv.innerHTML = "<h3>Alunos Guardados:</h3>";
    alunos.forEach(aluno => {
        const nomeReal = atob(aluno.n);
        listaDiv.innerHTML += `
            <div class="aluno">
                <b>${nomeReal}</b> | Notas: ${aluno.notas.join(' / ')}
            </div>`;
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const novoAluno = {
        n: btoa(document.getElementById('nome').value),
        notas: [
            document.getElementById('f').value,
            document.getElementById('b').value,
            document.getElementById('d').value
        ]
    };
    const listaAtual = JSON.parse(localStorage.getItem('alunos') || '[]');
    listaAtual.push(novoAluno);
    localStorage.setItem('alunos', JSON.stringify(listaAtual));
    form.reset();
    atualizarLista();
});

window.onload = () => {
    const storage = JSON.parse(localStorage.getItem('alunos') || '[]');
    if(storage.length > 0) {
        console.log(atob(storage[storage.length-1].n));
    }
    atualizarLista();
};