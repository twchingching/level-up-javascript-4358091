// Write your code here
function numberPermutations(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * numberPermutations(letters.slice(1));
}

console.log(numberPermutations("hello"));
