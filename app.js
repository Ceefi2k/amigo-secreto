let lista = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    }

    lista.push(nome);
    atualizarLista();

    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = "";

    lista.forEach((nome) => {
        let item = document.createElement('li');
        item.textContent = nome;
        listaNomes.appendChild(item);
    });
}

function sortearAmigo() {
    if (lista.length === 0) {
        alert('Não há amigos para sortear! Adicione amigos primeiro.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * lista.length);

    let amigoSorteado = lista[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = 'O amigo secreto sorteado é: <strong>' + amigoSorteado;
}
