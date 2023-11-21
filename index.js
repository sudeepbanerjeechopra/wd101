function checkAgeValidity() {
   const dobElement = document.getElementById("dob");
   const dobValue = dobElement.value;
   const dobDate = new Date(dobValue);
 
   const today = new Date();
   const month = dobDate.getMonth();
   const day = dobDate.getDate();
   let age = today.getFullYear() - dobDate.getFullYear();

   let checkmonth = today.getMonth() < month
   let checkday = today.getMonth() === month && today.getDate() < day;
    
 
   if (checkmonth || checkday) {
     age--;
   }
 
   const isValidAge = age > 18 && age < 55;
 
   if (!isValidAge) {
     dobElement.setCustomValidity("The age should be between 18 and 55 years");
     dobElement.reportValidity();
   } else {
     dobElement.setCustomValidity("");
   }
 }
