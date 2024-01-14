const sideBarStepContainer =document.querySelector('.side-bar-step-container');
const step1 = document.querySelector('.step-1');
let   step2 = document.querySelector('.step-2');
const step3 = document.querySelector('.step-3');
const step4 = document.querySelector('.step-4');
// const step5 = document.querySelector('.step-5');
const formContainer = document.querySelector('.form-container');
const planContainer = document.querySelector('.overall-plan-container');
const addsContainer = document.querySelector('.pick-adds-container');
const finishContainer = document.querySelector('.finish-container');
const thanksContainer = document.querySelector('.thanks-container');


const stepLinks = document.querySelectorAll('.step-container span button');
let stepActive = document.querySelector('.step-active');
let currentStep = 0;

// Function to update the active step
const updateActiveStep = (newStep) => {
    stepLinks[newStep].classList.add('step-active');
    stepLinks[currentStep].classList.remove('step-active');
    //stepLink = stepLinks[newStep]
    // stepActive = stepLinks[currentStep];
    currentStep = newStep;
    // stepActive = stepLink or  stepLinks[currentStep] = stepLinks[newStep]
    // newstep and currentStep are representing the numbers of click

};

stepLinks.forEach((stepLink, index) => {
    stepLink.addEventListener('click', (e) => {
        updateActiveStep(index);
    });
});

// stepLinks.forEach(stepLink => {
//     stepLink.addEventListener('click', (e) => {
//             stepLink.classList.add('step-active');
//             stepActive.classList.remove('step-active');
//             stepActive = stepLink;          
//     });
//     });
    



const stepTwo = (e) => {
    planContainer.classList.add('plan-active');
   formContainer.classList.add('form-active');
   finishContainer.classList.remove('finish-active');
   addsContainer.classList.remove('adds-active');
   thanksContainer.classList.remove('thanks-active');
};

step2.addEventListener('click', stepTwo);

const stepThree = (e) => {
    addsContainer.classList.add('adds-active');
    planContainer.classList.remove('plan-active');
    formContainer.classList.add('form-active');
    finishContainer.classList.remove('finish-active');
    thanksContainer.classList.remove('thanks-active');
};
step3.addEventListener('click', stepThree);

const stepFour = (e) => {
    finishContainer.classList.add('finish-active');
    addsContainer.classList.remove('adds-active');
    planContainer.classList.remove('plan-active');
    formContainer.classList.add('form-active');
    thanksContainer.classList.remove('thanks-active');
    
};
step4.addEventListener('click', stepFour);

const stepOne = (e) => {
    finishContainer.classList.remove('finish-active');
    addsContainer.classList.remove('adds-active');
    planContainer.classList.remove('plan-active');
    formContainer.classList.remove('form-active');
    thanksContainer.classList.remove('thanks-active');

}
step1.addEventListener('click', stepOne);

// const stepFive = (e) => {
//     finishContainer.classList.remove('finish-active');
//     addsContainer.classList.remove('adds-active');
//     planContainer.classList.remove('plan-active');
//     formContainer.classList.add('form-active');
//     thanksContainer.classList.add('thanks-active');
// };

// step5.addEventListener('click', stepFive);

// form validation
const textInput = document.querySelector('.text-input');
const emailInput = document.querySelector('.email-input');
const numberInput = document.querySelector('.number-input');
const formInputs = document.querySelectorAll('.input');
const requiredInput = document.querySelector('.num-required h3');
console.log(formInputs);



        // text validation starts
const textValidation = (e) => {
    console.log(e);
    let regex = /^[A-Za-z\s]+$/;
    let textName = textInput.value;
   
    if (!regex.test(textName)){
        textInput.style.borderColor = 'red';
        return false;
    }
    else{
        textInput.style.borderColor = 'hsl(213, 96%, 18%)';
        return true;
    };
}
textInput.addEventListener('input', textValidation);

        // text validation ends


// email validation starts
const emailValidation = (e) =>{
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailValue = emailInput.value;
    
    if(!regex.test(emailValue)){
        emailInput.style.borderColor = 'red';
        requiredInput.style.display = 'block';
        return false;
    }else{
        emailInput.style.borderColor = 'hsl(213, 96%, 18%)';
        requiredInput.style.display = 'none';
        return true;
    }
}
emailInput.addEventListener('input', emailValidation);

        // email validation ends


// phone Number validation starts 

const numberValidation = (e) =>{
    let regex = /^\+(?:\d{1,4}[-. ]?)?\d{7,15}$/;
    let numberValue  = numberInput.value;
   
    if(!regex.test(numberValue)){
        numberInput.style.borderColor = 'red';
        requiredInput.style.display = 'block';
        return false;
        
    }else{
        numberInput.style.borderColor = 'hsl(213, 96%, 18%)';
        requiredInput.style.display = 'none';
        return true;
    }
}
numberInput.addEventListener('input', numberValidation);

    // phone Number validation ends


                    // formSubmission button starts
const submitFormButton = document.querySelector('.form-next-btn');

const formSubmission = (e) =>{
    e.preventDefault();
    let allValidatIonIsValid = textValidation (e) &&  emailValidation (e) && numberValidation ();

    if(!allValidatIonIsValid){ 
        return false;
    }
    else {
        stepTwo ();
        const newStep = currentStep + 1;
        updateActiveStep(newStep);
        return true;
    }
}
submitFormButton.addEventListener('click', formSubmission);
                             // formSubmission button ends


                // plan container starts
const backPlanButton = document.querySelector('.close-plan-btn');
const nextPlanButton = document.querySelector('.next-plan-btn');

const backPlanValidation = (e) => {
    e.preventDefault();
    stepOne ();
    const newStep = currentStep - 1;
      updateActiveStep(newStep);
}
backPlanButton.addEventListener('click', backPlanValidation);

const switchButton  = document.querySelector('.checkbox');
const monthlyPlan = document.querySelector('.monthly-plan');
const yearlyPlan = document.querySelector('.yearly-plan');


const switchValidation = (e) =>{
    if (e.target.checked) {
        // Show yearly plan
        yearlyPlan.style.display = 'flex';
        monthlyPlan.style.display = 'none';
    } else {
        // Show monthly plan
        yearlyPlan.style.display = 'none';
        monthlyPlan.style.display = 'flex';
    }
}

switchButton.addEventListener('change', switchValidation);


const nextPlanValidation = (e) =>{
    e.preventDefault();
    stepThree ();
    const newStep = currentStep + 1;
      updateActiveStep(newStep);
}


nextPlanButton.addEventListener('click', nextPlanValidation);


                // plan container ends


                // adds container starts
const addsBackButton = document.querySelector('.close-btn');
const addsNextButton = document.querySelector('.next-btn');

const addsBackValidation = (e) => {
    e.preventDefault();
    stepTwo ();
    const newStep = currentStep - 1;
        updateActiveStep(newStep);
}
addsBackButton.addEventListener('click', addsBackValidation);



const addsNextValidation = (e) =>{
    e.preventDefault();
    stepFour ();
    const newStep = currentStep + 1;
      updateActiveStep(newStep);
}
addsNextButton.addEventListener('click', addsNextValidation);

                // adds container end


                // finishing container starts
const finishBackButton = document.querySelector('.close-finish-btn');
const finishNextButton = document.querySelector('.next-finish-btn');

const finishBackValidation = (e) => {
    e.preventDefault();
    stepThree ();
    thanksContainer.classList.remove('thanks-active');
    const newStep = currentStep - 1;
        updateActiveStep(newStep);
}
finishBackButton.addEventListener('click', finishBackValidation);



const finishNextValidation = (e) =>{
    e.preventDefault();
    finishContainer.classList.remove('finish-active');
    addsContainer.classList.remove('adds-active');
    planContainer.classList.remove('plan-active');
    formContainer.classList.add('form-active');
    thanksContainer.classList.add('thanks-active');
    // const newStep = currentStep + 1;
    //     updateActiveStep(newStep);
}

finishNextButton.addEventListener('click', finishNextValidation);

const change = document.querySelector('.change');

change.addEventListener('click', () => {
    stepTwo ();
});

                // finishing container ends

