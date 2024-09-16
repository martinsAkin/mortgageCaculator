function mortgageCalculator(){
 const principal = parseFloat(document.getElementById('amount').value);
 const year = parseInt(document.getElementById('years').value);
 const rate = parseFloat(document.getElementById('rate').value);

 let monthlyRate = ((rate)/100)/12;
 let TotalMonths = (year * 12);
 let sumCalc = Math.pow(1 + monthlyRate, TotalMonths);

 let repayAmount = (principal * ((monthlyRate)* (sumCalc))/ (sumCalc - 1));

 document.getElementById('monthly-repay').textContent = "$" + repayAmount.toFixed(3);

 alert("you are to repay " + repayAmount.toFixed(2));
 document.getElementById('information').style.display = "none";
 document.getElementById('FinalResult').style.display = "block";

let totalPayement = (repayAmount * TotalMonths);
 document.getElementById('total-repay').textContent = '$ '+ totalPayement.toFixed(2)

 let interest = totalPayement - principal;
 alert(`the total interest in ${year} years is ${interest.toFixed(2)}`)
}
