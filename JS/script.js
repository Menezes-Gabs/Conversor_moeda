function converterMoeda() 
{
const MoedaOrigem = "BRL"; /*entrada*/

const MoedaDestino = "USD";
const MoedaDestino = "EUR";
const MoedaDestino = "GBP";

/*api de dados das moedas*/
const url = `https://api.frankfurter.dev/v2/rates?base=${moedaOrigem}&quotes=${moedaDestino}`;

fetch(url) /*busca os dados na API*/
    .then(response => response.json()) /*transforma em json*/
    .then(data => {
        console.log(data); /*Mostra no navegador o resultado(saida)*/
    })
    .catch(error => {
        console.log("Erro ao buscar API:", error);
    });
}