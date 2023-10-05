const defender = document.querySelector("#defender");
const attacker = document.querySelector("#attacker");
const points = document.querySelector("#points");
const roundsElement = document.querySelector("#rounds");
const tableElement = document.querySelector("#score-table");
let rounds = 0;
let defenderPoints = 0;
let attackerPoints = 0;

const defenderName = "Darkseid";
const attackerName = "Fênix Negra";

function rollDice() {
  const defenderScore = Math.floor(Math.random() * 6) + 1;
  const attackerScore = Math.floor(Math.random() * 6) + 1;

  // Atualiza a interface
  defender.textContent = `${defenderName}: ${defenderScore}`;
  attacker.textContent = `${attackerName}: ${attackerScore}`;

  // Verifica o vencedor
  if (defenderScore > attackerScore) {
    defenderPoints++;
  } else if (defenderScore < attackerScore) {
    attackerPoints++;
  }

  // Atualiza a contagem de rodadas
  rounds++;
  roundsElement.textContent = `Rodadas: ${rounds}`;

  // Atualiza a tabela de pontuação
  updateScoreTable();

  // Verifica se o jogo acabou
  if (defenderPoints >= 3 || attackerPoints >= 3 || rounds >= 10) {
    let winnerMessage = "";
    if (defenderPoints > attackerPoints) {
      winnerMessage = `${defenderName} venceu!`;
    } else if (defenderPoints < attackerPoints) {
      winnerMessage = `${attackerName} venceu!`;
    } else {
      winnerMessage = "O jogo empatou!";
    }
    alert(winnerMessage);
    // Reinicie o jogo
    resetGame();
  }
}

function resetGame() {
  defenderPoints = 0;
  attackerPoints = 0;
  rounds = 0;
  points.textContent = "0";
  roundsElement.textContent = "Rodadas: 0";
  clearScoreTable();
}

function updateScoreTable() {
  tableElement.innerHTML = `
    <tr>
      <th>${defenderName}</th>
      <th>${attackerName}</th>
    </tr>
    <tr>
      <td>${defenderPoints}</td>
      <td>${attackerPoints}</td>
    </tr>
  `;
}

function clearScoreTable() {
  tableElement.innerHTML = `
    <tr>
      <th>${defenderName}</th>
      <th>${attackerName}</th>
    </tr>
    <tr>
      <td>0</td>
      <td>0</td>
    </tr>
  `;
}

document.querySelector("#roll-dice").addEventListener("click", rollDice);
