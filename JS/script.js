//variaveis constantes
const valor = document.getElementById("valor")
const de = document.getElementById("de")
const para = document.getElementById("para")
const resultado = document.getElementById("resultado")
const converterBtn = document.getElementById("converterBtn")
const trocar = document.getElementById("trocar")

converterBtn.addEventListener("click", converter)

trocar.addEventListener("click", () => {

    const temp = de.value

    de.value = para.value

    para.value = temp
})

//possiveis eventos de erro: valor negativo, valor vazio, mesma moeda selecionada
async function converter() {

    if (valor.value <= 0 || valor.value === "") {

        alert("Digite um valor válido")
        return
    }

    if (de.value === para.value) {

        alert("Escolha moedas diferentes")
        return
    }

    try {

        resultado.innerText = "Convertendo..." //Exibe uma mensagem de carregamento enquanto aguarda a resposta da API

        const url =
        `https://api.frankfurter.dev/v1/latest?amount=${valor.value}&from=${de.value}&to=${para.value}`

        const resposta = await fetch(url) //Chama a API para obter os dados de conversão

        const dados = await resposta.json() //Converte a resposta da API para um objeto JavaScript

        const convertido = dados.rates[para.value] //Obtém o valor convertido da resposta da API

        resultado.innerText =
        `${Number(valor.value).toFixed(2)} ${de.value} = ${convertido.toFixed(2)} ${para.value}` //Exibe o resultado da conversão formatado com 2 casas decimais
        resultado.style.color = "green"

    } catch (erro) {
       
        resultado.innerText = "Erro ao converter"
        resultado.style.color = "red"
        console.log(erro)
    }
}

/*dark mode*/ 
const themeToggle = document.getElementById("themeToggle")

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light")

    if(document.body.classList.contains("light")){
        themeToggle.style.color = "black"
        themeToggle.innerText = "Light mode"

    }else{
        themeToggle.style.color = "white"
        themeToggle.innerText = "Dark mode"
    }
})