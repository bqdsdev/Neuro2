window.onload = function() {

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



let transitionTime = 500
let intervalFrame;

let healingColor = { r: 0, g: 225, b: 25 }
let elegantColor = { r: 255, g: 199, b: 0 }
let mindsetColor = { r: 0, g: 255, b: 194 }
let currentColor = healingColor

let selectedSection = 'healing'


// apply gradient here instead of with css
document.body.style.backgroundImage = `radial-gradient(60% 17.5% at 95% 7.5%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(30% 10% at 25% 49%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(55% 6% at 50% 67.5%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.65), rgba(0, 0, 0, 0))`;


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
            let generateGradient = `radial-gradient(60% 17.5% at 95% 7.5%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(35% 10% at 22.5% 47.5%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0)), radial-gradient(55% 6% at 50% 67.5%, rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, 0.65), rgba(0, 0, 0, 0))`;

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
    textGradient: 'linear-gradient(160deg, #61FF00 30%, #00700B)',
    heroImage: '/public/images/EditedVert1.png',
    heroText: 'HEALING',
    heroParagraph: '<b>Neuro Healing™</b> is an interactive program on how to <b>improve your health</b>.',
    buttonGradient: 'linear-gradient(160deg, #61FF00 30%, #00a310)',
    buttonShadow: '0 0 30px #00a310',
    infoImage: '/public/images/EditedVert1.png',
    point1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati magni soluta aperiam reprehenderit nemo voluptatum eos vel dolorum ipsam.',
    point2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia maiores consequatur aspernatur dolor doloremque velit, asperiores numquam iusto deleniti nostrum.',
    point3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat nesciunt suscipit iste doloribus enim maiores consectetur eveniet dicta itaque?',
    point4: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum itaque aspernatur molestias cumque consequatur minima omnis sint quos iure?',
    point5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sed cum nihil id omnis doloribus. Repellendus labore nam deserunt quos!',
    point6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo repudiandae omnis consequatur, neque corporis tempore! Officiis molestias maxime ratione!',
    point1Img: '/public/images/EditedVert1.png',
    point2Img: '/public/images/EditedVert1.png',
    point3Img: '/public/images/EditedVert1.png',
    point4Img: '/public/images/EditedVert1.png',
    point5Img: '/public/images/EditedVert1.png',
    point6Img: '/public/images/EditedVert1.png',
}

const elegantContent = {
    textGradient: 'linear-gradient(160deg, #FFC700 30%, #FF6B00)',
    heroImage: '/public/images/NeuroElegantEdited.png',
    heroText: 'ELEGANT',
    heroParagraph: '<b>Neuro Elegance™</b> is an interactive program on how to <b>create your image</b>.',
    buttonGradient: 'linear-gradient(160deg, #FFC700 30%, #FF6B00)',
    buttonShadow: '0 0 30px #FF6B00',
    infoImage: '/public/images/NeuroElegantInfoEdited.png',
    point1: 'How Neuro Design will help you create your new image and feel comfortable in it',
    point2: 'How to choose the right clothes for your body shape',
    point3: 'How to build capsule collections for all your special events',
    point4: 'How to present your best colors and details for your new image, skin tone and hair style',
    point5: 'How to transform your mindset to potray a confident and successful image of yourself',
    point6: 'How to perform your new image through body language, gestures and public speaking',
    point1Img: '/public/images/NeuroElegantIcon1.png',
    point2Img: '/public/images/NeuroElegantIcon2.png',
    point3Img: '/public/images/NeuroElegantIcon3.png',
    point4Img: '/public/images/NeuroElegantIcon4.png',
    point5Img: '/public/images/NeuroElegantEdited.png',
    point6Img: '/public/images/NeuroElegantEdited.png',
}

const mindsetContent = {
    textGradient: 'linear-gradient(160deg, #00FFC2 30%, #0085FF)',
    heroImage: '/public/images/EditedNeuroAware.png',
    heroText: 'MINDSET',
    heroParagraph: '<b>Neuro Mindset™</b> is an interactive program on how to <b>improve your awareness</b>.',
    buttonGradient: 'linear-gradient(160deg, #00FFC2 30%, #0085FF)',
    buttonShadow: '0 0 30px #0085FF',
    infoImage: '/public/images/EditedNeuroAware.png',
    point1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati magni soluta aperiam reprehenderit nemo voluptatum eos vel dolorum ipsam.',
    point2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia maiores consequatur aspernatur dolor doloremque velit, asperiores numquam iusto deleniti nostrum.',
    point3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat nesciunt suscipit iste doloribus enim maiores consectetur eveniet dicta itaque?',
    point4: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum itaque aspernatur molestias cumque consequatur minima omnis sint quos iure?',
    point5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sed cum nihil id omnis doloribus. Repellendus labore nam deserunt quos!',
    point6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo repudiandae omnis consequatur, neque corporis tempore! Officiis molestias maxime ratione!',
    point1Img: '/public/images/EditedNeuroAware.png',
    point2Img: '/public/images/EditedNeuroAware.png',
    point3Img: '/public/images/EditedNeuroAware.png',
    point4Img: '/public/images/EditedNeuroAware.png',
    point5Img: '/public/images/EditedNeuroAware.png',
    point6Img: '/public/images/EditedNeuroAware.png',
}

const changeContents = function(section) {

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

});


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

t.me/marinamacleod (open in new window, and it will start message log with user [in this case, mom])


FOR INSTA CHAT

https://www.instagram.com/neurocoursess/ (send them to instagram in new tab, this will start message log with user)

*/
