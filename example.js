const caps = require('./');

caps("it's") 
    .then(data => {
      console.log(data)
    }) 
    .catch(error => {
      console.log(error)
    }) 
  
caps("over")
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
  
caps('nine thousand!!!!')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
