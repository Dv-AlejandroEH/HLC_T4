function cambiarColor(tema){
    let header = document.getElementById('header');
    let body = document.getElementById('body');
    let textarea = document.getElementById('textarea');
    let input = document.getElementById('input');
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');
    let label = document.getElementById('label');
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