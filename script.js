const sideBarStepContainer =document.querySelector('.side-bar-step-container');
const step1 = document.querySelector('.step-1');
let   step2 = document.querySelector('.step-2');
const step3 = document.querySelector('.step-3');
const step4 = document.querySelector('.step-4');
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
    currentStep = newStep ;
    // stepActive = stepLink or  stepLinks[currentStep] = stepLinks[newStep]
    // newStep and currentStep are representing the numbers of click
    if (currentStep === newStep){
        stepLinks[newStep].classList.add('step-active');
    }
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
    
let step = false;


const stepTwo = (e) => {
    planContainer.classList.add('plan-active');
   formContainer.classList.add('form-active');
   finishContainer.classList.remove('finish-active');
   addsContainer.classList.remove('adds-active');
   thanksContainer.classList.remove('thanks-active');
    step = true;
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
// back button
const backPlanButton = document.querySelector('.close-plan-btn');
const nextPlanButton = document.querySelector('.next-plan-btn');

const backPlanValidation = (e) => {
    e.preventDefault();
    stepOne ();
    const newStep = currentStep - 1;
      updateActiveStep(newStep);
}
backPlanButton.addEventListener('click', backPlanValidation);
// switch button
const switchButton  = document.querySelector('.checkbox');
const monthlyPlan = document.querySelector('.monthly-plan');
const yearlyPlan = document.querySelector('.yearly-plan');
const switchMonth = document.querySelector('.switch-month');
const switchYear = document.querySelector('.switch-year');
const switchValidation = (e) =>{
    if (switchButton.checked) {
        // Show yearly plan
        yearlyPlan.style.display = 'flex';
        monthlyPlan.style.display = 'none';
        switchYear.style.color == 'hsl(213, 96%, 18%)';
        switchMonth.style.color = 'hsl(229, 24%, 79%)';
        
    } else {
        // Show monthly plan
        yearlyPlan.style.display = 'none';
        monthlyPlan.style.display = 'flex';
        switchYear.style.color == ' hsl(229, 24%, 79%)';
        switchMonth.style.color = 'hsl(213, 96%, 18%)';
    }
}
switchButton.addEventListener('change', switchValidation);
//next button
const nextPlanValidation = (e) =>{
    e.preventDefault();
    stepThree ();
    const newStep = currentStep + 1;
      updateActiveStep(newStep);
}
nextPlanButton.addEventListener('click', nextPlanValidation);

const allMonthYear = document.querySelectorAll('.monthly,.yearly');
let activeMonth = document.querySelector('.active-month');
let yearly = document.querySelectorAll('.yearly');
let monthly = document.querySelectorAll('.monthly');
// const h2Element = monthlyPlan.querySelector('.plan h2');
// const h3Element = monthlyPlan.querySelector('.plan h3');
let allMonthPlan = null;
const monthlyPlanData = [];

allMonthYear.forEach(monthPlan  => {

    const monthlyPlaValidation = () => {
        monthPlan.classList.add('active-month');
            activeMonth.classList.remove('active-month');
                activeMonth = monthPlan;
            if (activeMonth === monthPlan){
                monthPlan.classList.add('active-month');
            }
                // storing the element to an array to be used in the receipt/summary
            let h2ElementValue = monthPlan.querySelector('.plan h2').textContent;
            let h3ElementValue = monthPlan.querySelector('.plan h3').textContent;
            
            monthlyPlanData.push({monthPlan: `${h2ElementValue}`, monthPlanValue: `${h3ElementValue}`});
            let lastOneClicked = monthlyPlanData.slice(-1);
            // monthlyPlanData.push({monthPlanValue: `${h3ElementValue}`});
            console.log(lastOneClicked) ;

        monthly.forEach(month => {
            month.addEventListener('click', (e) => {
                if(month === activeMonth) {
                    document.querySelector('.monthly-adds-cont').classList.remove('yearly-adds-active');
                    document.querySelector('.yearly-adds-cont').classList.remove('monthly-adds-active');
                    return true ;
                }else{
                    document.querySelector('.monthly-adds-cont').classList.add('yearly-adds-active');
                    document.querySelector('.yearly-adds-cont').classList.add('monthly-adds-active');
                    return false;
                };
            });
        });

        yearly.forEach(year => {
            year.addEventListener('click', (e) => {
                if(year === activeMonth) {
                    document.querySelector('.monthly-adds-cont').classList.add('yearly-adds-active');
                    document.querySelector('.yearly-adds-cont').classList.add('monthly-adds-active');
                    return true ;
                }else{
                    document.querySelector('.monthly-adds-cont').classList.remove('yearly-adds-active');
                    document.querySelector('.yearly-adds-cont').classList.remove('monthly-adds-active');
                    return false;
                };
            })
        
        });
    
    };
    monthPlan.addEventListener('click', monthlyPlaValidation);
   
});
// if (switchValidation () && monthlyPlaValidation ()){
//     document.querySelector('.monthly-adds-cont').style.display = 'none';
//         document.querySelector('.yearly-adds-cont').style.display = 'block';
// }else{
//     document.querySelector('.monthly-adds-cont').style.display = 'block';
//         document.querySelector('.yearly-adds-cont').style.display = 'none';
// }
const updateSummary = () => {
    const summaryContainer = document.querySelector('.summary-container');
    const summaryText = document.querySelector('.summary-text');

    // Check if the switch button is checked
    const isYearly = switchButton.checked;

    // Get the selected plan data based on the active class
    const selectedPlanData = isYearly ? yearlyPlanData : monthlyPlanData;

    // Customize the summary text based on the selected plan
    const summary = selectedPlanData.length > 0
        ? `Selected Plan: ${selectedPlanData[selectedPlanData.length - 1].monthPlan} ${selectedPlanData[selectedPlanData.length - 1].monthPlanValue}`
        : 'No plan selected';

    // Update the summary container with the new text
    summaryText.textContent = summary;
    summaryContainer.style.display = 'block';
};


console.log(monthlyPlanData);

                // plan container ends


                // adds container starts
// back button
const addsBackButton = document.querySelector('.close-btn');
const addsNextButton = document.querySelector('.next-btn');

const addsBackValidation = (e) => {
    e.preventDefault();
    stepTwo ();
    const newStep = currentStep - 1;
        updateActiveStep(newStep);
}
addsBackButton.addEventListener('click', addsBackValidation);
// next button
const addsNextValidation = (e) =>{
    e.preventDefault();
    stepFour ();
    const newStep = currentStep + 1;
      updateActiveStep(newStep);
}
addsNextButton.addEventListener('click', addsNextValidation);

// pick adds

const pickAdds = document.querySelectorAll('.pick');
const pickAddsData = []; 
pickAdds.forEach(pickAdd => {
    let input =  pickAdd.querySelector('.pick input[type="checkbox"]');
    const pickAddsValidation = () => {
        let h2AddsElementValue = pickAdd.querySelector('.pick-cont h2').textContent;
        let pAddsElementValue = pickAdd.querySelector('.pick p:last-child').textContent;

        if (!pickAdd.classList.contains('adds-style-active') && !input.classList.contains('pick input:checked')){
            pickAdd.classList.add('adds-style-active');
            pickAdd.style.borderColor = 'hsl(213, 96%, 18%)';
            input.checked = true;
            pickAddsData.push({h2AddsElement: `${h2AddsElementValue}`, pAddsElement: `${pAddsElementValue}`})
            
        }else{
            pickAdd.classList.remove('adds-style-active');
            pickAdd.style.borderColor = 'hsl(217, 100%, 91%)';
            input.checked = false;
            // Create a function to check if an item matches the condition
                let removeAddsDataFromArray  = pickAddsData.findIndex(item => item.h2AddsElement === `${h2AddsElementValue}` && item.pAddsElement === `${pAddsElementValue}`);
            // Remove one element from that index
            if (removeAddsDataFromArray  !== -1) {
                pickAddsData.splice(removeAddsDataFromArray);
            }
            
        }
        // pickAddsData.push({h2AddsElement: `${h2AddsElementValue}`, pAddsElement: `${pAddsElementValue}`});
        // let singleAddValue = pickAddsData.slice()
    };
    console.log(pickAddsData);
    pickAdd.addEventListener('click', pickAddsValidation);
});

console.log(pickAddsData);

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

