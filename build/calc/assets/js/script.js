
var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five  = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var displayInput = document.getElementById('display');
var divideButton = document.getElementById('divideButton');
var dot = document.getElementById('.');
var ac = document.getElementById('AC');
var de = document.getElementById('DE');
var equal = document.getElementsByClassName('equal') [0];
var doubleZero = document.getElementById('doubleZero')
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById( "multiply");
zero.addEventListener('click', function() {
    displayInput.value += '0';
});
one.addEventListener('click', function() {
    displayInput.value += '1';
});
two.addEventListener('click', function() {
    displayInput.value += '2';
});
three.addEventListener('click', function() {
    displayInput.value += '3';
});
four.addEventListener('click', function() {
    displayInput.value += '4';
});
five.addEventListener('click', function() {
    displayInput.value += '5';
});
six.addEventListener('click', function() {
    displayInput.value += '6';
});
seven.addEventListener('click', function() {
    displayInput.value += '7';
});
eight.addEventListener('click', function() {
    displayInput.value += '8';
});
nine.addEventListener('click', function() {
    displayInput.value += '9';
});
divideButton.addEventListener('click', function() {
    displayInput.value += '/';
});

dot.addEventListener('click', function() {
    displayInput.value += '.';
});

equal.addEventListener('click', function() {
    displayInput.value = eval(displayInput.value);
});
doubleZero.addEventListener('click', function() {
    displayInput.value += '00';
});
ac.addEventListener('click', function() {
    displayInput.value = '';
});

de.addEventListener('click', function() {
    var str = displayInput.value;
    displayInput.value = str.substring(0, str.length - 1);
});

plus.addEventListener('click', function() {
    displayInput.value += '+';
});

minus.addEventListener('click', function() {
    displayInput.value += '-';
});

multiply.addEventListener('click', function() {
    displayInput.value += '*';
});





