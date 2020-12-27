import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberFormatterService {

  constructor() { }


  //Get number as array of digits
  //Does not support decimals (will return NaN for decimal point ), so either Math.Trunc before use, or handle NaN
  IntAsArray(num: number) {

    return Array.from(String(num), Number);

  }

  /*
    Formats an array of single digits into words - use IntAsArray to conver

    For this conversion, we are using three arrays,
      oneToTeenArr - Numbers 1 to 19, with a spacer for 0.
      tenArr - Tens units - twenty, thirty, ..., ninety; with two spacers for "naughties" 0-9 and the "teens" 10-19
      largeUnitArr - Orders of magnitude(?) - Thousand, ..., Trillion,  with a spacer for hundred
        - Hundred doesn't nicely fit how LargeUnits, as we just plop it in when there is any number in the hundreds position, so it is left out to avoid confusion
    We are using spacers so we can easily fetch the word without much mucking around, i.e tens(3) returns 'thirty', instead of needing to call tens(3-1)
  */
  formatNumArrayAsWords(numArray: number[]) {

    let chunk: number = 3;
    // let retString: string = '';

    let oneToTeenArr: string[] =
      ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenArr: string[] =
      ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let largeUnitArr: string[] =
      ['', 'thousand', 'million', 'billion', 'trillion'];

    // reverse our input so we can start from the smallest group
    numArray.reverse();
    let stringArr : string[][] = [];

    /* loop over array in chunks, and build our string */
    for(let i = 0; i < numArray.length; i += chunk){

      let workArr : number[] = numArray.slice(i, i+chunk);
      /* Hundreds, Teens/Tens, Thousands - We combine Teens and Tens with a join, as we don't need to put an AND between them */
      stringArr[i] =  [workArr[2] ? oneToTeenArr[workArr[2]] + ' hundred' : '',
                      [tenArr[workArr[1]] && tenArr[workArr[1]] || '', oneToTeenArr[(10*workArr[1]) + workArr[0]] || oneToTeenArr[workArr[0]]].join(' ').trim()]
      stringArr[i][2] = stringArr[i].join('') ? largeUnitArr[i/chunk] || '' : '';

      /* if we have hundreds AND tens/teens, then pop an AND into the hundreds cell */
      if (stringArr[i][0] && stringArr[i][1]) stringArr[i][0] += ' and';
    }

    /* reverse our built string array to put it into the correct order */
    stringArr.reverse();

    /* pop our smallest(now last) chunk so we can add an AND in front if necessary */
    let lastItem : string[] = stringArr.pop() as string[];

    /* if we have hundreds or thousands in our lastItem, add it back into the array, and empty out our lastItem */
    if(lastItem && lastItem[0] != '' || lastItem[2] != '') {
      stringArr.push(lastItem);
      lastItem = ['']
    }
    /* squish our string chunks together, filtering out blanks so we don't get double spaces */
    let returnString : string = stringArr.map(itm => itm.filter(Boolean).join(' ')).filter(Boolean).join(' ');
    returnString = [returnString,lastItem.join('')].filter(Boolean).join(' and ');
    return returnString.trim();


  }

}
