// this test is for the test html when we add more buttons and is for button delegation. this test will have four buttons 
// and I will make another one for five buttons.
                                                                            // Swipe logic
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var btn_strt = document.querySelector(".entr");
var btn_exit = document.querySelector(".exit");
var swipe_page = document.querySelector(".swipe_page");
var abtMeBtn = document.querySelector(".four");

function home(){
    swipe_page.classList.remove('swipe');
}

function swipe(){
    swipe_page.classList.add('swipe');
}

btn_exit.addEventListener("click", home);
abtMeBtn.addEventListener("click", swipe);

                                                                            // button delegation
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
                                                                            // scroll home page logic
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// var sections = document.querySelectorAll('.info-sect');
// var section = document.querySelector(".home");
// var main = document.querySelectorAll('main');
// var sections = document.querySelector('.pagescrolls');
var newsects = document.querySelectorAll('div .info-sects');
console.log(newsects);


const options = {
    root: null,
    threshold: 0,
    rootMargin: "-200px",
}

const observer = new IntersectionObserver(function(items, observer){
    items.forEach(function each(item){
        console.log(item.target);

    })
}, options);

newsects.forEach(function each(section){
    observer.observe(section);
})

// observer.observe(section);