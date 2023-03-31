function calcDate() {

  const user_dday = document.querySelector('#user_dday').value;
  const inputText = document.querySelector(`.inputText`).value;

  if (user_dday !== '') {
    const today = new Date();
    const dday = new Date(user_dday);

    /* 디데이까지 남은날 */
    const gap = today.getTime() - dday.getTime();
    const gap_day = Math.round(gap / (1000 * 60 * 60 * 24));
    document.querySelector(
      '.dday_mid > p:nth-child(2)'
    ).innerHTML = `[ ${inputText} ] 까지 ${gap_day}일`;


    const days = calcDateAdd(dday, 10,);  

    const $addDDay = document.createElement('li');
    $addDDay.innerHTML = `[ ${inputText} ] 까지 ${gap_day}일`;

    const $dday_ul = document.querySelector('.dday_ul');
    $dday_ul.appendChild($addDDay);

  } else {
    alert('날짜를 선택해주세요!');
  }
}

function calcDateAdd(x, y, z) {
  var dday = x;
  var add = y * (1000 * 60 * 60 * 24);
  var add_sum = dday.getTime() + add;
  var add_new = new Date(add_sum);
  return (z = [
    add_new.getFullYear(),
    add_new.getMonth() + 1,
    add_new.getDate(),
  ]);
}