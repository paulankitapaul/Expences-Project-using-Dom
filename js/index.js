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


    // history
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
    historyItem.innerHTML = `
    <p class =" p-3 text-xs text-gray-500">${new Date()}</p>
    <p class =" p-3 text-xs text-gray-500">${balance.toFixed(2)}</p>
    <p class =" p-3 text-xs text-gray-500">${totalExpenses.toFixed(2)}</p>
    `
    const historyContainer = document.getElementById("history-list")
    historyContainer.appendChild(historyItem)
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
    const remainingBalance = balance - savings;
    remainingBalaceElement.innerText = remainingBalance;




})

// history button implementation
const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function () {
    historyTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantTab.classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    document.getElementById("expense-form").classList.add('hidden');
    document.getElementById("history-section").classList.remove('hidden')

})