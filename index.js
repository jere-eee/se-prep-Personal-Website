
window.addEventListener("DOMContentLoaded", (e) => {
    const learnButton = document.getElementById("button");
    const divOne = document.getElementById("part-1");
    const divTwo = document.getElementById("part-2");
    const divThree = document.getElementById("part-3");
    const extraInfo = document.getElementById("extra-info");
    const aboutSection = document.getElementById("about");
    const divs = [divOne, divTwo, divThree];
    
    // Remove extraInfo div initially
    extraInfo.remove();

    // Create function to show extraInfo div onclick
    function showDivs() {
        aboutSection.append(extraInfo);
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.transition = "all ease-in-out 2s";
            
            // Have each div translated differently
            let translateValue = -40 + i * 10;
            divs[i].style.transform = `translateY(${translateValue}px)`;
        };    
    };

    // Add event listener
     if (learnButton) {
        learnButton.addEventListener('click', showDivs)
    };
});