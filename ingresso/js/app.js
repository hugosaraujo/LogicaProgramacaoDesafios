/* 
    1.refatoração: 
        1.1 -> refatorar toda a parte de compra de ingressos. No momento, existem várias funções que fazem basicamente as mesmas coisas.  
*/

limpaCampos();

function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade < 0) {
        alert('Quantidade inválida');
        limpaCampos()
        return;
    } 
    

    if(tipoIngresso == 'pista'){
        comprarPista(quantidade);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else if (tipoIngresso == 'inferior') {
        comprarInferior(quantidade);
    }
}

function limpaCampos(){
    document.getElementById('qtd').value = '';
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtd > qtdPista){
        alert('Quantidade de ingressos indisponível');
    } else {
        qtdPista -= qtd 
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');  
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtd > qtdInferior){
        alert('Quantidade de ingressos indisponível');
    } else {
        qtdInferior -= qtd 
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');  
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtd > qtdSuperior){
        alert('Quantidade de ingressos indisponível');
    } else {
        qtdSuperior -= qtd 
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');  
    }
}
