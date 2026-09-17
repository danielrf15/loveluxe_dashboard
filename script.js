// SAMPLE TRANSACTION DATA

const transactions = [
    // Example:
    // {
    //     receipt: "R-1001",
    //     customer: "Juan Dela Cruz",
    //     amount: "₱1,500.00",
    //     status: "Completed"
    // }
];


// SAMPLE STOCK DATA

const stock = [
    // Example:
    // {
    //     item: "Lipstick",
    //     qty: 10,
    //     status: "Available"
    // }
];


// GET TABLES

const transactionsBody =
    document.getElementById("transactionsBody");

const stockBody =
    document.getElementById("stockBody");


// DISPLAY TRANSACTIONS

function displayTransactions() {

    transactionsBody.innerHTML = "";

    transactions.forEach(function(transaction) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${transaction.receipt}</td>

            <td>${transaction.customer}</td>

            <td>${transaction.amount}</td>

            <td>${transaction.status}</td>
        `;

        transactionsBody.appendChild(row);

    });
}


// DISPLAY STOCK

function displayStock() {

    stockBody.innerHTML = "";

    stock.forEach(function(product) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.item}</td>

            <td>${product.qty}</td>

            <td>${product.status}</td>
        `;

        stockBody.appendChild(row);

    });
}


// RUN FUNCTIONS

displayTransactions();

displayStock();
