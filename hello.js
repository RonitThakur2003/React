// console.log('hello')

// const nums = [1,2,3,4,5,6,7,8,9]

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
//     return item+5
// })

//  console.log(myNums)
// const initial = 0
// const myNums = nums.reduce((acc,cur)=>{
//     console.log(`acc: ${acc} and cur:${cur}`)
//     return acc+cur
// },initial)

// console.log(myNums)



// temporal dead zone and hoisting

// console.log(a)
// var a =10;      it is hoisted and give undefined


// console.log(b)
// let b =10;       it is also hoisted but give error cant access before intialization because of temporal dead zone 

// let and const in block scoped and var is functional scoped


// console.log(1 - "5")

// console.log(1 +"5")


const hello = (name)=>{
    console.log(`Hello ${name}`)
}

hello('Ronit')
