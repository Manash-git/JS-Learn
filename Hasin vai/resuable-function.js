function reverseString(data) {
    var output= data.split('').reverse().join('');
    return output;
}

var sentence="Hello World";
var reverseSentence= reverseString(sentence);
console.log(reverseSentence);

var sentence2="I am Manash";
var reverseSentence2=reverseString(sentence2);
console.log(reverseSentence,reverseSentence2);

