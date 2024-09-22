const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');  // change in line 26 in index.html

const themeToggler = document.querySelector('.theme-toggler')

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display="block"
})
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display="none"
})


themeToggler.addEventListener('click',()=>{

    document.body.classList.toggle('dark-theme-variables')
    
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')

})