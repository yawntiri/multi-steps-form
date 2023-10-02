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
    console.log(id);
    return nextConfig();
});


//prev button event listener
prev.addEventListener('click', function(e) {
    count--;
    id.shift(count )
    console.log(id);
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
                
                if(emailRegex.test(input2.value) !== true && input3.value !== Number ){
                    id.pop();         
                }
            }else if(input1.value !== '' && input2.value !=='' && input3.value !=='') {
                console.log('maybe')
                step1.style.display = 'none'; 
                step2.style.display = 'flex';
                document.querySelector('#one').style.backgroundColor="transparent";
                document.querySelector('#two').style.backgroundColor="rgb(147 197 253 / var(--tw-bg-opacity))";
                inputs.forEach(x=>x.style='border: 1px transparent');
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

toggle.addEventListener('click',function(){
if(toggleId==1){
    toggleOn();
    toggleId = 0;
}else if(toggleId==0){
    toggleOff();
    toggleId = 1;
}
});
const toggleOn=()=>{
    off.style.display = 'none';
    on.style.display = 'flex';
    document.querySelector('#mo1').innerHTML='$9/yr';
    document.querySelector('#mo2').innerHTML='$120/yr';
    document.querySelector('#mo3').innerHTML='$150/yr';
    document.querySelector('#month1').innerHTML='2 months free';
    document.querySelector('#month2').innerHTML='2 months free';
    document.querySelector('#month3').innerHTML='2 months free';
}
const toggleOff=()=>{
    on.style.display = 'none';
    off.style.display = 'flex';
    document.querySelector('#mo1').innerHTML='$9/mo';
    document.querySelector('#mo2').innerHTML='$12/mo';
    document.querySelector('#mo3').innerHTML='$15/mo';
    document.querySelector('#month1').innerHTML='';
    document.querySelector('#month2').innerHTML='';
    document.querySelector('#month3').innerHTML='';
}
