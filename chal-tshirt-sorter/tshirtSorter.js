// Write your solution below:
let sortStr = str =>{
    let newStr = str.split('').sort().reverse().join('')
   return newStr
}

console.log(sortStr('smsllsmsmmssslllsmmslsmsll'))
