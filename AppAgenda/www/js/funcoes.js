function SalvarAnotacao(){
   let novoNome = document.getElementById("nome").value
   let novoTel = document.getElementById("tel").value
    let novoContato = `<p id="contato" >${novoNome} - ${novoTel}</p>`
    document.getElementById("salvar").innerHTML += novoContato
    document.getElementById("nome").value = " " 
    document.getElementById("tel").value = " " 
  
    localStorage.salvar = novoContato
}

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
    navigator.vibrate(7000);
})

if(localStorage.salvar){
    document.getElementById("salvar").innerHTML = localStorage.salvar;
}



apagar = document.getElementById("apagar");
apagar.addEventListener("click", function(){
    localStorage.clear();
    document.getElementById("contato").remove();
})

