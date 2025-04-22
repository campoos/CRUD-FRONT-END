"use strict"

import { getContatos, getContatosPorNome } from "./contatos.js"

function criarCard(contato) {
    const container = document.getElementById("container")

    const card = document.createElement("div")
    card.classList.add("cardContato")
    card.innerHTML = `
    <img src="${contato.foto}" alt="">
    <h2>${contato.nome}😜</h2>
    <p>${contato.celular}</p>
    `
    container.appendChild(card)
}

async function carregarContatos() {
    const contatos = await getContatos()
    contatos.forEach(criarCard)
}

async function exibirPesquisa(evento) {       
    const container = document.getElementById("container")
    if(evento.key == "Enter"){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren("")
        contatos.forEach(criarCard)
    }
    // const contatos = await getContatosPorNome()
    // contatos.forEach(criarCard)
}

carregarContatos()

document.getElementById("nomeContato")
        .addEventListener('keydown', exibirPesquisa)