let isRunnerLoader = true;

function newButtonPos(){
    let noButton = document.getElementById("noButton");
    noButton.style.position = "absolute";
    noButton.style.top = Math.floor(Math.random() * window.innerHeight *0.8) + "px";
    noButton.style.left = Math.floor(Math.random() * window.innerWidth*0.8) + "px";
}

function showYayPage(){
    window.location.href = "./yay.html"
}
function showLoader(){
    window.location.href = "./fakeLoading.html"
}
function showConvincePage(){
    window.location.href = "./reasons.html"
}

function changeItUp(){
    console.log('inside changeItUp');
    setInterval(changeLoaderSrc, 2500);
    setInterval(showConvincePage, 6000);
}
function changeLoaderSrc(){
    console.log('inside changeLoaderSrc');
    console.log('isRunnerLoader val = ', isRunnerLoader);
    let gif = document.getElementById('loadGif');
    let subtext = document.getElementById('loadText');
    if(isRunnerLoader){
        gif.src = "./resources/greyPreparing.gif";
        subtext.innerText = "Getting ready to present my points...";
    }
    else{
        gif.src = "./resources/loader.gif";
        subtext.innerText = "Loading million and one reasons you should say yes...";
    }
    isRunnerLoader = !isRunnerLoader;
}

let reasons = [
    {
        imageSrc: "./resources/reasons/well-fed.gif",
        text: "Will commit to keeping you well fed with sushi & fried chicken & ice cubes"
    },
    {
        imageSrc: "./resources/reasons/thermodynamic-equilibrium-cuddle.gif",
        text: "Thermodynamic Equilibrium cuddles. You cold + Me hot = Perfect balance"
    },
    {
        imageSrc: "./resources/reasons/hoodie-steal.gif",
        text: "You have loads of hoodies to steal from me"
    },
    {
        imageSrc: "./resources/reasons/dance-partner.gif",
        text: "We set the dance floor on fire everytime we jive"
    },
    {
        imageSrc: "./resources/reasons/biting.gif",
        text: "I am totally into the piranha biting, and love it completely"
    },
    // {
    //     imageSrc: "./resources/reasons/nsfw.gif",
    //     text: "...other nsfw reasons"
    // },
    {
        imageSrc: "./resources/reasons/protect.gif",
        text: "Amazing hugs and overall protection (even though you are judo champ)"
    },
    {
        imageSrc: "./resources/reasons/dinner-date.gif",
        text: "Dinner dates where we traumatize the waiter are SO much fun"
    },
    {
        imageSrc: "./resources/reasons/kisses.gif",
        text: "Rest assured you will be showered with kisses and cuddles"
    },
]
let counter = -2;
function nextReasons(){
    // alert('in here')
    let reasonLen = reasons.length;
    
    counter = (counter+2)%reasonLen;
    let reason1Img = document.getElementById('reason1gif'), reason1Text = document.getElementById('reason1text');
    let reason2Img = document.getElementById('reason2gif'), reason2Text = document.getElementById('reason2text');

    reason1Img.src = reasons[counter].imageSrc;
    reason1Text.innerText = reasons[counter].text;

    reason2Img.src = reasons[counter+1].imageSrc;
    reason2Text.innerText = reasons[counter+1].text;
}