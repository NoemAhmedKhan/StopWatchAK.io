// STOP WATCH TIMER SETUP START
let Hr = document.getElementById('hours');
let Min = document.getElementById('minutes');
let Sec = document.getElementById('seconds')
let Milisec = document.getElementById('miliseconds');


// Convertion Of Inner HTML From String To Number & Storing In These Variables
let h = Number(Hr.innerHTML);
let mn = Number(Min.innerHTML);
let s = Number(Sec.innerHTML);
let ms = Number(Milisec.innerHTML);


// MAIN START FUNCTION
let Start_Button = document.getElementById("start");

Start_Button.addEventListener('click', START);

// To overcome the problem of starts counting again & increases the speed of time double on every start button click till interval is clear.
let x = 0;

function START(){
    x = x + 1;

    if(x === 1){
        Stop_Interval = setInterval(Timer, 100);
    }

}


function Timer(){

    Milisec.innerHTML = ms + 1;
    ms = ms + 1;

    if(Milisec.innerHTML == 11){
        Milisec.innerHTML = 1;
        ms = 1;
    }


    if(Milisec.innerHTML == 10){
        Sec.innerHTML = s + 1;
        s = s + 1;


        if(Sec.innerHTML == 60){
            Sec.innerHTML = 1;
            s = 1;



                Min.innerHTML = mn + 1;
                mn = mn + 1;
    
    
                if(Min.innerHTML == 60){
                    Min.innerHTML = 1;
                    mn = 1;




                        Hr.innerHTML = h + 1;
                        h = h + 1;
            
            
                        if(Hr.innerHTML == 60){
                            Hr.innerHTML = 1;
                            h = 1;
                }

            }

        }
            
    }

}




// MAIN STOP FUNCTION
let Stop = document.getElementById('stop');

Stop.addEventListener('click', STOP)

function STOP(){

    // Checking all values are = 0; it means Timer is not started so remains all values = 00;
    switch (0){

        case h:
            Hr.innerHTML = "00";
            break;
        case mn:
            Min.innerHTML = "00";
            break;
        case s:
            Sec.innerHTML = "00";
            break;
        case ms:
            Milisec.innerHTML = "00";
            break;
    }

    // Stopping interval
    clearInterval(Stop_Interval);

    // x = 0; To make the Timer ready for start.
    x = 0;
}



// MAIN RESET FUNCTION
let Reset = document.getElementById('reset');

Reset.addEventListener('click', RESET);

// STOP INTERVAL
let Stop_Interval;

function RESET(){

    // Stopping interval
    clearInterval(Stop_Interval);

    // Setting values ( 0 ) to change values of these variables which was increased after starting the Timer.
    h = 0;
    mn = 0;
    s = 0;
    ms = 0;

    // Showing Timer value again ( 00 ) to its original condition
    Hr.innerHTML = "00";
    Min.innerHTML =  "00";
    Sec.innerHTML = "00";
    Milisec.innerHTML =  "00";

    // x = 0; Because of overcome the problem of increasing the speed of Timer by clicking on start button more than 1 time.
    x = 0;

}


// STOP WATCH TIMER SETUP END

// CHANGING COLORS START

// Parent Div of change color buttons
let Change_Colors = document.getElementsByClassName('change-colors');
// Stop Watch Background Div
let Stop_Watch_Background = document.getElementById('stop-watch-background');
// Start Stop Reset Buttons Div
let Buttons_Div = document.getElementById('start-stop-reset-background');
// Stop Watch Heading
let Stop_Watch_Head = document.getElementById('heading');

// Array to store colors for changing buttons background & border
let clr = ['#9b59b6', '#5f27cd', '#ff9f43', '#34495e'];

function change_color_func(Color){
    Stop_Watch_Background.style.background = Color;
    Buttons_Div.style.background = Color;
    Stop_Watch_Head.style.cssText += `background-color: #D3D3D3; text-shadow: 2px 2px 0 ${Color}, 2px -2px 0 ${Color}, -2px 2px 0 ${Color}, -2px -2px 0 ${Color}, 2px 0px 0 ${Color}, 0px 2px 0 ${Color}, -2px 0px 0 ${Color}, 0px -2px 0 ${Color};`;

    // changing clicked button background & border
    if(Color == '#9b59b6'){
        Change_Colors[0].style.cssText += `background-color: #D3D3D3; border: 4px solid ${clr[0]}`;
        Change_Colors[1].style.cssText += `background-color: ${clr[1]}; border: 4px solid #D3D3D3`;
        Change_Colors[2].style.cssText += `background-color: ${clr[2]}; border: 4px solid #D3D3D3`;
        Change_Colors[3].style.cssText += `background-color: ${clr[3]}; border: 4px solid #D3D3D3`;

    }
    else if(Color == '#5f27cd'){
        Change_Colors[0].style.cssText += `background-color: ${clr[0]}; border: 4px solid #D3D3D3`;
        Change_Colors[1].style.cssText += `background-color: #D3D3D3; border: 4px solid ${clr[1]}`;
        Change_Colors[2].style.cssText += `background-color: ${clr[2]}; border: 4px solid #D3D3D3`;
        Change_Colors[3].style.cssText += `background-color: ${clr[3]}; border: 4px solid #D3D3D3`;
    }
    else if(Color == '#ff9f43'){
        Change_Colors[0].style.cssText += `background-color: ${clr[0]}; border: 4px solid #D3D3D3`;
        Change_Colors[1].style.cssText += `background-color: ${clr[1]}; border: 4px solid #D3D3D3`;
        Change_Colors[2].style.cssText += `background-color: #D3D3D3; border: 4px solid ${clr[2]}`;
        Change_Colors[3].style.cssText += `background-color: ${clr[3]}; border: 4px solid #D3D3D3`;
    }
    else if(Color == '#34495e'){
        Change_Colors[0].style.cssText += `background-color: ${clr[0]}; border: 4px solid #D3D3D3`;
        Change_Colors[1].style.cssText += `background-color: ${clr[1]}; border: 4px solid #D3D3D3`;
        Change_Colors[2].style.cssText += `background-color: ${clr[2]}; border: 4px solid #D3D3D3`;
        Change_Colors[3].style.cssText += `background-color: #D3D3D3; border: 4px solid ${clr[3]}`;
    }
}

// CHANGING COLORS END


// OPEN & CLOSE HEAD BAR FOR SMALL DEVICES START

// Line bar icon
let Line_Bar = document.getElementById('line-bar-icon');

Line_Bar.addEventListener('click', BARS);

function BARS(){
    Change_Colors[0].parentElement.style.cssText += 'display: flex; height: auto;';
    Line_Bar.style.cssText += 'display: none;';
    Cross.style.cssText += 'display: inline-block;';
}

// Cross icon
let Cross = document.getElementById('cross-icon');

Cross.addEventListener('click', CROSS);

function CROSS(){
    Change_Colors[0].parentElement.style.cssText += 'display: none; height: 0px;';
    Line_Bar.style.cssText += 'display: inline-block;';
    Cross.style.cssText += 'display: none;';
}




// SUBSCRIBE EMAIL
let Email = document.getElementById('email-input');

let Subs_Button = document.getElementById('subs-button');

let Get_Email;

Subs_Button.addEventListener('click', function (){
    
    Get_Email = Email.value;

    Email.value = "";

    if(Get_Email.includes('@')){
        alert(` You Have Subscribed Our Site By ${Get_Email} `);
        console.log(` Email: ${Get_Email} `);
    }else{
        alert('Email is incorrect');
    }

});
