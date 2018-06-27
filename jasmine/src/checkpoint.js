String.prototype.hasVowels = function(){
  return /[AEIOUaeiou]/.test(this);
};

String.prototype.toUpper = function () {
  var output = "";
  for(var i = 0 ; i < this.length ; i++){
    output += String.fromCharCode(this.charCodeAt(i) - 32);
  }
  return output;
};

String.prototype.toLower = function(){
  var output = "";
  for(var i = 0 ; i < this.length ; i++){
    output += String.fromCharCode(this.charCodeAt(i) + 32);
  }
  return output;
};

String.prototype.ucFirst = function () {
  var output = "";
  output += this.charAt(0).toUpper();
  for(var i = 1 ; i < this.length ; i++){
    output += this.charAt(i);
  }
  return output;
};

String.prototype.isQuestion = function(){
  return /\?$/.test(this);
};

String.prototype.in = function () {
  return this.split(" ");
};

String.prototype.wordCount = function () {
  return this.in().length;
};

String.prototype.isCapitalLetter = function () {
  return /[A-Z]/.test(this);
};

String.prototype.isSmallLetter = function () {
  return /[a-z]/.test(this);
};

String.prototype.inverseCase = function () {
  var output = "";
  for(var i = 0 ; i < this.length ; i++){
    if(this.charAt(i).isCapitalLetter() == true){
      output += this.charAt(i).toLower();
    }else{
      output += this.charAt(i).toUpper();
    }
  }
  return output;
};

String.prototype.alternatingCase = function () {
  var output = "";
  for(var i = 0 ; i < this.length ; i++){
    if(i % 2 !== 0 && this.charAt(i).isCapitalLetter() === false){
      output += this.charAt(i).toUpper();
    }
    else if(i % 2 === 0 && this.charAt(i).isSmallLetter() === false){
      output += this.charAt(i).toLower();
    }else{
      output += this.charAt(i);
    }
  }
  return output;
};

String.prototype.getMiddle = function () {
  var stringLength = this.length;
  if(stringLength % 2 === 0){
    return "" + this.charAt((stringLength / 2) - 1 ) + this.charAt(stringLength / 2);
  }else{
    return this.charAt((stringLength - 1) / 2);
  }
};

String.prototype.numberWords = function () {
  var output = "";
  var association = {
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine"
  };
  for(var i = 0 ; i < this.length ; i++){
    output += association[this.charAt(i)] + " ";
  }
  return output;
};

String.prototype.isDigit = function(){
  if(/\d+?/.test(this) && !(this.length > 1)){
    return true;
  }
  return false;
};

// String.prototype.doubleCheck = function () {
//   return /.{2}/.test(this);
// };

// String.prototype.toCurrency = function () {
//   var wholeValue = this.split(".")[0];
//   for(var i = wholeValue.length - 1 ; i > 0 ; i--){
//
//   }
// };
//
// String.prototype.fromCurrency = function () {
//   var wholeValue = this.split(".")[0];
//   for(var i = wholeValue.length - 1 ; i > 0 ; i--){
//
//   }
// };
