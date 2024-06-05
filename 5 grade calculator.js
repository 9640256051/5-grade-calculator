// script.js

function calculateAverage() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const grade4 = parseFloat(document.getElementById('grade4').value);

    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for all grades.';
        return;
    }

    const average = (grade1 + grade2 + grade3 + grade4) / 4;
    document.getElementById('result').innerText = `Your average grade is: ${average.toFixed(2)}`;
}
