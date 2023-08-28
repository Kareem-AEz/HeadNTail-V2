function randomNo(){
    let x = Math.random();
    let y= Math.floor((x*2)+1);
    console.log(y);
    return y;
}

var button = document.getElementById("flip");
button.disabled=false;
var delayInMilliseconds = 80; 

var coin= document.getElementById("coin");
var coin_txt= document.getElementById("result");




//Hover Effect
button.addEventListener("mouseenter", function() {
    console.log("Mous is ovame");
    bm.style.transform = "translateY(10px)"; 

});

button.addEventListener("mouseleave", function() {
    console.log("Mous is ovame");
    bm.style.transform = "translateY(0px)"; 
});



//Animation Logic
var prevState =1, random;
Head_HeadContainer = document.querySelector(".Head-Head");
Head_TailContainer = document.querySelector(".Head-Tail");
Tail_TailContainer = document.querySelector(".Tail-Tail");
Tail_HeadContainer = document.querySelector(".Tail-Head");

button.addEventListener("click", function(){
    bm.style.transform = "translateY(0px)"; 
    button.disabled=true;
    coin_txt.innerHTML = "flippin'...!";
    random= randomNo(); //storing the random number
    

    //determines which animation upon the value of "prevState" and "random"
    //prevState is initially set to '0' 
    if((prevState== 1 && random== 1)){
        setZIndex(Head_HeadContainer, 5);
        setZIndex(Head_TailContainer, 0);
        setZIndex(Tail_TailContainer, 0);
        setZIndex(Tail_HeadContainer, 0);

        setOpacity(Head_HeadContainer, 1);
        setOpacity(Head_TailContainer, 0);
        setOpacity(Tail_TailContainer, 0);
        setOpacity(Tail_HeadContainer, 0);
        Head_Head.goToAndPlay(0); // Play the Head_Tail animation

        //holds the result for 2.2 seconds (Animtation length)
        setTimeout(() => {
            coin_txt.innerHTML = "It's Head!";
        }, 2200);
    }
    else if((prevState== 1 && random== 2)){
        setZIndex(Head_HeadContainer, 0)
        setZIndex(Head_TailContainer, 5)
        setZIndex(Tail_TailContainer, 0)
        setZIndex(Tail_HeadContainer, 0)

        setOpacity(Head_HeadContainer, 0)
        setOpacity(Head_TailContainer, 1)
        setOpacity(Tail_TailContainer, 0)
        setOpacity(Tail_HeadContainer, 0)
        Head_Tail.goToAndPlay(0); // Play the Head_Tail animation

        //holds the result for 2.2 seconds (Animtation length)
        setTimeout(() => {
            coin_txt.innerHTML = "It's Tail!";
        }, 2200);
    }
    else if((prevState== 2 && random== 2)){
        setZIndex(Head_HeadContainer, 0)
        setZIndex(Head_TailContainer, 0)
        setZIndex(Tail_TailContainer, 5)
        setZIndex(Tail_HeadContainer, 0)

        setOpacity(Head_HeadContainer, 0)
        setOpacity(Head_TailContainer, 0)
        setOpacity(Tail_TailContainer, 1)
        setOpacity(Tail_HeadContainer, 0)
        Tail_Tail.goToAndPlay(0); // Play the Head_Tail animation

        //holds the result for 2.2 seconds (Animtation length)
        setTimeout(() => {
            coin_txt.innerHTML = "It's Tail!";
        }, 2200);
    }
    else if((prevState== 2 && random== 1)){
        setZIndex(Head_HeadContainer, 0)
        setZIndex(Head_TailContainer, 0)
        setZIndex(Tail_TailContainer, 0)
        setZIndex(Tail_HeadContainer, 5)

        setOpacity(Head_HeadContainer, 0)
        setOpacity(Head_TailContainer, 0)
        setOpacity(Tail_TailContainer, 0)
        setOpacity(Tail_HeadContainer, 1)
        Tail_Head.goToAndPlay(0); // Play the Head_Tail animation
        
        //holds the result for 2.2 seconds (Animtation length)
        setTimeout(() => {
            coin_txt.innerHTML = "It's Head!";
        }, 2200);
    }
    else{
        console.log("Something Wrong happened!");
        console.log(prevState);
        console.log(random);
    }

    //Conditions on completing the current animation
    Head_Head.addEventListener("complete", function() {
        console.log("Animation completed!");
        button.disabled=false;
        prevState= random;
    });
    Head_Tail.addEventListener("complete", function() {
        console.log("Animation completed!");
        button.disabled=false;
        prevState= random;
    });
    Tail_Tail.addEventListener("complete", function() {
        console.log("Animation completed!");
        button.disabled=false;
        prevState= random;
    });
    Tail_Head.addEventListener("complete", function() {
        console.log("Animation completed!");
        button.disabled=false;
        prevState= random;
    });
});



//Animation Loader
var Head_Head= bodymovin.loadAnimation({
    container: document.querySelector(".Head-Head"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./Coin Json Animation/Head-Head.json"
});
var Head_Tail= bodymovin.loadAnimation({
    container: document.querySelector(".Head-Tail"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./Coin Json Animation/Head-Tail.json"
});
var Tail_Tail= bodymovin.loadAnimation({
    container: document.querySelector(".Tail-Tail"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./Coin Json Animation/Tail-Tail.json"
});
var Tail_Head= bodymovin.loadAnimation({
    container: document.querySelector(".Tail-Head"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./Coin Json Animation/Tail-Head.json"
});

                    /*-----------Per animation Controllers-----------"*/
//Setting zIndex
function setZIndex(animation, zIndex) {
    animation.style.zIndex = zIndex;
}

//Setting opacity
function setOpacity(animation, opacity) {
    animation.style.opacity = opacity;
}