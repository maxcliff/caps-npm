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
  
caps('9000')
.then(data => {
  console.log(data)
}) 
 .catch(error => {
   console.log(error)
 }) 
  
  