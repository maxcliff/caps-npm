"use strict"

module.exports = function caps(sentence, callback) {
  return new Promise((resolve, reject) => {

    if (sentence.length === 0) {
      reject('Oops, the value is empty!')
      return callback('Oops, the value is empty!')

    } else {
      const caps = sentence.toUpperCase(" ")     
      console.log(caps)
    }
   
  })
};
