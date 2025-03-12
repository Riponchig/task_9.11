window.onload = function () {
    document.getElementById("generateButton").addEventListener("click", function () {
        const person = personGenerator.getPerson();
        document.getElementById('surnameOutput').innerText = person.surname;
        document.getElementById('firstNameOutput').innerText = person.firstName;
        document.getElementById('patronymicOutput').innerText = person.patronymic;
        document.getElementById('genderOutput').innerText = person.gender;
        document.getElementById('birthDateOutput').innerText = person.birthDate;
        document.getElementById('professionOutput').innerText = person.profession;
    });

    document.getElementById('clearButton').addEventListener("click", function () {
        document.getElementById('surnameOutput').innerText = "Генерация фамилии";
        document.getElementById('firstNameOutput').innerText = "Генерация имени";
        document.getElementById('patronymicOutput').innerText = "Генерация отчества";
        document.getElementById('genderOutput').innerText = "Генерация пола";
        document.getElementById('birthDateOutput').innerText = "Генерация даты рождения";
        document.getElementById('professionOutput').innerText = "Генерация профессии";
    });
};
