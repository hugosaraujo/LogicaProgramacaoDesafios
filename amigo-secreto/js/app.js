/**
 * 1. Bug Fix
 * * 1.1 Fazer uma validação de nome incluído na lista de amigos;
 * * 1.3 Impedir que seja feito um sorteio sem amigos na lista ou se houver apenas um amigo;
 */

let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if (nomeAmigo == '') {
        alert('Digite um nome para adicionar a lista');
        return;
    } else if (amigos.includes(nomeAmigo)) {
        alert('Este amigo já foi adicionado');
        return;
    }

    amigos.push(nomeAmigo);

    if(listaAmigos.textContent == ''){
        listaAmigos.innerHTML = nomeAmigo;
    } else {
        listaAmigos.innerHTML += ', ' + nomeAmigo;
    }
    
    limpaCampo();
}

function limpaCampo(){ 
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if(amigos.length <= 4) {
        alert('Adicione pelo menos 4 amigos para fazer o sorteio');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio')

    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';     
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}