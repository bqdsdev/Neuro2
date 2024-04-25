window.onload = function() {
    
    let images = document.getElementsByClassName("openable-img");

    for(let i = 0; i < images.length; i++) {
    
        const img = images[i];

        img.onclick = function() {
            openImage(img);
        }

        img.onmouseover = function() {
            img.classList.add('gallery-hover');
        }

        img.onmouseout = function() {
            img.classList.remove('gallery-hover');
        }

    }

    const lightbox = document.getElementById('img-lightbox');
    const currentImg = document.getElementById('open-image');

    lightbox.onclick = function() {
        lightbox.classList.remove('lb-opening');
        currentImg.classList.remove('img-opening');
    }

}

function openImage(img) {

    const imgStyle = getComputedStyle(img);
    let imgUrl = imgStyle.backgroundImage;

    const lightbox = document.getElementById('img-lightbox');
    const currentImg = document.getElementById('open-image');

    imgUrl = extractImagePathFromCSS(imgUrl);

    if (currentImg.src != imgUrl) {
        currentImg.src = imgUrl;
    }

    lightbox.classList.add('lb-opening');
    currentImg.classList.add('img-opening');

}

function extractImagePathFromCSS(cssBackgroundImage) {
    // Extract the URL using regex
    const regex = /url\(['"]?(.*?)['"]?\)/i;
    const match = regex.exec(cssBackgroundImage);
    if (match && match[1]) {
        let imageUrl = match[1];
        try {
            const url = new URL(imageUrl);
            return url.pathname; // This will give you the path without the server address or IP
        } catch (error) {
            console.error("Invalid URL:", error);
            return null; // Return null for invalid URLs
        }
    } else {
        return null; // Return null if no URL found
    }
}



const animationElements = document.querySelectorAll('.animate-right, .animate-left, .animate-down, .animate-up, .animate-sections');

const options = {
    root: null,
    threshold: 0.4,
    rootMargin: '10px',
}


function callback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            /* if (entry.target.id == 'course-1') {
                const g1 = document.getElementById('g1');
                const g2 = document.getElementById('g2');
                const g3 = document.getElementById('g3');

                g1.classList.add('g1-section-1');
                g2.classList.add('g2-section-1');
                g3.classList.add('g3-section-1');
            }
            if (entry.target.id == 'course-2') {
                const g1 = document.getElementById('g1');
                const g2 = document.getElementById('g2');
                const g3 = document.getElementById('g3');

                g1.classList.add('g1-section-2');
                g2.classList.add('g2-section-2');
                g3.classList.add('g3-section-2');
            }
            if (entry.target.id == 'course-3') {
                const g1 = document.getElementById('g1');
                const g2 = document.getElementById('g2');
                const g3 = document.getElementById('g3');

                g1.classList.add('g1-section-3');
                g2.classList.add('g2-section-3');
                g3.classList.add('g3-section-3');
            }
            else { */
                entry.target.classList.add('animate');
            //}
        }
        else {
            /* if (entry.target.id == 'course-1') {
                const g1 = document.getElementById('g1');
                const g2 = document.getElementById('g2');
                const g3 = document.getElementById('g3');

                g1.classList.remove('g1-section-1');
                g2.classList.remove('g2-section-1');
                g3.classList.remove('g3-section-1');
            }
            if (entry.target.id == 'course-2') {
                const g1 = document.getElementById('g1');
                const g2 = document.getElementById('g2');
                const g3 = document.getElementById('g3');

                g1.classList.remove('g1-section-2');
                g2.classList.remove('g2-section-2');
                g3.classList.remove('g3-section-2');
            }
            if (entry.target.id == 'course-3') {
                const g1 = document.getElementById('g1');
                const g2 = document.getElementById('g2');
                const g3 = document.getElementById('g3');

                g1.classList.remove('g1-section-3');
                g2.classList.remove('g2-section-3');
                g3.classList.remove('g3-section-3');
            }
            else { */
                entry.target.classList.remove('animate');
            //}
        }
    })
}

const observer = new IntersectionObserver(callback, options);

for (let i = 0; i < animationElements.length; i++) {
    const el = animationElements[i];

    observer.observe(el);
}