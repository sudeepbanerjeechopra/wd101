function checkAgeValidity() {
   const dobElement = document.getElementById("dob");
   const dobValue = dobElement.value;
   const dobDate = new Date(dobValue);
 
   const today = new Date();
   const month = dobDate.getMonth();
   const day = dobDate.getDate();
   let age = today.getFullYear() - dobDate.getFullYear();
