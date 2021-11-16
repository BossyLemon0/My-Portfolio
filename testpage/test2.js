// this test is for the test html when we add more buttons and is for button delegation. this test will have four buttons 
// and I will make another one for five buttons.


// var navHome;
// var navSkills; 
// var navProjects; 

                                                                            // Swipe logic
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var btn_strt = document.querySelector(".entr");
var btn_exit = document.querySelector(".exit");
var swipe_page = document.querySelector(".swipe_page");
var abtMeBtn = document.querySelector(".four");
var scrollPathvisibility = document.querySelector(".scroll-path");
var allsects = document.querySelector('.info-sects');
// var images = document.querySelector('.images');
var topPic = document.querySelector('.top')
var bottomPic1 = document.querySelector('.bottom');
var bottomPic2 = document.querySelector('.bottom2');
console.log(topPic,bottomPic1 ,bottomPic2 )

function home(){
    swipe_page.classList.remove('swipe');
    setTimeout(()=>{
        scrollPathvisibility.classList.remove('scrollerbehind')
        allsects.classList.remove('scrollerbehind')
        topPic.classList.remove('scrollerbehind')
        bottomPic1.classList.remove('scrollerbehind')
        bottomPic2.classList.remove('scrollerbehind')
        // images.classList.remove('scrollerbehind');
    },900)

}

function swipe(){
    swipe_page.classList.add('swipe');
    scrollPathvisibility.classList.add('scrollerbehind');
    console.log(homeIntroSlide);
    allsects.classList.add('scrollerbehind');
    topPic.classList.add('scrollerbehind')
    bottomPic1.classList.add('scrollerbehind')
    bottomPic2.classList.add('scrollerbehind')
    // images.classList.add('scrollerbehind')
}

btn_exit.addEventListener("click", home);
abtMeBtn.addEventListener("click", swipe);
                                                                            // picture links
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function topPageRedirect(){
    // location.replace("https://dnd-dm-character-tracker.herokuapp.com/")
    window.open("https://dnd-dm-character-tracker.herokuapp.com/", '_blank');
}
function bottomPage1Redirect(){
    window.open("https://bossylemon0.github.io/Weatherboard/", '_blank');
}
function bottomPage2Redirect(){
    window.open("https://stormy-basin-51525.herokuapp.com/", '_blank');
}
topPic.addEventListener('click', topPageRedirect)
bottomPic1.addEventListener('click', bottomPage1Redirect)
bottomPic2.addEventListener('click', bottomPage2Redirect)
                                                                            // picture links
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var insta = document.querySelector('.bi-instagram2')
var linkedIn = document.querySelector('.bi-linkedin2')
var gitHub = document.querySelector('.bi-github2')
console.log(insta)
function instagram(){
    // location.replace("https://dnd-dm-character-tracker.herokuapp.com/")
    window.open("https://www.instagram.com/_om.ir_/?hl=en", '_blank');
    console.log('working')
}
function linkedin(){
    window.open("https://www.linkedin.com/in/omar-ramirez-bb5372214/", '_blank');
}
function github(){
    window.open("https://github.com/BossyLemon0", '_blank');
    console.log('working')
}
insta.addEventListener('click', instagram)
linkedIn.addEventListener('click', linkedin)
gitHub.addEventListener('click', github)
                                                                            // nav bar button delegation
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

var btn = document.querySelector('.info');

function clicked(event){
    let btnStatus = event.target.getAttribute('data-status');
    // let btnSilbings = [];
    // let twoInFront = event.target.nextElementSibling.nextElementSibling;
    // let nextToEachOther = event.target.previousElementSibling || event.target.nextElementSibling;
    // let twoBehind = event.target.previousElementSibling.previousElementSibling

    if(btnStatus == "unclicked"){
        event.target.setAttribute('data-status', "clicked");
        event.target.classList.add('clicked');


        // if(event.target.previousElementSibling.previousElementSibling.previousElementSibling){
        //     console.log("works");
        // }

        if(event.target.nextElementSibling){
        if(event.target.nextElementSibling.nextElementSibling){
            if(event.target.previousElementSibling && event.target.nextElementSibling && event.target.nextElementSibling.nextElementSibling){
                console.log('in the middle left')
                let behindBtnStatus = event.target.previousElementSibling.getAttribute('data-status');
                let inFront = event.target.nextElementSibling.getAttribute('data-status');
                let inFrontInfront =event.target.nextElementSibling.nextElementSibling.getAttribute('data-status')

                if(behindBtnStatus == "clicked" || inFront == 'clicked' || inFrontInfront  == 'clicked'){
                    if(event.target.previousElementSibling.classList[2]){
                        event.target.previousElementSibling.classList.toggle('clicked')
                    }

                    if(event.target.nextElementSibling.classList[2]){
                        console.log('does exist');
                        console.log(event.target.nextElementSibling.classList)
                        event.target.nextElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.nextElementSibling.nextElementSibling.classList[2]){
                        console.log('does exist');
                        console.log(event.target.nextElementSibling.nextElementSibling.classList)
                        event.target.nextElementSibling.nextElementSibling.classList.toggle('clicked')
                    }
                    

                }
                event.target.previousElementSibling.setAttribute('data-status', "unclicked");

                event.target.nextElementSibling.setAttribute('data-status', "unclicked");

                event.target.nextElementSibling.nextElementSibling.setAttribute('data-status', "unclicked");
                
                
            }else if(event.target.nextElementSibling.nextElementSibling.nextElementSibling){
                console.log('three in front')
                let inFront = event.target.nextElementSibling.getAttribute('data-status');
                let inFronInFront = event.target.nextElementSibling.nextElementSibling.getAttribute('data-status');
                let last = event.target.nextElementSibling.nextElementSibling.nextElementSibling.getAttribute('data-status');
                if(inFronInFront == "clicked" || inFront == 'clicked' || last =='clicked'){
                    if(event.target.nextElementSibling.classList[2]){
                        event.target.nextElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.nextElementSibling.nextElementSibling.classList[2]){
                        event.target.nextElementSibling.nextElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.nextElementSibling.nextElementSibling.nextElementSibling.classList[2]){
                        event.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('clicked')
                    }
                    event.target.nextElementSibling.setAttribute('data-status', "unclicked");
                    event.target.nextElementSibling.nextElementSibling.setAttribute('data-status', "unclicked");
                    event.target.nextElementSibling.nextElementSibling.nextElementSibling.setAttribute('data-status', "unclicked");
                }
            }
        }
        else{
            if(event.target.previousElementSibling.previousElementSibling && event.target.previousElementSibling && event.target.nextElementSibling){
                console.log('in the middle right')
                let behindBedindBtnStatus = event.target.previousElementSibling.previousElementSibling.getAttribute('data-status');
                let behindBtnStatus = event.target.previousElementSibling.getAttribute('data-status');
                let inFront = event.target.nextElementSibling.getAttribute('data-status');

                if(behindBedindBtnStatus == "clicked" || behindBtnStatus == "clicked" || inFront == 'clicked'){
                    // console.log('you did it')
                    // event.target.nextElementSibling.classList.add('hey')
                    if(event.target.nextElementSibling.classList[2]){
                        console.log('does exist');
                        console.log(event.target.nextElementSibling.classList)
                        event.target.nextElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.previousElementSibling.classList[2]){
                        event.target.previousElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.previousElementSibling.previousElementSibling.classList[2]){
                        event.target.previousElementSibling.previousElementSibling.classList.toggle('clicked')
                    }
                }
            }
        }
    }

        
        else if(event.target.previousElementSibling.previousElementSibling.previousElementSibling){
            console.log("working")
            if(event.target.previousElementSibling.previousElementSibling && event.target.previousElementSibling && event.target.nextElementSibling){
                // console.log('in the middle right')
                // let behindBedindBtnStatus = event.target.previousElementSibling.previousElementSibling.getAttribute('data-status');
                // let behindBtnStatus = event.target.previousElementSibling.getAttribute('data-status');
                // let inFront = event.target.nextElementSibling.getAttribute('data-status');

                // if(behindBedindBtnStatus == "clicked" || behindBtnStatus == "clicked" || inFront == 'clicked'){
                //     // console.log('you did it')
                //     // event.target.nextElementSibling.classList.add('hey')
                //     if(event.target.nextElementSibling.classList[2]){
                //         console.log('does exist');
                //         console.log(event.target.nextElementSibling.classList)
                //         event.target.nextElementSibling.classList.toggle('clicked')
                //     }
                //     if(event.target.previousElementSibling.classList[2]){
                //         event.target.previousElementSibling.classList.toggle('clicked')
                //     }
                //     if(event.target.previousElementSibling.previousElementSibling.classList[2]){
                //         event.target.previousElementSibling.previousElementSibling.classList.toggle('clicked')
                //     }

                // }
                // event.target.previousElementSibling.previousElementSibling.setAttribute('data-status', "unclicked");

                // event.target.previousElementSibling.setAttribute('data-status', "unclicked");
                // // event.target.classList.previousElementSibling.remove('clicked');

                // event.target.nextElementSibling.setAttribute('data-status', "unclicked");
                // // event.target.classList.nextElementSibling.remove('clicked');
                console.log('error')

            }else if(event.target.previousElementSibling.previousElementSibling.previousElementSibling){
                console.log('three behind')
                let behindBtnStatus = event.target.previousElementSibling.getAttribute('data-status');
                let doubleBehindBtnStatus = event.target.previousElementSibling.previousElementSibling.getAttribute('data-status');
                let lastBehindBtnStatus = event.target.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('data-status');
                if(behindBtnStatus == "clicked" || doubleBehindBtnStatus == 'clicked' || lastBehindBtnStatus == "clicked"){
                    if(event.target.previousElementSibling.classList[2]){
                        event.target.previousElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.previousElementSibling.previousElementSibling.classList[2]){
                        event.target.previousElementSibling.previousElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.previousElementSibling.previousElementSibling.previousElementSibling.classList[2]){
                        event.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle('clicked')
                    }
                    event.target.previousElementSibling.setAttribute('data-status', "unclicked");
                    event.target.previousElementSibling.previousElementSibling.setAttribute('data-status', "unclicked");
                    event.target.previousElementSibling.previousElementSibling.previousElementSibling.setAttribute('data-status', "unclicked");
                }
            }
        }
        else{
            console.log('broken')
        }
    }

    else{
        event.target.setAttribute('data-status', "unclicked");
        event.target.classList.remove('clicked');
    }
}

btn.addEventListener('click', clicked)
                                                                            // scroll home page logic (includes main page animations)
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// var sections = document.querySelectorAll('.info-sect');
// var section = document.querySelector(".home");
// var main = document.querySelectorAll('main');
// var sections = document.querySelector('.pagescrolls');
var scrollBtns = document.querySelectorAll('div .scroll-btn')
var newsects = document.querySelectorAll('div .info-sects');
console.log(newsects);
console.log(scrollBtns);
var homeIntroSlide = document.querySelector('.first')


const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px",
}

const observer = new IntersectionObserver(function(items, observer){
    items.forEach(function each(item, index){
        if(!item.isIntersecting){
            return;
        }
        console.log(item.target.classList[1]);
        if(item.target.classList[1] == 'home'){
            console.log('home')
            //btns
            scrollBtns[0].classList.toggle('active');
            scrollBtns[1].classList.remove('active');
            scrollBtns[2].classList.remove('active');
            //pagelayout
            homeIntroSlide.classList.add('isOn');
            homeIntroSlide.classList.remove('isOff');
            
        }

        if(item.target.classList[1] == 'skills'){
            console.log('skills')
            //btns
            scrollBtns[1].classList.toggle('active');
            scrollBtns[0].classList.remove('active');
            scrollBtns[2].classList.remove('active');
            //pagelayout
            homeIntroSlide.classList.add('isOff');
            homeIntroSlide.classList.remove('isOn');
        }

        if(item.target.classList[1] == 'projects'){
            console.log('projects')
            //btns
            scrollBtns[2].classList.toggle('active');
            scrollBtns[1].classList.remove('active');
            scrollBtns[0].classList.remove('active');
            //pagelayout
            // homeIntroSlide.classList.add('isOff');
            // homeIntroSlide.classList.remove('isOn');

        }

        
    })
}, options);

newsects.forEach(function each(section){
    observer.observe(section);
})

// observer.observe(section);

                                                                            // scroll home page nav buttons logic
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//nav btns
var navHome = document.querySelector('.one');
var navSkills = document.querySelector('.two');
var navProjects = document.querySelector('.three');
//the content areas
var homeWindow = document.getElementById('home');
var skillWindow = document.getElementById('skills');
var projectsWindow = document.getElementById('projects');
console.log(homeWindow)

function getattribute(event){
console.log(event.target.getAttribute('data-status'))

if(event.target.getAttribute('data-status') == "unclicked"){
    console.log(event.target.classList[1])
    if(event.target.classList[1] == "one"){
        console.log('working')
        homeWindow.scrollIntoView();

    }
    if(event.target.classList[1] == "two"){
        console.log('working')
        skillWindow.scrollIntoView();
    }
    if(event.target.classList[1] == "three"){
        console.log('working')
        projectsWindow.scrollIntoView();
    }

}
}

// if(navHome == "clicked"){
//     console.log('working')
// }
// if(navHome == "clicked"){
//     console.log('working')
// }
// if(navHome == "clicked"){
//     console.log('working')
// }

navHome.addEventListener("click", getattribute)
navSkills.addEventListener("click", getattribute)
navProjects.addEventListener("click", getattribute)

                                                                            // logic to light up and animate the slides
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

var skillEl = document.querySelector('.second');
var projectEl1 = document.querySelector('.p1');
var projectEl2 = document.querySelector('.p2');
var projectEl3 = document.querySelector('.p3');
var cardA = document.querySelector('.cardA');
var cardB = document.querySelector('.cardB')
var cardC = document.querySelector('.cardC')

var skillText = document.querySelector('.texty');

function bnaSkills(){
    skillText.classList.add('towhite')
    skillEl.classList.add('towhite')
}
function bnaP1(){
    cardA.classList.add('glowee');
    topPic.classList.add('brighter');
}
function bnaP2(){
    cardB.classList.add('glowee');
    bottomPic1.classList.add('brighter');
}
function bnaP3(){
    cardC.classList.add('glowee');
    bottomPic2.classList.add('brighter');
}

skillEl.addEventListener('mouseenter',bnaSkills)
projectEl1.addEventListener('mouseenter',bnaP1)
projectEl2.addEventListener('mouseenter',bnaP2)
projectEl3.addEventListener('mouseenter',bnaP3)

