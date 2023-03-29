
//생성된 li 태그 안에 버튼 누르면 수정할수있게 input태그로 변경되는 함수
function inlineButtonModify() {
    //ul태그 잡아와서 버블링 이벤트 부여 
    const $ulList = document.querySelector('.wrapper .right-container main .to-do-list ul');
    $ulList.addEventListener('click', e => {
        //ul태그안 modify버튼이 타겟이아닐시 이벤트 발생하지않음
      if (e.target.matches('.wrapper .right-container main .to-do-list ul li #inli-modify')) {
        //가장 가까운 li태그값 접근 여기서는 수정하고자하는 li태그안에 버튼의 직계부모 li태그
        const $liItem = e.target.closest('li');
        const $listValue = $liItem.querySelector('.list');
        //원래 입력되어있던 값 따로저장해놓기
        const $originalValue = $liItem.querySelector('div').textContent;
        // create input element with original value and focus on it
        //input태그 생성
        const $input = document.createElement('input');
        //태그의 입력값 타입 지정
        $input.type = 'text';
        //내용이많을시 스크롤을 부여하기위한 section클래스 지정
        $input.className = 'list section';
        //원래 입력되어있던값 들가있는상태로 input태그로 변환하기 위해 집어넣는다
        $input.value = $originalValue;
        //replace메서드로 태그만 변경
        $liItem.replaceChild($input, $listValue);
        //오토포커스 기능
        $input.focus();
        
        // scroll input element into view
        $input.scrollIntoView();
        
        //수정할 값을 입력하고 엔터키 입력시 이벤트 읽어서 다시 div태그로 변환하는 함수
        // replace input element with div element on Enter key press
        //키다운 이벤트를 읽는다
        $input.addEventListener('keydown', event => {
            //엔터키의 키코드는 13
          if (event.keyCode === 13) {
            //이벤트발생시 div태그 생성
            const $div = document.createElement('div');
            //내용이많아지면 스크롤을 해야하기때문에 list section 클래스 부여
            $div.className = 'list section';
            //수정받은 값을 집어넣는다
            $div.innerText = $input.value;
            //input태그 div태그로 replace
            $liItem.replaceChild($div, $input);
          }
        });
      }
    });
  }

  //li태그안 삭제버튼누르면 해당 li태그를 아예 삭제하는 태그
function inlineButtonDelete() {
    const $ulList = document.querySelector('.wrapper .right-container main .to-do-list ul');
    $ulList.addEventListener('click', e => {
        if (e.target.matches('.wrapper .right-container main .to-do-list ul li #inli-delete')) {
            const $liItem = e.target.closest('li');
            $liItem.parentNode.removeChild($liItem);
        }
    });
};

export{inlineButtonModify,inlineButtonDelete};
