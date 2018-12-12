const _ = {
	// Paul Milazzo
	// JS1 October 16 2018
	// Capstone project - Lodash methods
	
  clamp(number, lower, upper){
   
      //capture the lower bound value
      let lowerClampedValue = Math.max(number, lower)
      let clampedValue = Math.min(lowerClampedValue, upper)
      return clampedValue;
  },// end of clamp method #1
  
  inRange (number, start, end){
    // if end is undefined, start = 0 and end = start, then check if in range
    if (typeof end === 'undefined'){
      end = start;
      start = 0;
    } else if ( start > end ){
      // swap the two values around
      let temp = start;
      start = end;
      end = temp;
    }
    if ((number > start) && (number < end)){
        return true;
    }
    else
      return false;
  },// end of inRange method #2
  
  words(string){
    var words = string.split(' ');
    return words;
  }, // end of words method #3  
  
  pad (string, length){
    let strlen = string.length;
    if (length >= strlen){
      let padding = length - strlen;
      let begPad = Math.floor(padding / 2);
      let endPad = length - strlen - begPad;
    	let paddedString = ' ';
      paddedString = paddedString.repeat(begPad)+string+paddedString.repeat(endPad);
      return paddedString;
    }
      else
        return string;
  }, // end of pad method #4
  
  has(myObject, myKey){
    let hasValue = myObject.myKey;
    //store the key, value pairs of the object.
    if (hasValue != 'undefined'){
  		// return true if the key is undefined
      return true;
    }
    for (let i = 0; i < myObject.length; i++){
			// check if the key is within the object
      // return the boolean status accordingly.
      if (myObject[0] === myKey){
        return true;
      }
      else {
        return false;
      }
    } // for loop for objects
  }, // end of has method #5
  
  invert(myObject){
    //object variable to hold inverted value:key pairs
    let invObject = {};
    // store old value and old key
    let oldKey = '';
    let oldValue = '';
    for (oldKey in myObject){
      // use bracket method to cater for all key and value types
      oldValue = myObject[oldKey];
      //swap the value for key
      invObject[oldValue] = oldKey;
    }
    return invObject;
  }, // end of invert() method #6
  
  findKey(myObject, myPredicate){
    for (let aKey in myObject){
      if (myPredicate(myObject[aKey])){
        return aKey;
      }
    }
    return undefined;
  }, // end of findkey() method #7
  
  drop(theArray, dropNum){
    // array to hold remaining elements
    let droppedArray = [];
    // if num is not defined default to 1
    if((dropNum === undefined) || (dropNum === '')){
      dropNum = 1;
    }
    droppedArray = theArray.slice(dropNum);
    return droppedArray;
  }, // end of the drop() method #8
  
  dropWhile(array, predicate){
    //declare function to call predicate
    const myPred = (element, index) => {
      //return the index value of first false element
      return !(predicate(element, index, array));
    }
  	let dropNumber = array.findIndex(myPred);
    //call drop function to slice elements to new array
    let droppedArray = this.drop(array, dropNumber);
   	return droppedArray;
  },//end of the dropWhile() method #9
  
  chunk(array, size){
    if ((size === '') || (size === undefined)){
      size = 1;
    }
    //declare array to hold the chunked elements of old array
    let arrayChunks = [];
    for (var i=0; i<array.length; i+=size)
      arrayChunks.push(array.slice(i,i+size));
    
    //console.log(array);
    //console.log(arrayChunks);
    
    return arrayChunks;
  } // end of method #10 chunk()
}


// Do not write or modify code below this line.
module.exports = _;