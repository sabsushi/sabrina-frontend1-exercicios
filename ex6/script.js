const botao = document.getElementById('btnBateria');
const display = document.getElementById('display');

botao.addEventListener('click', () => {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            const nivel = Math.round(battery.level * 100);
            const texto = `O nível da bateria é de ${nivel} por cento.`;
            
            display.innerText = texto;

            const fala = new SpeechSynthesisUtterance(texto);
            fala.lang = 'pt-PT';
            window.speechSynthesis.speak(fala);
        });
    } else {
        display.innerText = "API de Bateria não suportada.";
    }
});