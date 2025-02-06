function calculateDays() {
    const date1 = new Date(document.getElementById("date1").value);
    const date2 = new Date(document.getElementById("date2").value);

    if (!date1 || !date2) {
        document.getElementById("result").innerText = "Please select both dates.";
        return;
    }

    const timeDifference = Math.abs(date2 - date1); 
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("result").innerText = `Days Between: ${dayDifference} days`;
}