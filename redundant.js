// ======== Project Cards Only Clickable On Mobile Devices =========
let projectCards = document.querySelectorAll('.project__card')
let destination;
projectCards.forEach(card=>{
        card.style.cursor='pointer'
        destination=card.querySelector('.project__btn').href
        // console.log(destination)
        card.addEventListener('click', function () {
        if(window.innerWidth <= 992){
            window.location.href=destination;
            console.log(destination);
        }
    })
})


// ======= Scroll Extent Indicator ========
scrollExtent=()=>{
    scrollIndicator=body.querySelector('.scrollExtent')
    //body.offsetHeight=5816px, maximum scroll extent=5416px. I'll use 5416 instead of 5816
    down=((window.scrollY/contact.offsetTop)*100)//.toFixed()
    if(down>100){
        down=100
        // headerafter=document.querySelector('header:after')
        // headerafter.style.zIndex=-1
        // scrollIndicator.style.zIndex=1000000
    }
    scrollIndicator.style.width=down+'%'
}
window.addEventListener('scroll', scrollExtent)