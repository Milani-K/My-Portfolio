    
    
    
    
    
    
    
    
    
    
    
    
    document.addEventListener("DOMContentLoaded", () => {
        const readMoreButton = document.getElementById("readMoreButton");
        const moreText = document.getElementById("moreText");

        readMoreButton.addEventListener("click", () => {
            if (moreText.classList.contains("hidden")) {
                moreText.classList.remove("hidden");
                readMoreButton.textContent = "Read Less";
            } else {
                moreText.classList.add("hidden");
                readMoreButton.textContent = "Read More";
            }
        });
    });

    function toggleText(id) {
        const moreText = document.getElementById(id);
        const button = event.target;
    
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            button.textContent = "Read Less";
        } else {
            moreText.style.display = "none";
            button.textContent = "Read More";
        }
    }

    
document.addEventListener('DOMContentLoaded', function () {
    const typedTextElement = document.getElementById('typed-text');
    const textToType = "I am a passionate software developer with a knack for building dynamic applications and solving complex problems.";
    let i = 0;

    function typeText() {
        if (i < textToType.length) {
            typedTextElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeText, 100); 
        }
    }

    typeText(); 

    const readMoreButton = document.getElementById('readMoreButton');
    const moreText = document.getElementById('moreText');

    readMoreButton.addEventListener('click', function () {
        moreText.classList.toggle('hidden');
        readMoreButton.textContent = moreText.classList.contains('hidden') ? "Read More" : "Read Less"; 
    });
});


function toggleReadMore() {
    var moreInfo = document.getElementById("more-info");
    var readMoreLink = document.querySelector(".read-more");

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        readMoreLink.textContent = "Read Less";
    } else {
        moreInfo.style.display = "none";
        readMoreLink.textContent = "Read More";
    }
}

document.getElementById('viewMoreBtn').addEventListener('click', function() {
    window.location.href = 'certificates.html';
});
