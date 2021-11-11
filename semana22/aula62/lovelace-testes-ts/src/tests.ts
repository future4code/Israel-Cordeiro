import { isEven } from "./index";

// console.log("Boa segunda feira")

if(isEven(2) === true){
  console.log("OK")
} else{
  console.log(`isEven(2) retornou ${isEven(2)}`)
}

if(isEven(3) === false){
  console.log("OK")
} else{
  console.log(`isEven(3) retornou ${isEven(3)}`)
}

if(isEven(2.6) === false){
  console.log("OK")
} else{
  console.log(`isEven(2.6) retornou ${isEven(2.6)}`)
}

