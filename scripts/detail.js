function calculate(adults, from_date, to_date) {
    var to = new Date(to_date.value);
    var from = new Date(from_date.value);
    var days = to.getDate() - from.getDate();
    if (days > 0) {
        let amount = adults.value * days * 1000;
        document.getElementById("price").value = "Rs. "+amount;
    }
}