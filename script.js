let tarefas = JSON.parse(localStorage.getItem('minhas_tarefas')) || [];

function renderizar() {
    const container = document.getElementById('lista');
    container.innerHTML = '';
    
    tarefas.forEach((t, i) => {
        container.innerHTML += `
            <div class="item">
                <div>
                    <strong>${t.texto}</strong>
                    <span class="data">${t.data}</span>
                </div>
                <div>
                    <button class="btn-edit" onclick="editar(${i})"><i class="fas fa-edit"></i></button>
                    <button class="btn-delete" onclick="remover(${i})"><i class="fas fa-trash"></i></button>
                </div>
            </div>`;
    });
    localStorage.setItem('minhas_tarefas', JSON.stringify(tarefas));
}

function adicionar() {
    const input = document.getElementById('inputTarefa');
    if (!input.value) return;

    tarefas.push({
        texto: input.value,
        data: new Intl.DateTimeFormat('pt-PT', { dateStyle: 'short', timeStyle: 'short' }).format(new Date())
    });

    input.value = '';
    renderizar();
    Swal.fire({ title: 'Adicionado!', icon: 'success', timer: 1000, showConfirmButton: false });
}

function remover(i) {
    tarefas.splice(i, 1);
    renderizar();
    Swal.fire({ title: 'Removido!', icon: 'error', timer: 1000, showConfirmButton: false });
}

async function editar(i) {
    const { value: novoTexto } = await Swal.fire({
        title: 'Editar tarefa',
        input: 'text',
        inputValue: tarefas[i].texto
    });

    if (novoTexto) {
        tarefas[i].texto = novoTexto;
        renderizar();
        Swal.fire({ title: 'Atualizado!', icon: 'info', timer: 1000, showConfirmButton: false });
    }
}
function remover(i) {
    Swal.fire({
        title: 'Tem certeza?',
        text: "Você não poderá reverter esta ação!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e74c3c', 
        cancelButtonColor: '#95a5a6',
        confirmButtonText: 'Sim, apagar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        
        if (result.isConfirmed) {
            tarefas.splice(i, 1);
            renderizar();
            
    
            Swal.fire({
                title: 'Removido!',
                text: 'A tarefa foi excluída.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

renderizar();