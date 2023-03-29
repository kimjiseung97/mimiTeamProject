//리셋 버튼 누르는함수(누르면 전부초기화됌)
function resetList() {
    const $listAddbar = document.getElementById('list-add-bar');
    const $addButton = document.getElementById('resetButton');
    $addButton.onclick = e => {
        $listAddbar.value = "";
    }
};

export{resetList};