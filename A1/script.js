function cambiarColor(tema){
    const header = document.getElementById('header');
    const body = document.getElementById('body');
    const textarea = document.getElementById('textarea');
    const input = document.getElementById('input');
    const h1 = document.getElementById('h1');
    const h2 = document.getElementById('h2');
    const label = document.getElementById('label');
    switch (tema) {
        case 'oscuro':
            input.className = 'oscuro';
            textarea.className = 'oscuro';
            body.className = 'oscuro';
            header.className = 'oscuro';
            h1.className = 'oscuro';
            h2.className = 'oscuro';
            label.className = 'oscuro';
            break;
        case 'claro':
            input.className = 'claro';
            textarea.className = 'claro';
            body.className = 'claro';
            header.className = 'claro';
            h1.className = 'claro';
            h2.className = 'claro';
            label.className = 'claro';
            break;
        case 'azul':
            input.className = 'azul';
            textarea.className = 'azul';
            body.className = 'azul';
            header.className = 'azul';
            h1.className = 'azul';
            h2.className = 'azul';
            label.className = 'azul';
            break;
        case 'rosa':
            input.className = 'rosa';
            textarea.className = 'rosa';
            body.className = 'rosa';
            header.className = 'rosa';
            h1.className = 'rosa';
            h2.className = 'rosa';
            label.className = 'rosa';
            break;
        case 'verde':
            input.className = 'verde';
            textarea.className = 'verde';
            body.className = 'verde';
            header.className = 'verde';
            h1.className = 'verde';
            h2.className = 'verde';
            label.className = 'verde';
            break;
    }
}
function eliminarNota(event) {
    const nota = event.target.parentElement;
    nota.remove();
}

function eliminarTodasNotas() {
    const notas = document.getElementById('notas');
    while (notas.firstChild) {
        notas.removeChild(notas.firstChild);
    }
}

function agregarNota() {
    document.getElementById('h3').classList.add('oculto');
    const textarea = document.getElementById('textarea');
    const div = document.createElement('div');
    div.textContent = textarea.value;
    div.classList.add('nota');

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', eliminarNota);
    div.appendChild(botonEliminar);

    document.getElementById('notas').insertBefore(div, document.getElementById('notas').firstChild);
    textarea.value = '';

    botonEliminarTodas.classList.remove('oculto');
}

const botonEliminarTodas = document.createElement('button');
botonEliminarTodas.classList.add('oculto');
botonEliminarTodas.textContent = 'Eliminar todas las notas';
botonEliminarTodas.addEventListener('click', eliminarTodasNotas);
document.body.appendChild(botonEliminarTodas);

document.getElementById('textarea').addEventListener('keydown', function comprobarEnter(event) {
    if (event.key === 'Enter') {
    event.preventDefault();
    agregarNota();
    }
});