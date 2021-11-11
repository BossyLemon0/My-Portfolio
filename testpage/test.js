var btn_strt = document.querySelector(".entr");
var btn_exit = document.querySelector(".exit");
var swipe_page = document.querySelector(".swipe_page");
var abtMeBtn = document.querySelector(".three");

function home(){
    swipe_page.classList.remove('swipe');
}

function swipe(){
    swipe_page.classList.add('swipe');
}

btn_exit.addEventListener("click", home);
abtMeBtn.addEventListener("click", swipe);



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


        if(event.target.nextElementSibling){
            if(event.target.previousElementSibling && event.target.nextElementSibling){
                console.log('in the middle')
                let behindBtnStatus = event.target.previousElementSibling.getAttribute('data-status');
                let inFront = event.target.nextElementSibling.getAttribute('data-status');

                if(behindBtnStatus == "clicked" || inFront == 'clicked'){
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

                }
                event.target.previousElementSibling.setAttribute('data-status', "unclicked");
                // event.target.classList.previousElementSibling.remove('clicked');

                event.target.nextElementSibling.setAttribute('data-status', "unclicked");
                // event.target.classList.nextElementSibling.remove('clicked');
                
            }else if(event.target.nextElementSibling.nextElementSibling){
                console.log('two in front')
                let inFront = event.target.nextElementSibling.getAttribute('data-status');
                let inFronInFront = event.target.nextElementSibling.nextElementSibling.getAttribute('data-status');
                if(inFronInFront == "clicked" || inFront == 'clicked'){
                    if(event.target.nextElementSibling.classList[2]){
                        event.target.nextElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.nextElementSibling.nextElementSibling.classList[2]){
                        event.target.nextElementSibling.nextElementSibling.classList.toggle('clicked')
                    }
                    event.target.nextElementSibling.setAttribute('data-status', "unclicked");
                    event.target.nextElementSibling.nextElementSibling.setAttribute('data-status', "unclicked");
                }
            }
        }
        else if(event.target.previousElementSibling){
            if(event.target.previousElementSibling && event.target.nextElementSibling){
                console.log('in the middle')
                let behindBtnStatus = event.target.previousElementSibling.getAttribute('data-status');
                let inFront = event.target.nextElementSibling.getAttribute('data-status');

                if(behindBtnStatus == "clicked" || inFront == 'clicked'){
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

                }
                event.target.previousElementSibling.setAttribute('data-status', "unclicked");
                // event.target.classList.previousElementSibling.remove('clicked');

                event.target.nextElementSibling.setAttribute('data-status', "unclicked");
                // event.target.classList.nextElementSibling.remove('clicked');

            }else if(event.target.previousElementSibling.previousElementSibling){
                console.log('two behind')
                let behindBtnStatus = event.target.previousElementSibling.getAttribute('data-status');
                let doubleBehindBtnStatus = event.target.previousElementSibling.previousElementSibling.getAttribute('data-status');
                if(behindBtnStatus == "clicked" || doubleBehindBtnStatus == 'clicked'){
                    if(event.target.previousElementSibling.classList[2]){
                        event.target.previousElementSibling.classList.toggle('clicked')
                    }
                    if(event.target.previousElementSibling.previousElementSibling.classList[2]){
                        event.target.previousElementSibling.previousElementSibling.classList.toggle('clicked')
                    }
                    event.target.previousElementSibling.setAttribute('data-status', "unclicked");
                    event.target.previousElementSibling.previousElementSibling.setAttribute('data-status', "unclicked");
                }
            }
        }
    }

    else{
        event.target.setAttribute('data-status', "unclicked");
        event.target.classList.remove('clicked');
    }
}

console.log(btn)

btn.addEventListener('click', clicked)