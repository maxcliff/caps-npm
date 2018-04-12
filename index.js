"use strict";

module.exports = function caps(sentence, callback) {
  return new Promise((resolve, reject) => {

    if (sentence.length === 0) {
      reject('String, Please! e.g. "for your information"')
      return callback('String, Please! e.g. "for your information"')

    } else {
      const caps = sentence.toUpperCase(" ")     
      console.log(caps)
    }
  })
};
