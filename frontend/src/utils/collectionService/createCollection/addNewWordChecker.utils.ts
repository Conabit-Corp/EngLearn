export const addNewWordChecker = (firstword: string, secondWord: string, addWord: Function) => {
  console.log('ACACAC');
  if (firstword.length < 1 || secondWord.length < 1) {
    alert('Слово то введи.......');
  } else {
    addWord();
  }
}
