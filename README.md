This is a financial management app built using React. It allows the user to add income, expenses, savings, and set a target saving amount. The app calculates the remaining balance after taking into account the added income, expenses, and savings.


Development
This app was built using React and uses hooks such as useState and useEffect. The app has several components, including IncomeDisplay, ExpenseDisplay, AddDetails, AddExpenseDetails, CalculateBalance, AddSavingAccount, and AddTarget. The App component uses these components to render the UI and manage the state of the app.

Features
Add income details
Add expense details
Add saving amount details
Set a saving target amount
View income and expense details
View the remaining balance
View the total amount saved

How to Use
Add income details by filling in the income source, amount, and date fields, then click "Add".
Add expense details by filling in the expense source, amount, and date fields, then click "Add". It first checks if the expense amount is less than or equal to the current balance. If it is, it adds the expense to the expense data array using the setExpenseData function. If not, it displays an alert saying "not enough balance" and does not add the expense to the array. 
Add savings amount by filling in the saving amount and date fields, then click "Add Savings".
Set a saving target amount by entering the amount in the "Set Target" field and clicking "SET TARGET"
The code checks if the saving target is reached before allowing you to make more savings. If the total amount of savings exceeds the target or if the saving amount you want to add exceeds the target, it will display an alert message and prevent you from adding more savings. .
View income and expense details in the "IncomeAndExpenses" section.
View the remaining balance in the "Balance Left" section.
View the total amount saved in the "Amount saved" section.

### `npm test`

link to the deployed site [https://hiba-ejaz.github.io/fs15_7-budget-app/]
