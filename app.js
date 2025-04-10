<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Adivinhe o Número</title>
</head>
<body>
  <script>
    alert("🎯 Bem-vindo ao Jogo: Adivinhe o Número!");

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let chute = null;

    while (chute !== numeroSecreto) {
      chute = parseInt(prompt("Digite um número entre 1 e 100:"));

      if (isNaN(chute) || chute < 1 || chute > 100) {
        alert("⛔ Por favor, digite um número válido entre 1 e 100!");
        continue;
      }

      tentativas++;

      if (chute < numeroSecreto) {
        alert("📉 Muito baixo! Tente um número maior.");
      } else if (chute > numeroSecreto) {
        alert("📈 Muito alto! Tente um número menor.");
      } else {
        alert(`🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`);
      }
    }

    if (confirm("Deseja jogar novamente?")) {
      location.reload();
    } else {
      alert("Obrigado por jogar! 👋");
    }
  </script>
</body>
</html>
