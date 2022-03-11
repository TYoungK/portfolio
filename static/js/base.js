var targets = document.getElementsByClassName("section");
var tartgetsTop;
var menulist;
var sectionlist;

window.onload = function(){
    setMenu();
    tartgetsTop = getTargetsTop(targets);
    menulist = document.querySelectorAll('.menu-list a');
    menuSelect();
};
window.addEventListener('resize', function(){
    tartgetsTop = getTargetsTop(targets);
    menuSelect();
});

window.addEventListener('scroll', () => {
    if(tartgetsTop != null){
        menuSelect();
    }
});

function setMenu(){
    sectionlist = document.querySelectorAll('.section h1.title');
    sectionlist.forEach(
    section => document.querySelector('.menu-list')
    .innerHTML += '<li><a href="#'+section.parentNode.id+'">'+section.textContent+'</a></li>'
    );
}

function menuToggle(){
    document.getElementById('toggleValue').click();
    document.getElementsByClassName('sideMenu')[0].classList.toggle('menu-open');
}

function getTargetsTop(targets){
    var arr = [];
    Array.prototype.forEach.call(targets, (target, idx) => {
        arr[idx] = window.pageYOffset + target.getBoundingClientRect().top - 1;
    });
    return arr;
}

function menuSelect(){
    var scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    Array.prototype.forEach.call(tartgetsTop, (tartgetTop, idx) => {
    if(scrollLocation >= tartgetTop){
        menulist.forEach(menu => menu.classList.remove('is-active'));
        //console.log(window.innerHeight + window.scrollY + ',' + document.body.offsetHeight);
        if(window.innerHeight + window.scrollY < document.body.offsetHeight){
            menulist[idx].classList.add('is-active');
        }else{
            menulist[menulist.length-1].classList.add('is-active');
        }
    }
    });
}