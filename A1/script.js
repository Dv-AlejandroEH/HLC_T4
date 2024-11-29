function cambiarColor(tema){
    tema = document.getElementById('tema');
    switch (tema) {
        case 'oscuro':
            let header = document.getElementById('header');
            header.style.backgroundColor = 'gray';
            break;
    }
    
}