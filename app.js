alert(`Calcule quantos gramas de Creatina você precisa tomar!`)
pesoAtual = prompt(`Qual é o seu peso atual?(Em kg)
(Caso o número seja quebrado, utilize '.' no lugar da ',' Ex: "60.3")`)
let valorDaCreatina = 0.07
let calculo = parseInt(Math.round(valorDaCreatina * pesoAtual))
let valorTotal = calculo.toFixed(2)
alert(`Você precisa tomar aproximadamente ${valorTotal} gramas de Creatina por dia.`)