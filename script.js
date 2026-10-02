let number = Number(prompt("Enter number to calculate the Factorial :"))
if (!isNaN(number)) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    alert(result);

} else {
    alert(" Enter a number please!")
}