// Selecting DOM elements
let next = document.querySelector('#btn_2');
let prev = document.querySelector('#btn_1');
let sub = document.querySelector('#btn_3');
let step1 = document.querySelector('#step_1');
let step2 = document.querySelector('#step_2');
let step3 = document.querySelector('#step_3');
let step4 = document.querySelector('#step_4');
let step5 = document.querySelector('#step_5');

// Initialize variables
let id = [];
let count = 0;
// Event listener for the "Next" button
next.addEventListener('click', function(e) {
    e.preventDefault();
    count++;
    id.push(count);
    return nextConfig();
});


// Event listener for the "Previous" button

prev.addEventListener('click', function(e) {
  count--;
  id.shift(count )
  return prevConfig();
});


// Function to handle next button functionality
const nextConfig=()=>{
    switch(id.length){
      case 1:
          // Step 1: Validate input fields and move to step 2
            let input1 = document.querySelector('#input1');
            let input2 = document.querySelector('#input2');
            let input3 = document.querySelector('#input3');
            let inputs = [input1, input2, input3];
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            console.log(emailRegex.test(input2.value));
            if(input1.value === '' || input2.value === '' || input3.value === ''){
                id.pop(); 
                inputs.forEach(x=>x.style='border:1px solid red');
                
               
            } else if(emailRegex.test(input2.value) !== true && input3.value !== Number ){
                id.pop();         
                input1.style='border:1px solid green';
            }
            else if(input1.value !== '' && input2.value !=='' && input3.value !=='') {
                step1.style.display = 'none'; 
                step2.style.display = 'flex';
                document.querySelector('#one').style.backgroundColor="transparent";
                document.querySelector('#two').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
                inputs.forEach(x=>x.style='border:1 solid green');
                prev.disabled = false;
                prev.style.opacity = '1';
            }
        break;
        case 2:
          // Step 2: Move to step 3
              step2.style.display = 'none'; 
              step3.style.display = 'flex';
              document.querySelector('#two').style.backgroundColor="transparent";
              document.querySelector('#three').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
        break;
        case 3:
           // Step 3: Move to step 4
              step3.style.display = 'none'; 
              step4.style.display = 'flex';
              document.querySelector('#three').style.backgroundColor="transparent";
              document.querySelector('#four').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
        break;
        case 4:
            // Step 4: Move to step 5 and disable the "Next" button
              // subForms(); // sub forms
              step4.style.display = 'none'; 
              step5.style.display = 'flex';
              document.querySelector('#four').style.backgroundColor="transparent";
              next.disabled = true;
              next.style.display = 'none';
              document.querySelector('#sub').style.display = 'flex';
              next.style.opacity = '0.4';
        break;
    }
}

// Function to handle previous button functionality
const prevConfig=()=>{
    switch(id.length){
        case 0:
            // Step 0: Move back to step 1 and disable the "Previous" button
            step1.style.display = 'flex'; 
            step2.style.display = 'none'; 
            document.querySelector('#one').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";;
            document.querySelector('#two').style.backgroundColor="transparent";
            prev.disabled = true;
            prev.style.opacity = '0.4';
        break;   
        case 1:
            // Step 1: Move back to step 2
            step2.style.display = 'flex'; 
            step3.style.display = 'none'; 
            document.querySelector('#two').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";;
            document.querySelector('#three').style.backgroundColor="transparent";
        break;   
        case 2:
            // Step 2: Move back to step 3
            step3.style.display = 'flex'; 
            step4.style.display = 'none'; 
            document.querySelector('#three').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";;
            document.querySelector('#four').style.backgroundColor="transparent";
        break;   
        case 3:
            // Step 3: Move back to step 4 and enable the "Next" button
            step4.style.display = 'flex'; 
            step5.style.display = 'none'; 
            document.querySelector('#four').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
            next.disabled = false;
            next.style.opacity = '1';
        break;   
    }
}



// Initialize button elements and toggle functionality
let on = document.querySelector('#toggle_2');
let off = document.querySelector('#toggle_1');
let toggle = document.querySelector('#toggle');
let toggleId = 1;

// Function to toggle between monthly and yearly subscription plans
let toggleOnOff = (on,off)=>{
  if(toggleId==1){
    toggleId = 0;
 return    on;
}else if(toggleId==0){
  toggleId = 1;
    return off;
}
}

// Event listener for the toggle button
toggle.addEventListener('click',function(){
if(toggleId==1){
    toggleOn();
    toggleId = 0;
}else if(toggleId==0){
    toggleOff();
    toggleId = 1;
}
//function to select and keep track of plans and subscriptions
planObject.selectPlan();
// function to select multiple checkbox of add-ons and keep track of subscriptions
planObject.addOns();
});
let monthlySub =    
`
<div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
<img src="assets/images/icon-arcade.svg" alt="" class="sm:w-10 sm:pb-5">
<div>
  <p class="text-[1.4em] font-bold" id="plan">Arcade</p>
  <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$9/mo</p>
</div>
</div>


<div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
<img src="assets/images/icon-advanced.svg" alt="" class="sm:w-10 sm:pb-5">
<div>
  <p class="text-[1.4em] font-bold" id="plan">Advanced</p>
  <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$12/mo</p>
</div> 
</div>


<div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
<img src="assets/images/icon-pro.svg" alt="" class="sm:w-10 sm:pb-5">
<div>
  <p class="text-[1.4em] font-bold" id="plan">Pro</p>
  <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$15/mo</p>
</div>
</div>

`

 document.querySelector('#subs').innerHTML = monthlySub;

 let monthlyAddOns = 
 `
 <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-gray-400 items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="service">Online service</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Access to multiplayer games</p>
    </div>
    <span><p class="text-blue-800" id="$1/mo">+$1/mo</p></span>
  </div>

  <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-gray-400 items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="service"> Larger storage</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Extra 1TB of cloud save</p>
    </div>
    <span><p class="text-blue-800" id="$2/mo">+$2/mo</p></span>
  </div>

  <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-gray-400 items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="service">Customizable Profile</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Custom theme on your profile</p>
    </div>
    <span><p class="text-blue-800" id="$3/mo">+$2/mo</p></span>
  </div>
 `
 document.querySelector('#contents').innerHTML= monthlyAddOns;

// Function to toggle to yearly subscription plans
const toggleOn=()=>{
    // Update the HTML and change styles for yearly plans
    off.style.display = 'none';
    on.style.display = 'flex';

    document.querySelector('#yearly').style = 'font-weight:800; color: #004E64'
    document.querySelector('#monthly').style = 'font-weight:200; color: #45503B';
    document.querySelector('#subs').innerHTML = 
    `
        <div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
        <img src="assets/images/icon-arcade.svg" alt="" class="sm:w-10 sm:pb-5">
        <div>
        <p class="text-[1.4em] font-bold" id="plan">Arcade</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$90/yr</p>
      <p id="month1" class="sm:text-[1.1em]">2 months free</p>
    </div>
  </div>
  
  
   <div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
    <img src="assets/images/icon-advanced.svg" alt="" class="sm:w-10 sm:pb-5">
    <div>
      <p class="text-[1.4em] font-bold" id="plan">Advanced</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$120/yr</p>
      <p id="month2" class="sm:text-[1.1em]">2 months free</p>
    </div> 
  </div>
  
  
   <div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
    <img src="assets/images/icon-pro.svg" alt="" class="sm:w-10 sm:pb-5">
    <div>
      <p class="text-[1.4em] font-bold" id="plan">Pro</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$150/yr</p>
      <p id="month3" class="sm:text-[1.1em]">2 months free</p>
    </div>
  </div>

    `

    document.querySelector('#contents').innerHTML=

    `
    <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-black items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="service">Online service</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Access to multiplayer games</p>
    </div>
    <span><p class="text-blue-800" id="$1/mo">+$10/yr</p></span>
  </div>

  <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-black items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="service"> Larger storage</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Extra 1TB of cloud save</p>
    </div>
    <span><p class="text-blue-800" id="$2/mo">+$20/yr</p></span>
  </div>

  <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-black items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="service">Customizable Profile</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Custom theme on your profile</p>
    </div>
    <span><p class="text-blue-800" id="$3/mo">+$20/yr</p></span>
  </div>
    
    `

}
// Function to toggle back to monthly subscription plans
const toggleOff=()=>{
       // Update the HTML and change styles for monthly plans
    on.style.display = 'none';
    off.style.display = 'flex';

    document.querySelector('#monthly').style = 'font-weight:800; color: #004E64';
    document.querySelector('#yearly').style = 'font-weight:200; color: #45503B';
    document.querySelector('#subs').innerHTML = monthlySub;

document.querySelector('#contents').innerHTML= monthlyAddOns;

}


//selecting plans 

let activeAddOns = [];
let totalMoney = [];
let arr = [];

// Object for handling subscription plans and add-ons
const planObject ={
  //method for selecting subscription plan
  selectPlan(){
    //all subChild elements are assigned to the subChildren variable
    let subChildren = document.querySelectorAll('.subChild');
    //all elements in variable are looped through and given a condition
    subChildren.forEach((child)=>{
      //add event listeners to each child element
      child.addEventListener("click",()=>{
        //on click remove class name selected in element that werent clicked
        subChildren.forEach((otherchild)=>{otherchild.classList.remove("selected")});
        //add class name selected to clicked element
        child.classList.add("selected");
        //variable to store last clicked element
  let activeChild;
  //variable to store all clicked elements
  const tracking = [];
  //push every element that includes the selected class name to tracking array
  subChildren.forEach((active)=>{active.classList.contains("selected")?tracking.push(active): false});
  //assign last element in tracking array to active Child
  activeChild = tracking.pop();
  let fin = '';
  //assign fin to the innerText property of activeChild
  fin = activeChild.innerText;
  //trim fin to get rid of non existing data
  let clean = fin.split(' ').map(x=>x.replace(/\n/g,' ')).join('').split(' ');
  let planChild = clean[0];
  let moChild = clean[2];
  arr.push(moChild);
  totalMoney.push(arr);
  let dynamic = 
  `
  <div>
    <p class="text-[1.2em] font-bold" id="catalog">${planChild} (${ toggleOnOff('Monthly','Yearly')})</p>
    <p class="text-[1em] sm:text-[1.1em] opacity-40 underline cursor-pointer change">change</p>
  </div> 
  <p id="sub-0" class=" font-extrabold text-lg">${moChild}</p>
  `
  document.querySelector('.dynamic1').innerHTML = dynamic;
  document.querySelector('.change').addEventListener('click', ()=>{
    id.splice(1);
    console.log(id);
    step4.style.display = 'none';
    step2.style.display = 'flex';
    document.querySelector('#four').style.backgroundColor="transparent";
    document.querySelector('#two').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
  })
});
});
},

//method for selecting add-ons plans
addOns(){
  let subChildren = document.querySelectorAll('.check');
  //for each element in subchildren check if checkbox is selected and extract selected elements data for calculation
  subChildren.forEach((child)=>{
    let checker =  child.querySelector('input[type="checkbox"]');
      checker.checked  = false;
      let createAddOns;
      let fin = '';
      let clean;
      let service;
      let money;
      child.addEventListener('click', ()=>{
        if(checker.checked==false){
            checker.checked = true;
            activeAddOns.push(child);
            fin = activeAddOns[activeAddOns.length-1].textContent;
            clean = fin.split('').map(x=>x.replace(/\n/g,' ')).join('').split(' ').filter(x=>x!='');
            service = `${clean[0]} ${clean[1]}`;
            money = clean.pop();
            totalMoney.push(money);
            console.log(money)
            //element would be created here
            createAddOns = document.createElement('span');
            console.log(activeAddOns)
            createAddOns.innerHTML  = 
            `
            <span class="flex justify-between"><p id="service-1">${service}</p><p id="sub-1" class=" font-medium">${money}</p></span>
            `
            document.querySelector('.addSelected').appendChild( createAddOns);
            console.log(totalMoney)
          }else if(checker.checked==true){
            checker.checked=false;
            activeAddOns.splice(activeAddOns.indexOf(child), 1);   
            document.querySelector('.addSelected').removeChild( createAddOns);
            totalMoney.pop(money);
          //element would be removed here
        }
        let total = `<p> Total (per month/year)</p> <p class="text-blue-700 font-bold text-lg">$ ${calculateTotal(totalMoney)}/${ toggleOnOff('mo','yr')}</p>`;
        document.querySelector('.total').innerHTML = total; 
      })
  })
}
}
// Initialize subscription plans and add-ons
planObject.selectPlan();
planObject.addOns();
activeAddOns;


// Function to calculate the total cost
const calculateTotal = (talMon)=>{
  let first = talMon[0];//access the first element in perenthesis array
  //filters the rest of the string elements in the array 
  let last = talMon.filter(item => typeof item === "string");;
  let sum = [first[first.length-1],last];//access the last element in first array and the last variable into an array
let filtered = sum.toString().match(/\b[-+]?\d+(\.\d+)?\b/g);
// Convert the matched strings to numbers
let filteredNumbers = filtered.map(str => parseFloat(str));
//returns the sum of the matched numbers
return filteredNumbers.reduce((a,b)=>{return a+b}).toString();
}


