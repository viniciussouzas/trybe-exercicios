const scoreCandidate = 59

if (scoreCandidate >= 80) {
  console.log ("Parabéns, você foi aprovado(a)!");
} else if (scoreCandidate <= 80 && scoreCandidate >= 60) {
  console.log("Você está na nossa lista de espera!");
} else {
  console.log ("Você foi reprovado!");
}