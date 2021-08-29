console.log('fans-form script loaded')


const btnSend = document.getElementById('btn__send_comment')
btnSend.addEventListener('click', (e) => {
    e.preventDefault()
    const MIN_COMMENT_LENGTH = 1
    const textArea = document.getElementById('textarea')

    if (textArea.value.trim().length <= MIN_COMMENT_LENGTH) {
        alert('Comment too short!')
        return
    }
    const section = document.querySelector('section')
    const date = new Date()
    const dateStr = `${formatDate(date)}`

    section.insertAdjacentHTML('afterbegin', `
<article class="container fans">
    <p class="article__text">
        ${textArea.value}
    </p>
    <div class="article__text_info">
        <div class="article__date">${dateStr}</div>
        <div class="article__author">
            John Steck
        </div>
    </div>
    <hr>
</article>
`)

    textArea.value = ''
})


function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yyyy = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()

    return dd + '.' + mm + '.' + yyyy + ' ' + hour + ':' + minute
}