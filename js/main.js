let ingredients = {
  bread: ["white", "black", "whole wheat"],
  meats: ["hams", "chicken", "lamb", "beef"],
  vegetabbles: ["persley", "garlic", "beans", "ginger"],
  spices: ["paper", "onion", "salt", "paprika"]

}

let have_ingredients= true;

  let order = ( time, work ) => {

    return new Promise( ( resolve, reject )=>{
  
      if( have_ingredients ){
  
        setTimeout(()=>{
  
         // work is 👇 getting done here
          resolve( work() )
  
  // Setting 👇 time here for 1 work
         }, time)
  
      }
  
      else{
        reject( console.log("there is not ingredients") )
      }
  
    })
  }
// step 1
order(2000,()=>console.log(`Take two slices of ${ingredients.bread[1]} bread`))

// step 2
.then(()=>{
  return order(0,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log(`Add ${ingredients.meats[0]} as the meat`))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`Layer on some ${ingredients.vegetabbles.join(", ")}`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log(`Spread ${ingredients.spices[0]} and ${ingredients.spices[2]}`))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log("Place the second slice of bread on top"))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Your burger is ready!"))
})