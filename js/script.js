
const resizeWindow = () =>{
    let widthWindow = document.documentElement.clientWidth,
    wrapperOfPages = document.getElementById('wrapper-page'),
    page = document.getElementsByClassName('page');
    header = document.getElementById('header');

    wrapperOfPages.style.width = `${widthWindow*3}px`;
    header.style.maxWidth = `${widthWindow}px`;
    
    for(let i = 0; i< page.length; i++){
        
        page[i].style.width = `${widthWindow}px`;
        
    }

    let headerNav = [...document.querySelectorAll('.header__nav__item')];

    for (i = 0; i < headerNav.length; i++) {
        let currentPage;
        headerNav[i].addEventListener('click', function(){
            for (j = 0; j < headerNav.length; j++) {
                headerNav[j].classList.remove('header__nav__item--current')

            }
            let index,
                countOfPage;
                countOfPage = headerNav.indexOf(this, index);
                
                this.classList.add('header__nav__item--current')
            wrapperOfPages.style.transform = `translateX(${-widthWindow * countOfPage}px)`;
        console.log(currentPage);            

        });
        if(headerNav[i].classList.contains('header__nav__item--current')){
            let index;
            currentPage = headerNav.indexOf(headerNav[i], index);
            wrapperOfPages.style.transform = `translateX(${-widthWindow * currentPage}px)`;
        }
    }
    let menuNav = [...document.querySelectorAll('.burger-menu__item')];

    for (i = 0; i < menuNav.length; i++) {
        let currentPage;
        menuNav[i].addEventListener('click', function(){
            for (j = 0; j < menuNav.length; j++) {
                menuNav[j].classList.remove('burger-menu__item--current')

            }
            burgerMenu.classList.remove('burger-menu--open')
            burger.classList.remove('burger--open')
            let index,
                countOfPage;
                countOfPage = menuNav.indexOf(this, index);
                
                this.classList.add('burger-menu__item--current')
            wrapperOfPages.style.transform = `translateX(${-widthWindow * countOfPage}px)`;

        });
        if(menuNav[i].classList.contains('burger-menu__item--current')){
            let index;
            currentPage = menuNav.indexOf(menuNav[i], index);
            wrapperOfPages.style.transform = `translateX(${-widthWindow * currentPage}px)`;
        }
    }


}
resizeWindow();

window.addEventListener('resize', function(){
    resizeWindow()
}, true)

let burger = document.getElementById('burger'),
    burgerMenu = document.getElementById('burger-menu');

burger.addEventListener('click', function(){
    if(burger.classList.contains('burger--open')){
        burger.classList.remove('burger--open')
        burgerMenu.classList.remove('burger-menu--open')
    }else{
        burger.classList.add('burger--open')
        burgerMenu.classList.add('burger-menu--open')

    }
})
