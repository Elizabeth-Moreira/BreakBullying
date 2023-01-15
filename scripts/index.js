function getInput() {
  const nome = document.getElementById("nameInput").value;
  const idade = document.getElementById("idadeInput").value;
  const palavraPasse = document.getElementById("passwordInput").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("idade", idade);
  localStorage.setItem("palavraPasse", palavraPasse);
}
