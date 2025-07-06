// console.log('hello')

const nums = [1,2,3,4,5,6,7,8,9]

// const myNums = nums.forEach( item =>  {
//     // console.log(item)
//     return item
// });

//  console.log(myNums)

// const myNums = nums.filter((item)=>
//     item>5
// )

// console.log(myNums)

// const myNums = nums.map((item)=>{
//     return item+10
// })

//  console.log(myNums)
const initial = 0
const myNums = nums.reduce((acc,cur)=>{
    console.log(`acc: ${acc} and cur:${cur}`)
    return acc+cur
},initial)

console.log(myNums)

