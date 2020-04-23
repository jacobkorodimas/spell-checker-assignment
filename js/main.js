// Spell Check Starter by Mr. V

"use strict";

// Global Variables
let dictionary;
let aliceWordsCh1;
let aliceWordsFull;

// Load Data Files into Global Variables
loadDictionary();
loadAliceCh1();
loadAliceText();

// Event Listeners
document.getElementById("word-btn").addEventListener("click", word);
document.getElementById("ch1-btn").addEventListener("click", ch1);
document.getElementById("full-btn").addEventListener("click", full);

// Event Functions
// WORD FUNCTION
function word() {
  let type = document.getElementById('selectAlgorithm').value;
  // Get user word and convert to lowercase
  let userWord = document.getElementById("word").value;
  userWord = userWord.toLowerCase();

  let searchResult = search(dictionary, userWord, type);
  if (searchResult == -1) {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " is NOT in the dictionary.";
  } else {
    document.getElementById("word-result").innerHTML = "Linear Search: " + userWord + " IS in the dictionary.";
  }

}

// CH1 FUNCTION 
function ch1() {
  let type = document.getElementById('selectAlgorithm').value;

  let nonwords = 0;
  for (let i = 0; i < aliceWordsCh1.length; i++) {
    if (search(dictionary, aliceWordsCh1[i].toLowerCase(), type) == -1) {
      console.log(aliceWordsCh1[i].toLowerCase());
      nonwords++;
    }
  }
  document.getElementById('ch1-result').innerHTML = nonwords + " words are NOT in the dictionary.";
}

// FULL FUNCTION 
function full() {
  let type = document.getElementById('selectAlgorithm').value;
  let nonwords = 0;
  for (let i = 0; i < aliceWordsFull.length; i++) {
    if (search(dictionary, aliceWordsFull[i].toLowerCase(), type) == -1) {
      console.log(aliceWordsFull[i].toLowerCase());
      nonwords++;
    }
  }
  document.getElementById('full-result').innerHTML = nonwords + " words are NOT in the dictionary.";
}