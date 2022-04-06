"use strict";
let dat;
let tempo = 0;
let id = Number;
dat = document.getElementById("data");

function atualizar(tempo) {
  const segundos = document.getElementById("segundos");
  const minutos = document.getElementById("minutos");
  const horas = document.getElementById("horas");
  const dias = document.getElementById("dias");

  const qtdSegundos = tempo % 60;
  const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
  const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
  const qtdDias = Math.floor(tempo / (60 * 60 * 24));

  segundos.textContent = formatarDigito(qtdSegundos);
  minutos.textContent = formatarDigito(qtdMinutos);
  horas.textContent = formatarDigito(qtdHoras);
  dias.textContent = formatarDigito(qtdDias);
}

const formatarDigito = (tempo) => (tempo < 10 ? `0${tempo}` : tempo);

function mostrarData() {
  dat.className = "visivel";
}
function esconderData() {
  dat.className = "escondido";
}

const contagemRegressiva = () => {
  if (tempo > 0) {
    pararContagem();
  }
  tempo = data(dat.value);
  id = setInterval(contar, 1000);
};

const pararContagem = () => {
  clearInterval(id);
};

const contar = () => {
  if (tempo == 0) {
    pararContagem();
  }
  atualizar(tempo);
  tempo--;
};

console.log(tempo);

const data = (evento) => {
  const agora = new Date();
  const a = new Date(evento);

  esconderData();

  const diferenca = Math.abs(agora.getTime() - a.getTime());
  return Math.floor(diferenca / 1000);
};
const icone = document.getElementById("icone");
icone.addEventListener("click", mostrarData);
icone.addEventListener("click", pararContagem);
