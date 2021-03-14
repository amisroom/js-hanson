'use strict';

const ul = document.getElementById("list");
const div = document.getElementById("loading");
<<<<<<< HEAD
//  // 3秒後にresolveされた結果を表示する関数定義
// const resolveAfter3Seconds= () => {
//   // Promiseオブジェクトを返す
//   return new Promise((resolve) => {
//     // タイマーをセットする
//     setTimeout(() => {
//       resolve([
//         {
//           to: "bookmark.html",
//           img: "img/1.png",
//           alt: "画像1",
//           text: "ブックマーク"
//         },
//         {
//           to: "message.html",
//           img: "img/2.png",
//           alt: "画像2",
//           text: "メッセージ"
//         }
//       ]);
//     }, 3000);
//   });
// }
=======
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
>>>>>>> b64d84346753dba329ce1541613072b6391a0a90

// 非同期関数を定義
async function asyncCall() {
try {
<<<<<<< HEAD
  const response = await fetch('https://jsondata.okiba.me/v1/json/FtQ63210306142524')
  const json = await response.json();
  const data = await json.data;
  return data;
} catch(error) {
  console.log('error');
} finally {
  setTimeout(() => {
    createElements();
    loading.style.display = "none";
  }, 3000);
=======
  // 3秒後にresolveされた結果を表示する関数定義を定数valuesに格納
  const values = await resolveAfter3Seconds();
  createElements(values);
} catch(error) {
  console.log('error');
} finally {
  loading.style.display = "none";
>>>>>>> b64d84346753dba329ce1541613072b6391a0a90
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
        img.src = e.img;
        img.alt = e.alt;
        a.textContent = e.text;
  
        ul.appendChild(li);
        li.appendChild(a);
        a.appendChild(img);
      }
<<<<<<< HEAD
  }
=======
  }
>>>>>>> b64d84346753dba329ce1541613072b6391a0a90
