class CartaoUtilizador extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const nome = this.getAttribute('nome') || 'Desconhecido';
        const idade = this.getAttribute('idade') || '0';

        this.shadowRoot.innerHTML = `
            <style>
                .cartao {
                    border: 2px solid #333;
                    padding: 15px;
                    margin: 10px;
                    border-radius: 8px;
                    width: 200px;
                    font-family: sans-serif;
                }
                h3 { margin: 0; color: #007bff; }
            </style>
            <div class="cartao">
                <h3>${nome}</h3>
                <p>Idade: ${idade} anos</p>
            </div>
        `;
    }
}

customElements.define('cartao-utilizador', CartaoUtilizador);