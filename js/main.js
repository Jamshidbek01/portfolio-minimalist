let btn = document.querySelector('.toggle-btn')
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    document.querySelector('.nav-list').classList.toggle('active')
})