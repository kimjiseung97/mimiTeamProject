//리스트 입력 받는 함수(버튼클릭 이벤트)
function inputList(){
    const $listAddbar = document.getElementById('list-add-bar');
    const $addButton = document.getElementById('addButton');
    // console.log($listAddbar);

    $addButton.onclick = e =>{
        // console.log('추가버튼클릭함!');
        //입력값 받아서 dom값 생성하고 ul리스트에 추가하기'
        if($listAddbar.value==="") {
            alert('할일을 입력하세요!');
            $listAddbar.focus();
        }else{
             //ul 값 가져오기
        const $listContainer = document.getElementById('#list-container');
        // console.log($listContainer);
        // console.log($listAddbar.value);
        //div태그 생성
        const $listValue = document.createElement('div');
        //만든 div태그에 class부여
        // $listValue.classList.add('list','section');
        //입력받은 값 집어넣기
        $listValue.textContent = $listAddbar.value;
        // $listContainer.appendChild($listValue);
        $listContainer.innerHTML += "<div class='list section'><li>"+$listAddbar.value+"</li><a href='#' id='correct'title='Button push blue/green' class='button btnPush btnBlueGreen button-inli'>수정</a><a href='#' title='Button push blue/green' class='button btnPush btnRed button-inli'>삭제</a></div><br>";
        $listAddbar.value = "";
        }
    }
}
//리스트 입력받는 함수(엔터키 이벤트)
function inputEnterList(){
       const $listAddbar = document.getElementById('list-add-bar');
       
       $listAddbar.onkeyup = e=>{
            if(e.key==="Enter"){
                if($listAddbar.value===""){
                    alert('할 일을 작성하세요');
                }else{
                    const $listContainer = document.getElementById('#list-container');
                    $listContainer.innerHTML += "<div class='list section'><li>"+$listAddbar.value+"</li><a href='#' title='Button push blue/green' class='button btnPush btnBlueGreen button-inli'>수정</a><a href='#' title='Button push blue/green' class='button btnPush btnRed button-inli'>삭제</a></div><br>";
                    $listAddbar.value = "";
                }
            }
       }
}

//리셋 버튼 누르는함수(누르면 전부초기화됌)
function resetList(){
    const $listAddbar = document.getElementById('list-add-bar');
    const $addButton = document.getElementById('resetButton');
    $addButton.onclick = e =>{
        $listAddbar.value ="";
    }
}






















//===========================================================//
//실행부 
(function(){
    inputList();
    inputEnterList();
    resetList();
})();