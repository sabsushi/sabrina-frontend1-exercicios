
const form = document.getElementById('formNome');
const inputNome = document.getElementById('inputNome');


window.addEventListener('load', () => {
    const nomeGuardado = localStorage.getItem('utilizadorNome');
    if (nomeGuardado) {
        console.log("Nome encontrado no LocalStorage:", nomeGuardado);
    } else {
        console.log("Nenhum nome guardado ainda.");
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const nome = inputNome.value;
    localStorage.setItem('utilizadorNome', nome);
    alert("Nome guardado com sucesso!");
});



const btnTema = document.getElementById('btnTema');
const statusTema = document.getElementById('statusTema');
const corpoPagina = document.body;


function aplicarTema(tema) {
    corpoPagina.className = tema;
    statusTema.textContent = tema;
    sessionStorage.setItem('temaSite', tema);
}

const temaNaSessao = sessionStorage.getItem('temaSite');
if (temaNaSessao) {
    aplicarTema(temaNaSessao);
}

btnTema.addEventListener('click', () => {
    const novoTema = corpoPagina.classList.contains('light') ? 'dark' : 'light';
    aplicarTema(novoTema);
});