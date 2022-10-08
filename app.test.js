const geradorDeConselhos = require ('./src/app')

it ('verificar se a url está correta' , () => {
    const url = {'https://api.adviceslip.com/advice' : false}
    const resultado = geradorDeConselhos(url)
    expect (resultado).toBe ('https://api.adviceslip.com/advice')
})
