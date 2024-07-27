/*FAQ相關JS都在這*/

/*FAQs 隱藏/展示 說明*/
function show_answer(element) {
    const detailNum = element.querySelector('#detail_num');
    if (detailNum) {
        detailNum.classList.toggle('hidden');
    }
}

/*自動跑到對應標題+展示說明*/
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const question = params.get('question');
    if (question) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            const title = link.querySelector('#detail_title');
            if (title && title.innerText.trim() === question) {
                const detailNum = link.querySelector('#detail_num');
                if (detailNum) {
                    detailNum.classList.remove('hidden');
                }
                link.scrollIntoView();
            }
        });
    }
}