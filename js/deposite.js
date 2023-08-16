
document.getElementById('deposite-btn').addEventListener('click',function (){
const depositeField =document.getElementById('deposite-site')
const newDepositeAmountStrong =depositeField.value

 const total_Amount=parseFloat(newDepositeAmountStrong)
console.log({total_Amount})
const depositeTotalElement =document.getElementById('doller-btn')
const depositeTotalString = depositeTotalElement.innerText

const depositeTotal=parseFloat(depositeTotalString)
console.log({depositeTotal})
const currentTotal = total_Amount + depositeTotal
// console.log(currentTotal)
depositeTotalElement.innerText=currentTotal

const balanceTotal = document.getElementById('balance')
const balanceNew = balanceTotal.innerText
const balanceSome = parseFloat(balanceNew)
console.log({balanceSome})
const balanceTotalAmount =balanceSome+currentTotal
balanceTotal.innerText=balanceTotalAmount


depositeField.value=''
})
