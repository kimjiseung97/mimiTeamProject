

const main = document.querySelector("#main");
const title = document.querySelector(".title")
const select = document.querySelector(".select");

// 입력값이 submit하게 되면 hidden 클래스를 제거하여 화면에 출력이 되게 만든 함수 mainHandle
// submit이 되면 창이 새로고침이 되버리기 때문에 이벤트를 동작하지 못 하게 preventDefault 사용 
function mainHandle(event) {
    const Hidden = "hidden";
    event.preventDefault();
   clock.classList.remove(Hidden);
}
main.addEventListener("submit", mainHandle);


// const clock = document.querySelector("#clock");
const Xday = document.querySelector("#Xday");   // 종료일 날짜
const day = document.querySelector("#day");     // 시작일 날짜
const inputText = document.getElementById(`inputText`); //입력받는 값

// function writeDay() {
//     document.getElementById(`Enter`).onclick= e => { const inputText = document.getElementById(`inputText`).value;
//     document.querySelector(".result").textContent = inputText;
// }
// }

function getDay() {
   const XdayValue = Xday.value;
   const dayValue = day.value;
   const inputTextValue = inputText.value;

   const standard = new Date(dayValue);
   const target = new Date(XdayValue);
   
   const diff = target - standard;
   const d = Math.floor(diff / (1000*60*60*24));
  /*  const h = Math.floor((diff / (1000*60*60)) % 24);
   const m = Math.floor((diff / (1000*60)) % 60);
   const s = Math.floor(diff/ 1000 % 60); */
   clock.innerHTML = `${inputTextValue}날까지 ${d}일 남았습니다.`;  
}

function addDayList() {
    const list = document.getElementById(`inputText`).value;
    const newList = document.createElement(`li`);
    newList.setAttribute(`id`, inputText);
    const textNode = document.createTextNode(inputText);
    newList.appendChild(textNode);
    document.getElementById(`dayList`).appendChild(newList);
}


getDay();
setInterval(getDay, 1000);



