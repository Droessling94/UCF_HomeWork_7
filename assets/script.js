
//Navbar Button Event Listeners for content switch//
const aboutBtn = document.querySelector("#aboutBtn")
const contactBtn = document.querySelector("#contactBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const workBtn = document.querySelector("#workBtn")
const projOne = document.querySelector("#topCard")

aboutBtn.addEventListener('click', function(){
    $("#leftDisplayContent").text("My name is Donnie Roessling, I am a 27 year old full stack student pursuing a career in programming and web development. Most of the time you can find me at my desk on my computer, But from time to time I like to go out and hang out with a few friends. I enjoy playing video games and drawing.");
});

contactBtn.addEventListener('click', function(){
    $("#leftDisplayContent").text("links go here");
});

resumeBtn.addEventListener('click', function(){
    $("#leftDisplayContent").text("Coming Soon");
});

workBtn.addEventListener('click', function(){
    $("#leftDisplayContent").text("Also coming soon");
});
// Event listeners to redirect to project repositories//
projOne.addEventListener('click', function(){
    window.location.href="https://droessling94.github.io/IDunno/";
});