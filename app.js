const dateOfBirth = document.querySelector('#dob-input');
const luckyNum = document.querySelector('#luckynum-input');
const checkBtn = document.querySelector('#check-btn');
const output = document.querySelector('#output-value');

function checkTheLuck() {
   const dob = dateOfBirth.value;
   const finalVal = calculateSum(dob);
   const luckyNumber = luckyNum.value;
   if(dob && luckyNumber){
      compareVals(finalVal, luckyNumber);
   } else{
      output.innerText = 'Please enter both inputs!'
   }
}


function compareVals(dob, luckyNum){
   if(dob%luckyNum === 0){
      output.innerText = 'You are lucky!';
   }
   else{
      output.innerText = 'You are not lucky';
   }
}

function calculateSum(dob) {
   let dobAsArr = dob.split('');//converts string to array

   let dobAsNum = dobAsArr.map(Number);//converts array elements to int

   const dobInDigits = dobAsNum.filter(d => {
      return !isNaN(d); //returns an array which consists only numbers
   });

   let sum = 0;
   for(let i = 0; i < dobInDigits.length; i++){
      sum = sum + dobInDigits[i];
   }
   return sum;
}

checkBtn.addEventListener('click', checkTheLuck);
