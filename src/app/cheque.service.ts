import { Injectable } from '@angular/core';
import { Cheque } from './cheque';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  constructor() { }

  cheque: Cheque = { value: 0 };
  get chequeText() {
    return this.FormatChequeAsWords(this.cheque.value);
  }

  FormatChequeAsWords(num: number) {

    // Get our dollar array
    let dollarArray: number[] = num != 0 ? this.IntAsArray(Math.trunc(num)) : [];

    // Get our cents array
    let centVal: number = Math.round((num - Math.trunc(num)) * 100);
    let centsArray: number[] = centVal != 0 ? this.IntAsArray(centVal) : [];

    let dollars: string = this.formatNumArrayAsWords(dollarArray);
    let cents: string   = this.formatNumArrayAsWords(centsArray);
    return dollars + (dollars ? ' dollars ' : '' ) + (dollars && cents ? ' and ' : '' ) + cents + (cents ? ' cents ' : '');

    // return dollarArray.join('') + " Dollars and " + centsArray.join('') + " cents";
  }

  //Get number as array of digits
  //Does not support decimals (will return NaN for decimal point ), so either Math.Trunc before use, or handle NaN
  IntAsArray(num: number) {

    return Array.from(String(num), Number);

  }


  /*
    For this conversion, we are using three arrays,
      oneToTeenArr - Numbers 1 to 19, with a spacer for 0.
      tenArr - Tens units - twenty, thirty, ..., ninety; with two spacers for "naughties" 0-9 and the "teens" 10-19
      largeUnitArr - Orders of magnitude(?) - Thousand, ..., Trillion,  with a spacer for hundred
        - Hundred doesn't nicely fit how LargeUnits, as we just plop it in when there is any number in the hundreds position, so it is left out to avoid confusion
    We are using spacers so we can easily fetch the word without much mucking around, i.e tens(3) returns 'thirty', instead of needing to call tens(3-1)
  */
  formatNumArrayAsWords(numArray: number[]) {

    let chunk: number = 3;
    let retString: string = '';

    let oneToTeenArr: string[] =
      ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenArr: string[] =
      ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let largeUnitArr: string[] =
      ['', 'thousand', 'million', 'billion', 'trillion'];

    // reverse our input so we can start from the smallest group
    let tempArray: number[] = numArray.reverse();



    /* loop over array in chunks, and build our string */
    for(let i = 0; i < tempArray.length; i += chunk){
      let workingArray : number[] = tempArray.slice(i, i+chunk);



      console.log(i/chunk + " - " + workingArray + "-" + workingArray[2])
      let oneToTeens = oneToTeenArr[(10*workingArray[1]) + workingArray[0]] || oneToTeenArr[workingArray[0]];
      let tens = tenArr[workingArray[1]] && tenArr[workingArray[1]] || '';
      let hundred = workingArray[2] ? oneToTeenArr[workingArray[2]] + ' hundred ' : '';


      let tempString = hundred && (tens || oneToTeens) ? hundred + ' and ' + tens + ' ' + oneToTeens : hundred + ' ' + tens + ' ' + oneToTeens;
      let largeUnit = largeUnitArr[i/chunk] || '';
      tempString = tempString.trim() ? tempString + ' ' + largeUnit : '';
      retString = tempString.trim() + ' ' + retString;
    }
    return retString.trim();

  }


}
