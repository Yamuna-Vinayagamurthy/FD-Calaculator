function calculateMaturityAmount(){
    //get inputes  values 
    const principle = parseFloat(document.getElementById('principle').value);
    const intrestRate = parseFloat(document.getElementById('intrestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //perform the calculation

    const maturityAmount = principle + (principle * intrestRate *tenure)/100;

    //display result 

    document.getElementById('result').innerText= `Maturity Amount : ${maturityAmount.toFixed(2)}`;

}
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);1