const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener("click", function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat((document.getElementById("software").value));
    const courses = parseFloat((document.getElementById("courses").value));
    const internet = parseFloat((document.getElementById("internet").value));
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const totalexpensesElement = document.getElementById("total-expenses")
    totalexpensesElement.innerText = totalExpenses.toFixed(2);
    const balanceElement = document.getElementById("balance")
    balanceElement.innerText = balance.toFixed(2);
    const results = document.getElementById("results");
    results.classList.remove("hidden")
})

const calculateSavingsButton = document.getElementById("calculate-savings")
calculateSavingsButton.addEventListener("click", function () {
    const savingsPercentage = parseFloat(document.getElementById("savings").value);
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat((document.getElementById("software").value));
    const courses = parseFloat((document.getElementById("courses").value));
    const internet = parseFloat((document.getElementById("internet").value));
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const savingsAmout = document.getElementById("savings-amount");
    const savings = (balance * savingsPercentage) / 100
    savingsAmout.innerText = savings;
    const remainingBalaceElement = document.getElementById("remaining-balance");
    const remainingBalance = balance - savings ;
    remainingBalaceElement.innerText=remainingBalance




})