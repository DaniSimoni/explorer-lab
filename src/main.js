import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
//console.log(ccBgColor01)

//ccBgColor01.setAttribute('fill', 'green')
//ccBgColor02.setAttribute('fill', 'red')

function setCardType(type) {
const colors = {
  visa: ["#2D57F2", "#436D99"],
  mastercard: ["#C69347", "#DF6F29"],
  paypal: ["#EEEEEE", "#00FF85"],
  cielo: ["#FFFFFF", "#F22D5D"],
  default: ["black", "gray"],
}

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
  

}

  //setCardType("default")

  globalThis.setCardType = setCardType