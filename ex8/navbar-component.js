class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: #333;
                    color: white;
                    padding: 1rem;
                    display: flex;
                    gap: 20px;
                }
                a { color: white; text-decoration: none; font-weight: bold; }
                a:hover { color: #007bff; }
            </style>
            <nav>
                <a href="#">Home</a>
                <a href="#">Perfil</a>
                <a href="#">Configurações</a>
            </nav>
        `;
    }
}

customElements.define('meu-navbar', NavbarComponent);