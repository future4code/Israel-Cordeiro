```
function calculaNota(ex, p1, p2) {
  let conceito
  const media =((ex*1) + (p1*2) + (p2*3)) / (1+2+3)
  if (media >=9){
    let conceito = "A"
    return conceito
    
  }else if(media < 9 && media >= 7.5){
    let conceito = "B"
    return conceito
    
  }else if (media < 7.5 && media >= 6){
    let conceito = "C"
    return conceito
    
  }else{
    let conceito = "D"
    return conceito
  }
}
```