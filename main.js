"use strict"


async function getContatos() {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    return data
}

async function postContatos(contatoNovo) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contatoNovo)
    }
    const response = await fetch(url, options)

    return response.ok
}

async function putContatos(contato, id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contato, id)
    }
    const response = await fetch(url, options)

    return response.ok
}

async function deleteContatos(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(url, options)

    return response.ok
}

const contato =  {
    "nome": "vini",
    "celular": "11 9 4002-8922",
    "foto": "../img/vini.png",
    "email": "vini@gmail.com",
    "endereco": "sei la sei la, 123",
    "cidade": "carapicuiba"
}
