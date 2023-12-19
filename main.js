// ===== Defining the Body variable =======
body=document.body

// Random Theme Color On Page Load
colorClass=['orange', 'gold', 'burlywood', 'fuchsia','green', 'aquagreen', 'primaryblue', 'blue', 'lightblue']
document.addEventListener('DOMContentLoaded',()=>{
    randomClass=colorClass[Math.floor(Math.random()*colorClass.length)]
    currentClass=body.classList[0]
    body.classList.replace(currentClass, randomClass)
    activeTheme()
})


//======= Hamburger =======//
function toggle(){
    bar=document.querySelector(".hamburger");
    header=document.querySelector("header");
    overlay=document.querySelector(".overlay");
    body=document.querySelector("body");
    header.classList.toggle('active')
    body.classList.toggle('active')
}
navItems=document.querySelectorAll('.navlinks');
for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick=()=>{
        header.classList.remove('active')
        body.classList.remove('active')
    }
}

projectLinks={
    project1: 'https://facebook.com',
    project2: 'https://facebookl.com',
    project3: 'https://facebooko.com',
    project4: 'https://facebookk.com',
    project5: 'https://facebook.com',
    project6: 'https://facebook.com'
}

// ======== Project Cards Response To Click Events On Mobile =========
let projectCards = document.querySelectorAll('.project__card')
let destination;
projectCards.forEach(card=>{
    card.addEventListener('click', function () {
        if(window.innerWidth <= 992){
            card.classList.toggle('show')
        }
    })
    if(window.innerWidth<=992){
        card.title="Click for more info"
    }
})


// ======= Scroll Extent Indicator ========
document.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scrollExtent').style.width = scrollProgress + '%';
});


// ========= Theme and Theme Color Toggles ===========
// Themebox Toggle
toolsIconToggle=document.querySelector('.controls')
floatingButtons=document.querySelectorAll('.floating-btn')
toolsIconToggle.onclick=()=>{
    themebox=document.querySelector('.theme__box')
    themebox.classList.toggle('hide')
    floatingButtons.forEach(button=>{button.classList.toggle('active')})
}
// Lightr and Dark Theme Toggle
const themeToggle=(current, previous)=>{
    current=document.getElementById(current)
    previous=document.getElementById(previous)
    current.classList.add('toggleOut')
    current.classList.remove('toggleIn')
    previous.classList.add('toggleIn')
    previous.classList.remove('toggleOut')
    body.classList.toggle('darkTheme')
    body.classList.toggle('lightTheme')
}
// Theme Colors
colors=document.querySelectorAll('.colors')
colorss=['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9']
colorClass=['orange', 'gold', 'burlywood', 'fuchsia','green', 'aquagreen', 'primaryblue', 'blue', 'lightblue']
colors.forEach(color=>{
    color.onclick=()=>{
        index=colorss.indexOf(color.classList[1]);
        targetClass=colorClass[index]
        currentClass=body.classList[0]
        body.classList.replace(currentClass, targetClass)
        activeTheme()
    }
})
// This function checks the active theme and  highlights its icon
function activeTheme(){
    currentClass=body.classList[0]
    indexOfClass=colorClass.indexOf(currentClass)
    colors.forEach(color=>{color.classList.remove('active')});
    colors[indexOfClass].classList.add('active')
}
window.addEventListener('DOMContentLoaded',activeTheme)




//=========== Show ScrollToTop Button===========//
function scrollUp(){
    const scrollUp = document.getElementById('scrollup');
    if(document.documentElement.scrollTop >= 350){
        scrollUp.style.transform="translateY(0)";
        scrollUp.onclick=()=>{
            window.scrollTo(0, 0)
        }
    } else {
        scrollUp.style.transform="translateY(1000%)";
    }
}
window.addEventListener('scroll', scrollUp);



// ======== Scroll To Target Section Smoothly and Highlight Active Navlink ========
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    // Function to scroll to the target section smoothly
    function scrollToTarget(event) {
        event.preventDefault();
        const targetId = this.id.slice(1); //You can use substr() or substring()
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
        });
    }
    // Add click event listeners to the navigation links
    links.forEach((link) => {
        link.addEventListener("click", scrollToTarget);
    });

    // Function to highlight the active link when scrolling
    const sections = document.querySelectorAll("section");
    function highlightActiveLink() {
        const scrollPosition = window.scrollY + header.offsetHeight;
        sections.forEach((section) => {
            isSectionVisible = scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
            // Had to check if contact section is visible separately because it's not up to 100vh
            //window.scrollY when you scroll to the bottom of the page on large screens is 3774. Had to use an approximate of 3700
            isContactSectionVisible = scrollPosition >= (3700)
            if(isContactSectionVisible && window.innerWidth>992){
                links.forEach((link) => {
                    link.classList.remove("active-link");
                });
                ccontact.classList.add("active-link");
            }
            else if (isSectionVisible) {
                links.forEach((link) => {
                    link.classList.remove("active-link");
                });
                const correspondingLink = document.querySelector(
                    `nav a[id="c${section.id}"]`
                );
                if (correspondingLink) {
                    correspondingLink.classList.add("active-link");
                } else{
                    correspondingLink.classList.remove("active-link");
                }
            } 
            
        });
    }
    // Add scroll event listener to highlight active link
    window.addEventListener("scroll", highlightActiveLink);
    // Initial highlighting of the active link
    highlightActiveLink();
});

//======== Typing Text Animation ==========

var typed = new Typed('.typed', {

    strings: ["Web Developer", "Programmer", "Freelancer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 700,
    loop: true
  });
// For contact 427


// ============== ENAIL JS =============
