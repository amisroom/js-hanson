'use strict';

const ul = document.getElementById("list");
const div = document.getElementById("loading");
 // 3秒後にresolveされた結果を表示する関数定義
const resolveAfter3Seconds= () => {
  // Promiseオブジェクトを返す
  return new Promise((resolve) => {
    // タイマーをセットする
    setTimeout(() => {
      resolve([
        {
          to: "bookmark.html",
          img: "img/1.png",
          alt: "画像1",
          text: "ブックマーク"
        },
        {
          to: "message.html",
          img: "img/2.png",
          alt: "画像2",
          text: "メッセージ"
        }
      ]);
    }, 3000);
  });
}

// 非同期関数を定義
async function asyncCall() {
try {
  // 3秒後にresolveされた結果を表示する関数定義を定数valuesに格納
  const values = await resolveAfter3Seconds();
  createElements(values);
} catch(error) {
  console.log('error');
} finally {
  loading.style.display = "none";
}
}
    asyncCall();

// DOMを作る関数
    function createElements(items) {
      for (const e of items) {
        const a = document.createElement("a");
        const img = document.createElement("img");
        const li = document.createElement("li");
  
        a.href = e.to;
        // imgタグのsrc属性にimgプロパティを代入
        img.src = e.img;
        // imgタグのalt属性にaltプロパティを代入
        img.alt = e.alt;
        // liが持つtextContentプロパティに文字列をセット
        a.textContent = e.text;
  
        ul.appendChild(li);
        li.appendChild(a);
        a.appendChild(img);
      }
  }