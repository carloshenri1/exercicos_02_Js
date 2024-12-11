var valorNumerico = Number(prompt("Digite um valor"))

alert(`O valor formatado = ${valorNumerico.toLocaleString("pt-br" , {style: "currency", 
    currency:"BRL"
})}`)