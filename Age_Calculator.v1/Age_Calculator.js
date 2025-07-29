function getData() {
  let dateValue = document.getElementById("date").value;
  // Cria um objeto Date com a data selecionada no HTML
  let date = new Date(dateValue);
  let day = date.getDate();
  let month = date.getMonth() +1 ;
  let year = date.getFullYear();

  // Cria um objecto Date com a data que é atm *by being empty is today*
  let tDate = new Date();
  let tDay = tDate.getDate();
  let tMonth = tDate.getMonth() +1 ;
  let tYear = tDate.getFullYear();



  // IN PROGRESS
  let age = tYear - year;
  if (tMonth < month || (tMonth === month && tDay < day)) {
    age--;
  }

  // Muda o Age no Website atraves do HTML
  // document.getElementById("age").innerHTML = "Age is: " + age;
  
  if (isNaN(date)) {
   if(isNaN(day)){
    alert("INVALID: Check the date you selected again");
    document.getElementById("age").innerHTML = "INVALID: Check the day you selected again";
   }
  } else {
    document.getElementById("age").innerHTML = "Age is: " + age;
  }
}
// function adaptiveMaxYear() ITS IN HTML SCRIP SO IT RUNS FIRST on callender only!
 