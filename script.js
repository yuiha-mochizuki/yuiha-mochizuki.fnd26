'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const hiraganaInput = document.querySelector('#Hiragana-input');
const numberOfNotes = document.querySelector('.number-of-notes');



function countHiragana(){
  let test =  hiraganaInput.value.length;
  if(test > 0){
    const regex = /[ぁぃぅぇぉゃゅょゎァィゥェォャュョヮ]/g;
    let result1 = hiraganaInput.value.match(regex);
    let result2
    if (result1 !== null){
      result2 = result1.length
    }else{
      return numberOfNotes.textContent = test;
    }
    return numberOfNotes.textContent = test - result2;
  }else{
    return numberOfNotes.textContent = "0";
  }
}
hiraganaInput.addEventListener('input',countHiragana);
