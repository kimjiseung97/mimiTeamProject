function calcDate() {
    const user_dday = document.querySelector('#user_dday').value;
    const inputText = document.querySelector(`.inputText`).value;

    if (user_dday !== '') {
      const today = new Date();
      const dday = new Date(user_dday);

      /* D_day까지 */
      const gap = today.getTime() - dday.getTime();
      const gap_day = Math.round(gap / (1000 * 60 * 60 * 24));
      // const inputTextValue = inputText.value;
      document.querySelector(
        '.dday_mid > p:nth-child(2)'
      ).innerHTML = `[ ${inputText} ] 까지 ${gap_day}일`;

      // function enterkey() {
      //   if (window.event.keycode == 13) {
      //     calcDate();
      // }


      // const input = document.querySelector(`.inputText`);
      // input.addEventListener("keyup", function (event) {
      //   if (event.keyCode === 13) {
      //     event.preventDefault();
      //     document.getElementById(`button`).click();
      //   }
      });


      /* 앞으로 ___일 */
      const count = [100, 200, 365, 500];
      for (var i = 0; i < count.length; i++) {
        const days = calcDateAdd(dday, count[i], days);
        document.querySelector(
          '#dday_' + count[i]
        ).innerHTML = `${days[0]}년 ${days[1]}월 ${days[2]}일`;
      }
    } else {
      alert('날짜를 선택해주세요!');
    }
  }

  function calcDateAdd(x, y, z) {
    const dday = x;
    const add = y * (1000 * 60 * 60 * 24);
    const add_sum = dday.getTime() + add;
    const add_new = new Date(add_sum);
    return (z = [
      add_new.getFullYear(),
      add_new.getMonth() + 1,
      add_new.getDate(),
    ]);
  }



