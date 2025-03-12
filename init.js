window.onload = function () {
    document.getElementById("generateButton").addEventListener("click", function () {
        const person = personGenerator.getPerson();
        document.getElementById('surnameOutput').innerText = person.surname;
        document.getElementById('firstNameOutput').innerText = person.firstName;
        document.getElementById('genderOutput').innerText = person.gender;
        document.getElementById('birthYearOutput').innerText = person.birthYear;
    });

    document.getElementById("clearButton").addEventListener("click", function () {
        document.getElementById("surnameOutput").innerText = "Генерация фамилии";
        document.getElementById("firstNameOutput").innerText = "Генерация имени";
        document.getElementById("genderOutput").innerText = "Генерация пола";
        document.getElementById("birthYearOutput").innerText = "Генерация года рождения";

    });
};
