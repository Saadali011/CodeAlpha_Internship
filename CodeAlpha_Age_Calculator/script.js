function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dobDate = new Date(dobInput);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dobDate.getFullYear();

    if (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
        age--;
    }
    document.getElementById('result').innerHTML = "Your age is: " + age + " years";
}