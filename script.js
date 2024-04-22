'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const hiraganaInput = document.querySelector('#hiragana-input');
const numberOfNotes = document.querySelector('.number-of-notes');
const forImages = document.querySelector('#for-images');
const saveButton = document.querySelector('#save-button')
// 拗音を数えて引く
function countHiragana(){
  let wordCount =  hiraganaInput.value.length;
  if(wordCount > 0){
    const regex = /[ぁぃぅぇぉゃゅょゎァィゥェォャュョヮ]/g;
    let result1 = hiraganaInput.value.match(regex);
    let result2
    if (result1 !== null){
      result2 = result1.length
    }else{
      return numberOfNotes.textContent = wordCount;
    }
    return numberOfNotes.textContent = wordCount - result2;
  }else{
    return numberOfNotes.textContent = "0";
  }
}

hiraganaInput.addEventListener('input', countHiragana);

// 入力した文字と画像用の文字を一致させる
function matchForImages(){
  if (hiraganaInput.value !== null){
    let result = forImages.value = hiraganaInput.value;
    return result;
  } else{
    return "";
  }
}

hiraganaInput.addEventListener('input', matchForImages)

// 画像として保存
function download() {
  const image = document.querySelector("#for-images");
  if (!image) {
    console.error("要素が見つかりませんでした。");
    return;
  }
  const text = image.value;
  const blob = new Blob([text],{type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'sample.txt';
  a.click();
}

saveButton.addEventListener('click', download);
