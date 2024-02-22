// Seleciona todas as células do tabuleiro
const celulas = document.querySelectorAll('[data-cell]');
// Define o jogador atual como 'X' para começar
let jogadorAtual = 'X';

// Adiciona um event listener para cada célula
celulas.forEach(celula => {
  celula.addEventListener('click', handleClique, { once: true });
});

// Função chamada quando uma célula é clicada
function handleClique(e) {
  const celula = e.target;
  // Coloca o símbolo do jogador atual na célula clicada
  celula.textContent = jogadorAtual;
  // Verifica se o jogador atual ganhou
  if (verificarVitoria()) {
    alert(`Jogador ${jogadorAtual} ganhou!`);
    reiniciarJogo();
    return;
  }
  // Verifica se o jogo terminou em empate
  if (verificarEmpate()) {
    alert("Deu um empate!");
    reiniciarJogo();
    return;
  }
  // Troca para o próximo jogador
  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
}

// Verifica se um jogador ganhou
function verificarVitoria() {
  // Condições de vitória possíveis no jogo da velha
  const condicoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // Verifica se alguma das condições de vitória é atendida
  return condicoesVitoria.some(combination => {
    return combination.every(index => {
      return celulas[index].textContent === jogadorAtual;
    });
  });
}

// Verifica se o jogo terminou em empate
function verificarEmpate() {
  // Verifica se todas as células estão preenchidas
  return [...celulas].every(celula => {
    return celula.textContent !== '';
  });
}

// Reinicia o jogo, limpando todas as células e definindo o jogador atual como 'X'
function reiniciarJogo() {
  celulas.forEach(celula => {
    celula.textContent = '';
  });
  jogadorAtual = 'X';
}
