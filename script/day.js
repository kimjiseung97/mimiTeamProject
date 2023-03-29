

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


const clock = document.querySelector("#clock");
const Xday = document.querySelector("#Xday");   // 종료일 날짜
const day = document.querySelector("#day");     // 시작일 날짜

function getDay() {
   const XdayValue = Xday.value;
   const dayValue = day.value;

   const standard = new Date(dayValue);
   const target = new Date(XdayValue);
   
   const diff = target - standard;
   const d = Math.floor(diff / (1000*60*60*24));
  /*  const h = Math.floor((diff / (1000*60*60)) % 24);
   const m = Math.floor((diff / (1000*60)) % 60);
   const s = Math.floor(diff/ 1000 % 60); */
   clock.innerHTML = `${d}일 입니다.`;  
}

// function writeDay() {
   
// }

document.getElementById(`Enter`).onclick= e => { const inputText = document.getElementById(`inputText`).value;
    document.querySelector(".result").textContent = inputText;
}
// getDay();
// setInterval(getDay, 1000);
// writeDay();



// 버튼 클릭시 함수 실행
// $btn.onclick = e => {}
// 클릭시 인풋의 밸류값