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

    const contactLightbox = document.getElementById('contact-lightbox');
    
    document.getElementById('final-button').onclick = function() {
        contactLightbox.classList.add('contact-opening');
    }

    contactLightbox.onclick = function() {
        contactLightbox.classList.remove('contact-opening');
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



let transitionTime = 500
let intervalFrame;

let healingColor = { r: 255, g: 199, b: 0 }
let elegantColor = { r: 252, g: 105, b: 255 }
let mindsetColor = { r: 0, g: 255, b: 194 }
let currentColor = healingColor

let aspectRatio = 'PC'
let selectedSection = 'healing'


// document.body.style.backgroundImage = `radial-gradient(60% 17.5% at 95% 7.5%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(30% 10% at 25% 49%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(55% 6% at 50% 67.5%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0))`;


const getColor = function(pct, colorSet) {

    for (var i = 1; i < colorSet.length - 1; i++) {
        if (pct < colorSet[i].pct) {
            break;
        }
    }

    var lower = colorSet[i - 1];
    var upper = colorSet[i];
    var range = upper.pct - lower.pct;
    var rangePct = (pct - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;

    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };

    return { r: color.r, g: color.g, b: color.b };
}


const animateGradient = function(color) {
    if(intervalFrame === undefined) {
        
        let elapsed = 0;
        let currentPct = 0;

        intervalFrame = setInterval(() => {

            let time = transitionTime / 1000;
            let numberOfFrames = time * 60;

            elapsed += 1;
            currentPct = Math.min(elapsed / numberOfFrames, 1) * 100;
            
            let newColor = getColor(currentPct, color);
            let generateGradient

            if (aspectRatio == 'PC') {
                generateGradient = `radial-gradient(60% 17.5% at 95% 7.5%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(60% 15% at 0% 60%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(85% 7.5% at 50% 80%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0))`;
            } else if (aspectRatio == 'MOBILE') {
                generateGradient = `radial-gradient(70% 4% at 50% 5.65%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(80% 5.25% at 50% 55%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(110% 12.5% at 50% 80%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0))`;
            }

            document.body.style.backgroundImage = generateGradient;
            currentColor = newColor;

            if(currentPct === 100) {
                clearInterval(intervalFrame);
                intervalFrame = undefined;
            }

        }, 16.667);

    }
};


const healingContent = {
    textGradient: 'linear-gradient(160deg, #FFC700 30%, #FF6B00)',
    heroImage: '/public/images/EditedVert1.png',
    heroText: 'HEALING',
    heroParagraph: '<b>Neuro Healing™</b> is an interactive program on how to <b>improve your health</b>.',
    buttonGradient: 'linear-gradient(160deg, #FFC700 30%, #FF6B00)',
    buttonShadow: '0 0 30px #FF6B00',
    explainImage: '/public/images/Vert5.jpg',
    explainParagraph: 'NEURO DESIGN is a CREATIVE MAGIC, where we can create the reality we want with our own thoughts and intention, consciously delving into the layers of our subconscious and taking out resources for building the life of our dreams.<br><br>You become aware of the problems and blocks in your body which are pulling your energy, mood and self-esteem down, and creating health issues.',
    infoImage: '/public/images/HealingTwo.png',
    point1: 'How to remove negative energy and re energize the problem zones in your body.',
    point2: 'How to cleanse the organs and channels of energy flow using sound healing.',
    point3: 'How to improve your health by using vibrations of the shamanic tools.',
    point4: 'How to manage your weight condition using the magnets tools for balance.',
    point5: 'How to rebalance, re-align, and restore energy using magnets.',
    point6: 'How to protect yourself from intrusion or negative energy.',
    point1Img: '/public/images/HealingIcon1.png',
    point2Img: '/public/images/HealingIcon2.png',
    point3Img: '/public/images/HealingIcon3.png',
    point4Img: '/public/images/HealingIcon4.png',
    point5Img: '/public/images/HealingIcon5.png',
    point6Img: '/public/images/HealingIcon6.png',
}

const elegantContent = {
    textGradient: 'linear-gradient(160deg, #DB00FF 30%, #7000FF)',
    heroImage: '/public/images/NeuroElegantEdited.png',
    heroText: 'ELEGANT',
    heroParagraph: '<b>Neuro Elegance™</b> is an interactive program on how to <b>create your image</b>.',
    buttonGradient: 'linear-gradient(160deg, #DB00FF 30%, #7000FF)',
    buttonShadow: '0 0 30px #7000FF',
    explainImage: '/public/images/Vert4.png',
    explainParagraph: "NEURO DESIGN is a CREATIVE MAGIC, where we can create the reality we want with our own thoughts and intention, consciously delving into the layers of our subconscious and taking out resources for building the life of our dreams.<br><br>WE SHOW YOU THE TECHNIQUES AND ALGORITHMS ON HOW TO BUILD THE ELEGANT IMAGE OF YOUR DREAM.<br><br>In this course you discover your personality style and by using our algorithms you'll be able to create the image you are dreaming of.",
    infoImage: '/public/images/EleganceTwo.png',
    point1: 'How Neuro Design will help you create your new image and feel comfortable in it.',
    point2: 'How to choose the right clothes for your body shape.',
    point3: 'How to build capsule collections for all your special events.',
    point4: 'How to present your best colors and details for your new image, skin tone and hair style.',
    point5: 'How to transform your mindset to potray a confident and successful image of yourself.',
    point6: 'How to perform your new image through body language, gestures and public speaking.',
    point1Img: '/public/images/NeuroElegantIcon1.png',
    point2Img: '/public/images/NeuroElegantIcon2.png',
    point3Img: '/public/images/NeuroElegantIcon3.png',
    point4Img: '/public/images/NeuroElegantIcon4.png',
    point5Img: '/public/images/NeuroElegantIcon5.png',
    point6Img: '/public/images/NeuroElegantEdited.png',
}

const mindsetContent = {
    textGradient: 'linear-gradient(160deg, #00FFC2 30%, #0085FF)',
    heroImage: '/public/images/EditedNeuroAware.png',
    heroText: 'MINDSET',
    heroParagraph: '<b>Neuro Mindset™</b> is an interactive program on how to <b>improve your awareness</b>.',
    buttonGradient: 'linear-gradient(160deg, #00FFC2 30%, #0085FF)',
    buttonShadow: '0 0 30px #0085FF',
    explainImage: '/public/images/Vert3.png',
    explainParagraph: "NEURO DESIGN is a CREATIVE MAGIC, where we can create the reality we want with our own thoughts and intention, consciously delving into the layers of our subconscious and taking out resources for building the life of our dreams.<br><br>YOU ARE LEARNING TO HOLD THE CONTROL OVER YOUR LIFE IN YOUR  HANDS AND ADJUST YOUR EXISTING LIFESTYLE TO THE STYLE OF YOUR DREAM.",
    infoImage: '/public/images/MindsetTwo.png',
    point1: 'How to overcome stress situation analyzing the core issue through neuro-analytic algorithm.',
    point2: 'How to express through the drawing the sensations you dived in during the healing session.',
    point3: 'How to restore the energy by resonating with a bio-structure using neuro-algorithm.',
    point4: 'How to transform your inner world to self-confident and successful image of yourself.',
    point5: 'How to raise the vibrations in your body using our neuro-mindset and bring the pure joy in your life.',
    point6: 'How to set up your new vision of your unlimited horizons in career, communications and relationships.',
    point1Img: '/public/images/MindsetIcon1.png',
    point2Img: '/public/images/MindsetIcon2.png',
    point3Img: '/public/images/MindsetIcon3.png',
    point4Img: '/public/images/MindsetIcon4.png',
    point5Img: '/public/images/MindsetIcon5.png',
    point6Img: '/public/images/MindsetIcon6.png',
}

const changeContents = function(section) {

    document.getElementById('explain-image').src = section.explainImage;
    document.getElementById('explain-header').style.backgroundImage = section.textGradient;
    document.getElementById('explain-paragraph').innerHTML = section.explainParagraph;
    document.getElementById('info-header').style.backgroundImage = section.textGradient;
    document.getElementById('info-image').src = section.infoImage;
    document.getElementById('point-1').innerHTML = section.point1;
    document.getElementById('point-2').innerHTML = section.point2;
    document.getElementById('point-3').innerHTML = section.point3;
    document.getElementById('point-4').innerHTML = section.point4;
    document.getElementById('point-5').innerHTML = section.point5;
    document.getElementById('point-6').innerHTML = section.point6;
    document.getElementById('point-1-img').src = section.point1Img;
    document.getElementById('point-2-img').src = section.point2Img;
    document.getElementById('point-3-img').src = section.point3Img;
    document.getElementById('point-4-img').src = section.point4Img;
    document.getElementById('point-5-img').src = section.point5Img;
    document.getElementById('point-6-img').src = section.point6Img;
    document.getElementById('about-header').style.backgroundImage = section.textGradient;
    document.getElementById('ref-header').style.backgroundImage = section.textGradient;
    document.getElementById('final-header').style.backgroundImage = section.textGradient;
    document.getElementById('final-button').style.backgroundImage = section.buttonGradient;
    document.getElementById('final-button').style.boxShadow = section.buttonShadow;
    document.getElementById('contact-header').style.backgroundImage = section.textGradient;

    document.getElementById('hero-text').classList.remove('show');
    document.getElementById('hero-paragraph').classList.remove('show');
    document.getElementById('hero-img').classList.remove('show');
    document.getElementById('hero-button').classList.remove('show');
    document.getElementById('hero-button').classList.add('hide');
    document.getElementById('hero-text').classList.add('hide');
    document.getElementById('hero-paragraph').classList.add('hide');
    document.getElementById('hero-img').classList.add('hide');

    sleep(200).then(() => {

        document.getElementById('hero-text').classList.remove('hide');
        document.getElementById('hero-paragraph').classList.remove('hide');
        document.getElementById('hero-img').classList.remove('hide');
        document.getElementById('hero-button').classList.remove('hide');

        document.getElementById('hero-text').style.backgroundImage = section.textGradient;
        document.getElementById('hero-text').innerHTML = section.heroText;
        document.getElementById('hero-paragraph').innerHTML = section.heroParagraph;
        document.getElementById('hero-img').src = section.heroImage;
        document.getElementById('hero-button').style.backgroundImage = section.buttonGradient;
        document.getElementById('hero-button').style.boxShadow = section.buttonShadow;

        sleep(200).then(() => {

            document.getElementById('hero-text').classList.add('show');
            document.getElementById('hero-paragraph').classList.add('show');
            document.getElementById('hero-img').classList.add('show');
            document.getElementById('hero-button').classList.add('show');

        })

    })

}


document.getElementById('healing').addEventListener('click', function() {
    
    if (intervalFrame == undefined && selectedSection != 'healing') {
        selectedSection = 'healing';
    }
    else {
        return
    }

    let color = [
        { pct: 0, color: currentColor }, // current color
        { pct: 100, color: healingColor } // transition color
    ];

    document.getElementById('healing').classList.remove('headerHide');
    document.getElementById('elegant').classList.add('headerHide');
    document.getElementById('mindset').classList.add('headerHide');

    animateGradient(color);
    changeContents(healingContent);

    const alreadyAnimated = document.querySelectorAll('.animate');

    for (let i = 0; i < alreadyAnimated.length; i++) {
        const el = alreadyAnimated[i];

        el.classList.remove('animate');
    }

});
document.getElementById('elegant').addEventListener('click', function() {
    
    if (intervalFrame == undefined && selectedSection != 'elegant') {
        selectedSection = 'elegant';
    }
    else {
        return
    }

    let color = [
        { pct: 0,  color: currentColor }, // current color
        { pct: 100, color: elegantColor } // transition color
    ];

    document.getElementById('healing').classList.add('headerHide');
    document.getElementById('elegant').classList.remove('headerHide');
    document.getElementById('mindset').classList.add('headerHide');

    animateGradient(color);
    changeContents(elegantContent);

    const alreadyAnimated = document.querySelectorAll('.animate');

    for (let i = 0; i < alreadyAnimated.length; i++) {
        const el = alreadyAnimated[i];

        el.classList.remove('animate');
    }

});
document.getElementById('mindset').addEventListener('click', function() {
    
    if (intervalFrame == undefined && selectedSection != 'mindset') {
        selectedSection = 'mindset';
    }
    else {
        return
    }

    let color = [
        { pct: 0,  color: currentColor }, // current color
        { pct: 100, color: mindsetColor } // transition color
    ];

    document.getElementById('healing').classList.add('headerHide');
    document.getElementById('elegant').classList.add('headerHide');
    document.getElementById('mindset').classList.remove('headerHide');

    animateGradient(color);
    changeContents(mindsetContent);

    const alreadyAnimated = document.querySelectorAll('.animate');

    for (let i = 0; i < alreadyAnimated.length; i++) {
        const el = alreadyAnimated[i];

        el.classList.remove('animate');
    }

});


function aspectChange(aspectMedia) {

    if (aspectMedia.matches) {
        aspectRatio = 'MOBILE';
        document.body.style.backgroundImage = `radial-gradient(70% 4% at 50% 5.65%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(80% 5.25% at 50% 55%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(110% 12.5% at 50% 80%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0))`;
        
        document.getElementById('info-header').classList.remove('animate-down');
        document.getElementById('info-two').classList.remove('animate-right');
        document.getElementById('info-five').classList.remove('animate-left');
        document.getElementById('info-header').classList.add('animate-up');
        document.getElementById('info-two').classList.add('animate-left');
        document.getElementById('info-five').classList.add('animate-right');

        document.getElementById('about-img').classList.remove('animate-right');
        document.getElementById('about-header').classList.remove('animate-left');
        document.getElementById('about-paragraph').classList.remove('animate-left');
        document.getElementById('about-img').classList.add('animate-down');
        document.getElementById('about-header').classList.add('animate-up');
        document.getElementById('about-paragraph').classList.add('animate-up');

        document.getElementById('explain-img').classList.remove('animate-right');
        document.getElementById('explain-header').classList.remove('animate-left');
        document.getElementById('explain-paragraph').classList.remove('animate-left');
        document.getElementById('explain-img').classList.add('animate-down');
        document.getElementById('explain-header').classList.add('animate-up');
        document.getElementById('explain-paragraph').classList.add('animate-up');

        console.log('SWAPPING TO MOBILE');
    } else {
        aspectRatio = 'PC';
        document.body.style.backgroundImage = `radial-gradient(60% 17.5% at 95% 7.5%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(60% 15% at 0% 60%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(85% 7.5% at 50% 80%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0))`;
        
        document.getElementById('info-two').classList.remove('animate-left');
        document.getElementById('info-five').classList.remove('animate-right');
        document.getElementById('info-two').classList.add('animate-right');
        document.getElementById('info-five').classList.add('animate-left');

        document.getElementById('about-img').classList.remove('animate-down');
        document.getElementById('about-header').classList.remove('animate-up');
        document.getElementById('about-paragraph').classList.remove('animate-up');
        document.getElementById('about-img').classList.add('animate-right');
        document.getElementById('about-header').classList.add('animate-left');
        document.getElementById('about-paragraph').classList.add('animate-left');

        document.getElementById('explain-img').classList.remove('animate-down');
        document.getElementById('explain-header').classList.remove('animate-up');
        document.getElementById('explain-paragraph').classList.remove('animate-up');
        document.getElementById('explain-img').classList.add('animate-right');
        document.getElementById('explain-header').classList.add('animate-left');
        document.getElementById('explain-paragraph').classList.add('animate-left');

        console.log('SWAPPING TO PC');
    }

}

var aspectMedia = window.matchMedia("(max-aspect-ratio: 5/4)")

aspectChange(aspectMedia);

// Attach listener function on state changes
aspectMedia.addEventListener("change", function() {
  aspectChange(aspectMedia);
}); 


const animationElements = document.querySelectorAll('.animate-right, .animate-left, .animate-down, .animate-up');

const options = {
    root: null,
    threshold: 0.5,
    rootMargin: '10px',
}


function callback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    })
}

const observer = new IntersectionObserver(callback, options);

for (let i = 0; i < animationElements.length; i++) {
    const el = animationElements[i];

    observer.observe(el);
}


function openImage(img) {

    const imgUrl = img.src;

    const lightbox = document.getElementById('img-lightbox');
    const currentImg = document.getElementById('open-image');

    if (currentImg.src != imgUrl) {
        currentImg.src = imgUrl;
    }

    lightbox.classList.add('lb-opening');
    currentImg.classList.add('img-opening');

}

changeContents(healingContent);

/* 


FOR EMAIL AUTOFILL

<button class="emailReplyButton" onClick="sendEmail(message)">Reply</button>

function sendEmail(message) {
    var email = message.emailId;
    var subject = message.subject;
    var emailBody = 'Hi '+message.from;
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}


FOR TELEGRAM CHAT

https://t.me/marinamacleod/text={hello!} (open in new window, and it will start message log with user [in this case, mom]) << 


FOR TWITTER CHAT

https://twitter.com/messages/compose?recipient_id=1770938195644915713&text=Hello%20world <<make sure to change the text of the message



FOR INSTA CHAT

https://ig.me/m/neurocoursess <sends straight to dms, make sure to setup ice breakers on insta

*/
