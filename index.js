
let next = document.querySelector('#btn_2');
let prev = document.querySelector('#btn_1');
let step1 = document.querySelector('#step_1');
let step2 = document.querySelector('#step_2');
let step3 = document.querySelector('#step_3');
let step4 = document.querySelector('#step_4');
let step5 = document.querySelector('#step_5');

let id = [];
let count = 0;
//next button event listener
next.addEventListener('click', function(e) {
    e.preventDefault();
    count++;
    id.push(count);
    return nextConfig();
});


//prev button event listener
prev.addEventListener('click', function(e) {
    count--;
    id.shift(count )
    return prevConfig();
});
//next and previous button functionality 
const nextConfig=()=>{
    // let nextInstance = document.querySelector('#btn2');

    switch(id.length){
        case 1:
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
              step2.style.display = 'none'; 
              step3.style.display = 'flex';
              document.querySelector('#two').style.backgroundColor="transparent";
              document.querySelector('#three').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
        break;
        case 3:
              step3.style.display = 'none'; 
              step4.style.display = 'flex';
              document.querySelector('#three').style.backgroundColor="transparent";
              document.querySelector('#four').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
        break;
        case 4:
              step4.style.display = 'none'; 
              step5.style.display = 'flex';
              document.querySelector('#four').style.backgroundColor="transparent";
              next.disabled = true;
              next.style.opacity = '0.4';
        break;
    }

  
}
const prevConfig=()=>{
    switch(id.length){
        case 0:
            step1.style.display = 'flex'; 
            step2.style.display = 'none'; 
            document.querySelector('#one').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";;
            document.querySelector('#two').style.backgroundColor="transparent";
            prev.disabled = true;
            prev.style.opacity = '0.4';
        break;   
        case 1:
            step2.style.display = 'flex'; 
            step3.style.display = 'none'; 
            document.querySelector('#two').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";;
            document.querySelector('#three').style.backgroundColor="transparent";
        break;   
        case 2:
            step3.style.display = 'flex'; 
            step4.style.display = 'none'; 
            document.querySelector('#three').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";;
            document.querySelector('#four').style.backgroundColor="transparent";

        break;   
        case 3:
            step4.style.display = 'flex'; 
            step5.style.display = 'none'; 
            document.querySelector('#four').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
            next.disabled = false;
            next.style.opacity = '1';
        break;   
    }
}

//toggle button functionality 
//initialize button
let on = document.querySelector('#toggle_2');
let off = document.querySelector('#toggle_1');
let toggle = document.querySelector('#toggle');
let toggleId = 1;

let toggleOnOff = (on,off)=>{
  if(toggleId==1){
    toggleId = 0;
 return    on;
}else if(toggleId==0){
  toggleId = 1;
    return off;
}
}

//toggle function 
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
<img src="/dist/assets/images/icon-arcade.svg" alt="" class="sm:w-10 sm:pb-5">
<div>
  <p class="text-[1.4em] font-bold" id="plan">Arcade</p>
  <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$9/mo</p>
</div>
</div>


<div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
<img src="/dist/assets/images/icon-advanced.svg" alt="" class="sm:w-10 sm:pb-5">
<div>
  <p class="text-[1.4em] font-bold" id="plan">Advanced</p>
  <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$12/mo</p>
</div> 
</div>


<div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
<img src="/dist/assets/images/icon-pro.svg" alt="" class="sm:w-10 sm:pb-5">
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
      <p class="text-[1.2em] font-bold" id="online">Online service</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Access to multiplayer games</p>
    </div>
    <span><p class="text-blue-800" id="$1/mo">+$1/mo</p></span>
  </div>

  <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-gray-400 items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="storage"> Larger storage</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Extra 1TB of cloud save</p>
    </div>
    <span><p class="text-blue-800" id="$2/mo">+$2/mo</p></span>
  </div>

  <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-gray-400 items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="profile">Customizable Profile</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Custom theme on your profile</p>
    </div>
    <span><p class="text-blue-800" id="$3/mo">+$2/mo</p></span>
  </div>
 `
 document.querySelector('#contents').innerHTML= monthlyAddOns;
const toggleOn=()=>{
    off.style.display = 'none';
    on.style.display = 'flex';

    document.querySelector('#yearly').style = 'font-weight:800; color: #004E64'
    document.querySelector('#monthly').style = 'font-weight:200; color: #45503B';
    document.querySelector('#subs').innerHTML = 
    `
        <div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
        <img src="/dist/assets/images/icon-arcade.svg" alt="" class="sm:w-10 sm:pb-5">
        <div>
        <p class="text-[1.4em] font-bold" id="plan">Arcade</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$90/yr</p>
      <p id="month1" class="sm:text-[1.1em]">2 months free</p>
    </div>
  </div>
  
  
   <div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
    <img src="/dist/assets/images/icon-advanced.svg" alt="" class="sm:w-10 sm:pb-5">
    <div>
      <p class="text-[1.4em] font-bold" id="plan">Advanced</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40 font-bold" id="mo">$120/yr</p>
      <p id="month2" class="sm:text-[1.1em]">2 months free</p>
    </div> 
  </div>
  
  
   <div class="flex border gap-2 p-2 rounded-md sm:flex-col sm:p-3 flex-1 subChild">
    <img src="/dist/assets/images/icon-pro.svg" alt="" class="sm:w-10 sm:pb-5">
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
      <p class="text-[1.2em] font-bold" id="online">Online service</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Access to multiplayer games</p>
    </div>
    <span><p class="text-blue-800" id="$1/mo">+$10/yr</p></span>
  </div>

  <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-black items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="storage"> Larger storage</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Extra 1TB of cloud save</p>
    </div>
    <span><p class="text-blue-800" id="$2/mo">+$20/yr</p></span>
  </div>

  <div class="flex hover:bg-blue-50 cursor-pointer rounded-md justify-between border border-black items-center p-3 check">
    <input type="checkbox"  class="bg-green-400 h-5 w-5 cursor-pointer">
    <div>
      <p class="text-[1.2em] font-bold" id="profile">Customizable Profile</p>
      <p class="text-[1em] sm:text-[1.1em] opacity-40">Custom theme on your profile</p>
    </div>
    <span><p class="text-blue-800" id="$3/mo">+$20/yr</p></span>
  </div>
    
    `

}
const toggleOff=()=>{
    on.style.display = 'none';
    off.style.display = 'flex';

    document.querySelector('#monthly').style = 'font-weight:800; color: #004E64';
    document.querySelector('#yearly').style = 'font-weight:200; color: #45503B';
    document.querySelector('#subs').innerHTML = monthlySub;

document.querySelector('#contents').innerHTML= monthlyAddOns;

}


//selecting plans 

let activeAddOns = [];
const planObject ={
  //method for subscription plan
  selectPlan(){
    let subChildren = document.querySelectorAll('.subChild');
    subChildren.forEach((child)=>{
      child.addEventListener("click",()=>{
        subChildren.forEach((otherchild)=>{otherchild.classList.remove("selected")});
        child.classList.add("selected");
  let activeChild;
  const tracking = [];
  subChildren.forEach((active)=>{active.classList.contains("selected")?tracking.push(active): false});
  activeChild = tracking.pop();
  let fin = '';
  fin = activeChild.innerText;
  let clean = fin.split(' ').map(x=>x.replace(/\n/g,' ')).join('');
  let str = clean.split(' ');
  let planChild = str[0];
  let moChild = str[2];
  
  let dynamic = 
  `
  <div class="flex justify-between items-center border-b-2 border-gray-300 gap-4 pb-3">
  <div>
    <p class="text-[1.2em] font-bold" id="catalog">${planChild} (${ toggleOnOff('Monthly','Yearly')})</p>
    <p class="text-[1em] sm:text-[1.1em] opacity-40 underline change">change</p>
  </div> 
  <p id="sub-0" class=" font-extrabold text-lg">${moChild}</p>
  </div>
  <div class="addSelected">
  <span class="flex justify-between"><p id="service-1">Online Service</p><p id="sub-1" class=" font-medium">mon</p></span>
  <span class="flex justify-between"><p id="service-2">Larger Storage</p><p id="sub-2" class=" font-medium">mon</p></span>
  </div>
  `
  document.querySelector('#dynamic').innerHTML = dynamic;
});
});
},

//method for add-ons plans
addOns(){
  let subChildren = document.querySelectorAll('.check');
  subChildren.forEach((child)=>{
    let checker =  child.querySelector('input[type="checkbox"]');
      checker.checked  = false;
      child.addEventListener('click', ()=>{
        if(checker.checked==false){
            checker.checked = true;
            activeAddOns.push(child);
            //element would be created here
        }else if(checker.checked==true){
          checker.checked=false;
          activeAddOns.splice(activeAddOns.indexOf(child), 1);   
          //element would be removed here
        }
      })
  })
}
}
planObject.selectPlan();
planObject.addOns();
activeAddOns;



  let total = 
  `
  <p> Total (per month/year)</p> <p class="text-blue-700 font-bold">+12/mo</p>`
  document.querySelector('.total').innerHTML = total;