const form = document.getElementById('dogForm');
const resultado = document.getElementById('resultado');
const erro = document.getElementById('erro');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const breed = document.getElementById('breed').value.toLowerCase().trim();
    
    erro.innerText = "";
    resultado.innerHTML = "";

    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => {
            if (!res.ok) throw new Error("Raça não encontrada.");
            return res.json();
        })
        .then(data => {
            resultado.innerHTML = `<img src="${data.message}" alt="Dog" style="max-width: 300px; margin-top: 10px;">`;
        })
        .catch(err => {
            erro.innerText = err.message;
        });
});