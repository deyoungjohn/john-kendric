=======NOTES, ERRORS AND IMPROVEMENTS =======
Position section content at the middle in large screens
Handle arrangement of elements in Themebox on small screens and add box shadow to theme box
Project card destination on large screens
//More about me button overflows on medium screens,remove bonus padding from aboutMe and restyle it, add bonus padding to myskills and services on desktop, then determine new number for  isContactSectionVisible. Its currently 3000
//Something isnt right about profile images at the top
//Initial highlighting of active section on mobile doesnt work just as fine
//Add more theme colors
//Figure out the code used in typing text animation library


======= POINTS AND LESSONS NOTEWORTHY =======
1. document.documentElement.scrollTop==window.scrollY
2. document.documentElement.scrollHeight==body.offsetHeight
3. But document.documentElement.clientHeight!==body.clientHeight

===== THEME COLORS =====
Primary Blue: #3498db
Dark Gray: #2c3e50
Accent Green: #2ecc71
Light Gray: #ecf0f1
Deep Purple: #9b59b6
Soft Yellow: #f1c40f
Elegant Red: #e74c3c
Teal: #008080
Muted Orange: #d35400
Cool Cyan: #00bcd4
Remote Integrators : #cb943c
Pure blue: #3d02df

<nav class="navbar">
    <ul>
        <li><a href="#hero" class="navlinks" onclick="navlink();" id="chero">Home</a></li>
        <li><a href="#aboutMe" class="navlinks" id="caboutMe">About</a></li>
        <li><a href="#services" class="navlinks" id="cservices">Services</a></li>
        <li><a href="#projects" class="navlinks" id="cprojects">Projects</a></li>
        <li><a href="#contact" class="navlinks" id="ccontact">Contact</a></li>
    </ul>
</nav>

I added ids to the navlinks above and with this piece of javascript code, I can scroll to any section without hrefs 

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    // Function to scroll to the target section smoothly
    function scrollToTarget(event) {
        event.preventDefault();
        const targetId = this.id.substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
        });
    }
})
// Add click event listeners to the navigation links
links.forEach((link) => {
    link.addEventListener("click", scrollToTarget);
});


A shorter way to write the code above
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (event)=>{
            event.preventDefault();
            const targetId = link.id.slice(1);//You can use substr() or substring()
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        });
    });
});



// =========== SHOW SECTIONS ACTIVE LINK(Quite didnt work) ============
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop,
            sectionId = document.getAttribute('id'),
            sectionsClass = document.querySelector('nav a[href=' + sectionId + ']')
        if(scrollY > sectionTop&&scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        } 
    })
}
window.addEventListener('scroll', scrollActive)