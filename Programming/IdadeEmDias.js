const lines = [365]

let days = lines[0]

const years =  parseInt(days / 365)
days %= 365
const months = parseInt(days / 30)
days %= 30
const dias = parseInt((days - years * 365) - months * 30)

console.log(`${years} ano(s)`)
console.log(`${months} mes(es)`)
console.log(`${days} dia(s)`)
