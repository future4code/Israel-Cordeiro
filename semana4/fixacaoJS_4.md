```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const conta = arrayDeNumeros.filter ((numero) => numero === numeroEscolhido).length
  
  if (conta === 0) return "Número não encontrado"
  
  return `O número ${numeroEscolhido} aparece ${conta}x`
  
}  
```
