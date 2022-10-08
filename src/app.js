document.getElementById ('btn').addEventListener ('click', geradorDeConselhos)

const conselho = document.getElementById ('conselho')
const conteudo = document.getElementById ('conteudo')

async function geradorDeConselhos () {
    const url = 'https://api.adviceslip.com/advice'
    const conselhoResposta = await fetch (url)
    const conselhoGerado = await conselhoResposta.json()
    conselho.innerText = `CONSELHO # ${conselhoGerado.slip.id}`
    conteudo.innerText = `${conselhoGerado.slip.advice}`
}
geradorDeConselhos ()

module.exports = geradorDeConselhos
