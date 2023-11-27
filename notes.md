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