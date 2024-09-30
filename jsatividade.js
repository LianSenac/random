function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarNumeroAleatorio(min, max) {
    const numeroAleatorio = getRndInteger(min, max);
    document.getElementById("numero").innerHTML = `Número sorteado: ${numeroAleatorio}`;
}

function myFunction() {
    document.getElementById("demo2").innerHTML = "Você clicou no botão!";
}

function sorteio() {
    const randomizar = opcoes => opcoes[Math.floor(Math.random() * opcoes.length)];

    const embaralhar = (opcoes) => {
        return opcoes
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
    }

    const alunofavorito = ['Tais', 'Nicolas', 'Paulino', 'Bradley', 'Andrei', 'Lian', 'Lucas', 'Felipe', 'Isadora', 'Guilherme', 'Nicolas', 'Nicolas'];

    // Embaralha a lista de alunos
    const alunofavoritoEmbaralhado = embaralhar(alunofavorito);
    
    // Escolhe um aluno favorito da lista embaralhada
    const alunofavoritos = randomizar(alunofavoritoEmbaralhado);

    // Exibe o resultado no elemento com id "sorteio"
    document.getElementById('sorteio').innerHTML = `Aluno favorito: ${alunofavoritos}`;
}