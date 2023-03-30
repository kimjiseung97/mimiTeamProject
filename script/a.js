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

    /* 앞으로 ___일 */
    var count = [100, 200, 365, 500];
    for (var i = 0; i < count.length; i++) {
      var days = calcDateAdd(dday, count[i], days);
      document.querySelector(
        '#dday_' + count[i]
      ).innerHTML = `${days[0]}년 ${days[1]}월 ${days[2]}일`;
    }
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




