// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`, 
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`, 
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`, 
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`, 
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`, 
          getInstruction("mashedPotatoes", 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`}, 
            /*getInstruction("mashedPotatoes", 6, (step6) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`}, 
              
              
              (error) =>{
                console.log(`el error es ${error}`)
              }),
            */
            
            (error) =>{
              console.log(`el error es ${error}`)
            }),
          
          
          (error) =>{
            console.log(`el error es ${error}`)
          }}),
        
        
        (error) =>{
          console.log(`el error es ${error}`)
        }}),
      
      
      (error) =>{
        console.log(`el error es ${error}`)
      }}),
    
    
    (error) =>{
      console.log(`el error es ${error}`)
    }}),
  
  
  (error) =>{
    console.log(`el error es ${error}`)
  }})

  
// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
    })
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      return obtainInstruction('steak', 2) })
      .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
        return obtainInstruction('steak', 3) })
        .then( (step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
          return obtainInstruction('steak', 4) })
          .then( (step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
            return obtainInstruction('steak', 5) })
            .then( (step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
              return obtainInstruction('steak', 6) })
              .then( (step6) => {
                document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                return obtainInstruction('steak', 7) })
                .then( (step7) => {
                  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                  return obtainInstruction('steak', 8) })
                  .then( (step8) => {
                    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
                    })
                    .catch((error) =>{
                      console.log(error)
                    })
  


// Iteration 3 using async/await
async function makeBroccoli() {
  try{ 
    const response = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${response}</li>`
  console.log(response)
  const response1 = await obtainInstruction("broccoli", 1)
  console.log(response1)
  document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`
  const response2 = await obtainInstruction("broccoli", 2)
  console.log(response2)
  document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`
  const response3 = await obtainInstruction("broccoli", 3)
  console.log(response3)
  document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`
  const response4 = await obtainInstruction("broccoli", 4)
  console.log(response4)
  document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`
  const response5 = await obtainInstruction("broccoli", 5)
  console.log(response5)
  document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`
  const response6 = await obtainInstruction("broccoli", 6)
  console.log(response6)
  document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`
  const response7 = await obtainInstruction("broccoli", 7)
  
 
  
  }catch(error) {
   

  }}
  
  
makeBroccoli()
