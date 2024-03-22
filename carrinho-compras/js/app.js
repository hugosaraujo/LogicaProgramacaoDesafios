let totalGeral;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitário = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let valor = valorUnitário * quantidade;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R${valorUnitário}</span></section>`;
    totalGeral += valor;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${totalGeral}`;
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$ ${totalGeral}`;  
}