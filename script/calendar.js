// 날짜 객체 생성(goToday 함수에서 date값을 재할당해야해서 const가 아닌 let으로 설정)
let date = new Date();

const todolistCalender = () => {

    // 년도 & 월 변수 생성
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    document.querySelector(`.year-month`).textContent = `${viewYear}년 ${viewMonth +1}월`;

    // 지난 달 마지막 날짜와 요일
    const previousLast = new Date(viewYear, viewMonth, 0);
    // 이번 달 마지막 날짜와 요일
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    // 지난 달 마지막 날짜와 요일
    const previousDate = previousLast.getDate();
    const previousDay = previousLast.getDay();
    // 이번 달 마지막 날짜와 요일
    const thisDate = thisLast.getDate();
    const thisDay = thisLast.getDay();

    // 날짜들을 담아둘 배열
    // Array(n)으로 배열을 만들면 길이가 n인 배열이 생성 (이때 모든 요소들은 undefined)
    // 그런데 모든 요소들이 empty값이기 떄문에 keys()메서드를 활용하면 0부터 n-1까지의 Array Iterator 생성
    // 전개 구문을 통해서 Array Iterator을 배열로 만들면 0부터 n-1까지의 배열을 얻음.
    // 그래서 이번 달 마지막 날짜 +1을 n에 전달 -> 제일 앞에 있는 0을 없애기 위해 slice 사용
    const previousDates = [];
    const thisDates = [...Array(thisDate + 1).keys()].slice(1);
    const nextDates = [];

    // previousDates
    if (previousDay !== 6) {
        for (let i = 0; i < previousDay + 1; i++) {
            previousDates.unshift(previousDate - i);
        }
    }

    // nextDates
    for (let i = 1; i < 7 - thisDay; i++) {
        nextDates.push(i);
    }

    // Dates 합치기
    const dates = previousDates.concat(thisDates, nextDates);

    // Dates 정리
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(thisDate);
    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1 ?
            `this` :
            `other`;
        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`
    })

    document.querySelector(`.dates`).innerHTML = dates.join(``);

    // 오늘 날짜 찾기 (찾고 나면 break로 종료)
    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll(`.this`)) {
            if (+date.innerText === today.getDate()) {
                date.classList.add(`today`);
                break;
            }
        }
    }
    // 전월 이동
    const previousMonth = () => {
        date.setDate(1);
        date.setMonth(date.getMonth() - 1);
        todolistCalender();
    };

    // 다음달 이동
    const nextMonth = () => {
        date.setDate(1);
        date.setMonth(date.getMonth() + 1);
        todolistCalender();
    };

    // 오늘 날짜 이동
    const goToday = () => {
        date = new Date();
        todolistCalender();
    };

};

todolistCalender();

// 전월 이동
const previousMonth =e =>{
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    todolistCalender();
};

// 다음달 이동
const nextMonth =e=>{
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    todolistCalender();
};

// 오늘 날짜 이동
const goToday =e=>{
    date = new Date();
    todolistCalender();
};


