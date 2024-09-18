"use strick"

const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const container = document.querySelector('.container');
const textHeader = document.querySelector('.text-header');
const colorRepresentation = document.querySelector('.color-representation');
const nowKnow = document.getElementById('now-know');

const proveInfoContainer = document.querySelector('.prove-info-container');
const proveLayer = document.querySelector('.prove-layer');
const proveLoader = document.querySelector('.prove-loader');
const nameTextInput = document.querySelector('.name-text-input');
const nameProve = document.getElementById('name-prove');
const continueBtn = document.getElementById('continue-btn');

error.classList.add('hidden');
container.classList.add('hidden');
textHeader.classList.add('hidden');
colorRepresentation.classList.add('hidden');

// proveInfoContainer.classList.add('prove-hide');


const userName = prompt('What is your name, please');

if (userName.length > 5) {
    // go on
    const colorMark = confirm('Do you know about the color representations? \n If yes, Click cancel to continue or otherwise Click Ok to see');

    if (colorMark) {
        // open color representation
        colorRepresentation.classList.remove('hidden');
        error.classList.add('hidden');
        container.classList.add('hidden');
        textHeader.classList.add('hidden');
        loader.classList.add('hidden');

        
    }
    else {
        // you know color representation
        container.classList.remove('hidden');
        colorRepresentation.classList.add('hidden');
        error.classList.add('hidden');
        loader.classList.add('hidden');
        textHeader.classList.remove('hidden');


        // bringing prove info section
        proveLoader.style = 'opacity: 0';
        
        // bring prove container after loading
        setTimeout(function () {
            proveInfoContainer.style = 'display: block';
            proveLayer.style = 'display: block';
        }, 1000);

        // bringing change user name from chance section
        const changeUserName = changeUserName;
        // when click on process btn
        continueBtn.addEventListener('click' , function (e) {
            e.preventDefault();
            nameTextInput.style = 'margin-left: 10px';
            proveLoader.style = 'opacity: 1';

            // 
            if (nameProve.value == userName || nameProve === changeUserName) {
                setInterval(function () {
                    proveLoader.style = 'opacity: 0'; 
                    nameProve.style = 'border: 1px solid green';
                }, 3000);
            }

            // removing prove container with layer
            if (nameProve.value == userName || nameProve === changeUserName) {
                setInterval(function () {
                    proveInfoContainer.style = 'display: none';
                    proveLayer.style = 'display: none';
                }, 3500);
            }
            else {
                // nameProve.style = 'border: 1px solid red';
                setInterval(function () {
                    proveLoader.style = 'opacity: 0'; 
                    nameProve.style = 'border: 1px solid red';
                }, 3000);
            }
        });

        // removing prove infoe content
        // proveLayer.addEventListener('click' , function (e) {
        //     e.preventDefault();
        //     proveInfoContainer.style = 'display: none';
        //     proveLayer.style = 'display: none';
        // });
    }
}
else {
    // cancel
    const change1 = confirm("Without your name you can't be part of this site \n Click OK to Enter your name or Otherwise");

    if (change1) {
        // open prompt for name the second time
        const changeUserName = prompt('What is your name, please');

        if (changeUserName.length > 5) {
            const colorMark = confirm('Do you know about the color representations? \n If yes, Click cancel to continue or otherwise Click Ok to see');

            if (colorMark) {
                // open color representation
                colorRepresentation.classList.remove('hidden');
                error.classList.add('hidden');
                container.classList.add('hidden');
                textHeader.classList.add('hidden');
                loader.classList.add('hidden');
                 
            }
            else {
                // you know color representation
                container.classList.remove('hidden');
                colorRepresentation.classList.add('hidden');
                error.classList.add('hidden');
                loader.classList.add('hidden');
                textHeader.classList.remove('hidden');



            }
        }
        else {
            // you know color representation
            error.classList.remove('hidden');
            loader.classList.add('hidden');
            container.classList.add('hidden');
        }
    }
    
    else {
        // open error 404 page
        error.classList.remove('hidden');
        loader.classList.add('hidden');
        container.classList.add('hidden');
    }
}

nowKnow.addEventListener('click' , function(e) {
    e.preventDefault();
    colorRepresentation.classList.add('hidden');
    container.classList.remove('hidden');
    error.classList.add('hidden');
    loader.classList.add('hidden');
    textHeader.classList.remove('hidden');


    // bringing prove info section
    proveLoader.style = 'opacity: 0';
        
    // bring prove container after loading
    setTimeout(function () {
        proveInfoContainer.style = 'display: block';
        proveLayer.style = 'display: block';
    }, 1000);
    
    // when click on process btn
    continueBtn.addEventListener('click' , function (e) {
        e.preventDefault();
        nameTextInput.style = 'margin-left: 10px';
        proveLoader.style = 'opacity: 1';

        // 
        if (nameProve.value == userName) {
            setInterval(function () {
                proveLoader.style = 'opacity: 0'; 
                nameProve.style = 'border: 1px solid green';
            }, 4000);
        }

        // removing prove container with layer
        if (nameProve.value == userName) {
            setInterval(function () {
                proveInfoContainer.style = 'display: none';
                proveLayer.style = 'display: none';
            }, 4500);
        }
        else {
            // nameProve.style = 'border: 1px solid red';
            setInterval(function () {
                proveLoader.style = 'opacity: 0'; 
                nameProve.style = 'border: 1px solid red';
            },  4000);
        }
    });

    // removing prove infoe content
    // proveLayer.addEventListener('click' , function (e) {
    //     e.preventDefault();
    //     proveInfoContainer.style = 'display: none';
    //     proveLayer.style = 'display: none';
    // });
});



window.addEventListener('keydown' , e => {
    // e.preventDefault();
    if (e.key === 'Enter') {
        console.log('working');
        nameTextInput.style = 'margin-left: 10px';
        proveLoader.style = 'opacity: 1';

        // loader duration
        if (nameProve.value == userName) {
            setInterval(function () {
                proveLoader.style = 'opacity: 0'; 
                nameProve.style = 'border: 1px solid green';
            }, 4000);
        }

        // removing prove container with layer
        if (nameProve.value == userName) {
            setInterval(function () {
                proveInfoContainer.style = 'display: none';
                proveLayer.style = 'display: none';
            }, 4500);
        }
        else {
            // nameProve.style = 'border: 1px solid red';
            setInterval(function () {
                proveLoader.style = 'opacity: 0'; 
                nameProve.style = 'border: 1px solid red';
            },  4000);
        }
    }
});



// problems not solve
// 1. second chance name input not functionnig
// 2. not comparing second chance name input for name prove section
// 3. how to make user enter a string (MUST) to compare


// problem explanation on 3 above
// ex: when you compare two empty string the boolean is true
//      But I want it to be false