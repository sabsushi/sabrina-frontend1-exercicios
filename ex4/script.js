const lista = document.getElementById('listaPosts');
const btn = document.getElementById('btnCarregar');

function carregarPosts() {
    lista.innerHTML = "Carregando...";
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(dados => {
            lista.innerHTML = "";
            const primeirosCinco = dados.slice(0, 5);
            
            primeirosCinco.forEach(post => {
                const li = document.createElement('li');
                li.innerText = post.title;
                lista.appendChild(li);
            });
        })
        .catch(err => console.log(err));
}

btn.addEventListener('click', carregarPosts);

carregarPosts();