'use strict';

const ul = document.getElementById("list");
const div = document.getElementById("loading");

// 非同期関数を定義
async function asyncCall() {
try {
  // JSONを読み込む
  const response = await fetch('https://jsondata.okiba.me/v1/json/FtQ63210306142524')
  const json = await response.json();
  createElements(json.data);
} catch(error) {
  console.log('error');
} finally {
  loading.style.display = "none";
}
}

setTimeout(() => {
  asyncCall();
}, 3000);

// DOMを作る関数
    function createElements(items) {
      for (const e of items) {
        const a = document.createElement("a");
        const img = document.createElement("img");
        const li = document.createElement("li");
  
        a.href = e.to;
        img.src = e.img;
        img.alt = e.alt;
        a.textContent = e.text;
  
        ul.appendChild(li);
        li.appendChild(a);
        a.appendChild(img);
      }
  }
