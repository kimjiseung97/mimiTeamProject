import{inputList,inputEnterList} from './input.js';
import{resetList} from './reset.js'
// //리스트 입력 받는 함수(버튼클릭 이벤트)
// function inputList() {
//     const $listAddbar = document.getElementById('list-add-bar');
//     const $addButton = document.getElementById('addButton');
//     // console.log($listAddbar);

//     $addButton.onclick = e => {
//         // console.log('추가버튼클릭함!');
//         //입력값 받아서 dom값 생성하고 ul리스트에 추가하기'
//         if ($listAddbar.value === "") {
//             alert('할일을 입력하세요!');
//             $listAddbar.focus();
//         } else {
//             //ul 값 가져오기
//             const $listContainer = document.getElementById('#list-container');
//             // console.log($listContainer);
//             // console.log($listAddbar.value);
//             //div태그 생성
//             //만든 div태그에 class부여
//             //입력받은 값 집어넣기
//             // $listContainer.appendChild($listValue);
//             $listContainer.innerHTML += "<li><div class='list section'>" + $listAddbar.value + "</div><a href='#' id='inli-modify' title='Button push blue/green' class='button btnPush btnBlueGreen button-inli'>수정</a><a href='#' id='inli-delete' title='Button push blue/green' class='button btnPush btnRed button-inli'>삭제</a></li>";
//             $listAddbar.value = "";
//             inlineButtonDelete();
//             inlineButtonModify();
//         }
//     }
// };
// //리스트 입력받는 함수(엔터키 이벤트)
// function inputEnterList() {
//     const $listAddbar = document.getElementById('list-add-bar');

//     $listAddbar.onkeyup = e => {
//         if (e.key === "Enter") {
//             if ($listAddbar.value === "") {
//                 alert('할 일을 작성하세요');
//             } else {
//                 const $listContainer = document.getElementById('#list-container');
//                 $listContainer.innerHTML += "<li><div class='list section'>" + $listAddbar.value + "</div><a href='#' id='inli-modify' title='Button push blue/green' class='button btnPush btnBlueGreen button-inli'>수정</a><a href='#' id='inli-delete' title='Button push blue/green' class='button btnPush btnRed button-inli'>삭제</a></li>";
//                 $listAddbar.value = "";
//                 inlineButtonDelete();
//                 inlineButtonModify();
//             }
//         }
//     }
// };

// //리셋 버튼 누르는함수(누르면 전부초기화됌)
// function resetList() {
//     const $listAddbar = document.getElementById('list-add-bar');
//     const $addButton = document.getElementById('resetButton');
//     $addButton.onclick = e => {
//         $listAddbar.value = "";
//     }
// };

// function inlineButtonModify() {
//     const $ulList = document.querySelector('.wrapper .right-container main .to-do-list ul');

//     $ulList.onclick = e => {
//       if (e.target.matches('.wrapper .right-container main .to-do-list ul li #inli-modify')) {
//         const $liItem = e.target.parentElement;
//         const $liValue = $liItem.querySelector('.list');

//         // Create input element
//         const $input = document.createElement('input');
//         $input.type = 'text';
//         $input.value = $liValue.textContent;

//         // Replace div with input
//         $liItem.replaceChild($input, $liValue);

//         // Focus on input
//         $input.focus();

//         // Add event listener to handle input blur
//         $input.addEventListener('blur', () => {
//           // Create div element
//           const $div = document.createElement('div');
//           $div.className = 'list section';
//           $div.textContent = $input.value;

//           // Replace input with div
//           $liItem.replaceChild($div, $input);
//         });
//       }
//     };
//   }


// function inlineButtonDelete() {
//     const $ulList = document.querySelector('.wrapper .right-container main .to-do-list ul');
//     $ulList.onclick = e => {
//         if (e.target.matches('.wrapper .right-container main .to-do-list ul li #inli-delete')) {
//             const $liItem = e.target.parentElement;
//             $ulList.removeChild($liItem);
//         }
//     };
// };
// function inlineButtonModify() {
//     const $ulList = document.querySelector('.wrapper .right-container main .to-do-list ul');
//     $ulList.addEventListener('click', e => {
//       if (e.target.matches('.wrapper .right-container main .to-do-list ul li #inli-modify')) {
//         const $liItem = e.target.closest('li');
//         const $listValue = $liItem.querySelector('.list');
//         $listValue.outerHTML = "<input type='text' class='list section' value='" + $listValue.innerHTML + "'>";

//       }
//     });
//   };
// function inlineButtonModify() {
//     const $ulList = document.querySelector('.wrapper .right-container main .to-do-list ul');
//     $ulList.addEventListener('click', e => {
//       if (e.target.matches('.wrapper .right-container main .to-do-list ul li #inli-modify')) {
//         const $liItem = e.target.closest('li');
//         const $listValue = $liItem.querySelector('.list');
//         $listValue.outerHTML = "<input type='text' class='list section' value='" + $listValue.innerHTML + "'>";

//         const $input = $liItem.querySelector('.list');
//         $input.addEventListener('keydown', event => {
//           if (event.keyCode === 13) {
//             $input.outerHTML = "<div class='list section'>" + $input.value + "</div>";
//           }
//         });
//       }
//     });
//   };
// function inlineButtonModify() {
//     const $ulList = document.querySelector('.wrapper .right-container main .to-do-list ul');
//     $ulList.addEventListener('click', e => {
//       if (e.target.matches('.wrapper .right-container main .to-do-list ul li #inli-modify')) {
//         const $liItem = e.target.closest('li');
//         const $listValue = $liItem.querySelector('.list');
//         const $originalValue = $liItem.querySelector('div').textContent;
//         // create input element with original value and focus on it
//         const $input = document.createElement('input');
//         $input.type = 'text';
//         $input.className = 'list section';
//         $input.value = $originalValue;
//         $liItem.replaceChild($input, $listValue);
//         $input.focus();
        
//         // scroll input element into view
//         $input.scrollIntoView();
        
//         // replace input element with div element on Enter key press
//         $input.addEventListener('keydown', event => {
//           if (event.keyCode === 13) {
//             const $div = document.createElement('div');
//             $div.className = 'list section';
//             $div.innerText = $input.value;
//             $liItem.replaceChild($div, $input);
//           }
//         });
//       }
//     });
//   }
  
// function inlineButtonDelete() {
//     const $ulList = document.querySelector('.wrapper .right-container main .to-do-list ul');
//     $ulList.addEventListener('click', e => {
//         if (e.target.matches('.wrapper .right-container main .to-do-list ul li #inli-delete')) {
//             const $liItem = e.target.closest('li');
//             $liItem.parentNode.removeChild($liItem);
//         }
//     });
// };



























//===========================================================//
//실행부 
(function () {
    inputList();
    inputEnterList();
    resetList();
})();

