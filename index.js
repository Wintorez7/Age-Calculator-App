let DobInput = document.getElementById("date");
let calculateBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

calculateBtn.addEventListener("click",function(){

    const dob = new Date(DobInput.value);
    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    result.innerHTML = `Your Age is ${age} Years.`;

})

