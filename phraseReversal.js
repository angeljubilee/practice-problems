/*
Hello world! // returns "!dlrow olleH"
*/

// const arr = []
// Split the word by whitespace
// Loop through array
// Reverse the word and push onto answer

function phraseReversal(s) {
  const s_arr = s.split(' ').reverse();

  const ans = s_arr.map(word => {
    return word.split('').reverse().join('');
  });

  return ans;
}

console.log(phraseReversal('Hello world!'));
