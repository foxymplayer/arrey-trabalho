function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
       window.location.href = "aula2.html"
    }
}

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    
    
    if(nomeUser){
        dadosLista.push(nomeUser);
        salvarTel()
        criarLista();
        document.getElementById('nomeUser').value = '';
    
    }
    
    
}

var dadosTel = [];


    function salvarTel(){
        let numTel = parseInt(document.getElementById("numeroTel").value);

        if(numTel){
            dadosTel.push(numTel);
            criarLista();
            salvarTel();
            document.getElementById('numTel').value = '';
        
        }
    }


//função para criar linhas de usuario

function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML =  '<tr><th>Nome Usuario</th><th>Numero</th><th>ação</th></tr>';

    for(let i = 0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td>" + '<td>' + dadosTel[i] + "</td><td><button class ='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>editar</button><button class ='btn btn-danger'onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
    sq
}

// função editar nome

function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1);
    dadosTel.splice(dadosTel[(i-1)],1);
}

// função excluir nome

function excluir(i){
    dadosLista.splice((i-1),1);
    dadosTel.splice((i-1),1);
    document.getElementById('tabela').deleteRow(i);
}