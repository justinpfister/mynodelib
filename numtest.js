// Test for me!!


const numeral = require('numeral');
const isNumeric = require("isnumeric");

export const yFinNumberConverter = (num) => {
  const number = numeral().unformat(num);
  const lastchar = num.substr(-1);
  if(!isNumeric(lastchar)){
      switch(lastchar){
        case 'B':
        return number * 1000000000;
        case 'M':
        return number * 1000000;
        case 'K':
        return number * 1000;
      }
  }

  return number;

};
