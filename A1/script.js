function cambiarColor(tema){
    let header = document.getElementById('header');
    let body = document.getElementById('body');
    let textarea = document.getElementById('textarea');
    let input = document.getElementById('input');
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');
    switch (tema) {
        case 'oscuro':
            input.className = 'oscuro';
            textarea.className = 'oscuro';
            body.className = 'oscuro';
            header.className = 'oscuro';
            break;
        case 'claro':
            header.className = 'claro';
            break;
        case 'azul':
            input.className = 'azul';
            textarea.className = 'azul';
            body.className = 'azul';
            header.className = 'azul';
            h1.className = 'azul';
            h2.className = 'azul';
            break;
        case 'rosa':
            header.className = 'rosa';
            break;
        case 'verde':
            header.className = 'verde';
            break;
    }
}