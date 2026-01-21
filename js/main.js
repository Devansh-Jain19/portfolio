const sectionTitles = document.querySelectorAll(".section-title")

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add("animate");
            }
        })
    },
    {
        threshold:0.6,
    }
);

sectionTitles.forEach((title)=>{
    observer.observe(title);
})


const scrollTopBtn = document.getElementById("scrolltopbtn");

window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        scrollTopBtn.style.display = "flex";
    }else{
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click",() => {
    window.scrollTo({
        top:0,
        behavior:"smooth",

    })
})

const sections = document.querySelectorAll("section[id]")
const navlinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll",() => {
    let currentsection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if(window.scrollY>= sectionTop -150){
            currentsection = section.getAttribute("id");
        }
    });

    navlinks.forEach((link) => {
        link.classList.remove("active");

        if(link.getAttribute("href") === `#${currentsection}`){
            link.classList.add("active");
        }
    })
})