const acronym = require('./');

acronym('for your information') 
  .then(data => {
    console.log(data)
  }) 
   .catch(error => {
     console.log(error)
   }) 
  

acronym("for your information")
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
  

acronym('talk to you later')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
