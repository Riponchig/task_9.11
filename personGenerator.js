const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    // **JSON с именами отцов**
    fatherNameJson: `{
        "count": 5,
        "list": {
            "id_1": "Александр",
            "id_2": "Василий",
            "id_3": "Петр",
            "id_4": "Дмитрий",
            "id_5": "Иван"
        }
    }`,
 // **JSON с профессиями**
    professionJson: `{
        "male": ["Инженер", "Шахтер", "Солдат", "Программист", "Водитель"],
        "female": ["Учитель", "Медсестра", "Бухгалтер", "Дизайнер", "Флорист"]
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender: function() {
        return this.randomIntNumber(1, 0) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function(gender) {
        return gender === this.GENDER_MALE 
            ? this.randomValue(this.firstNameMaleJson) 
            : this.randomValue(this.firstNameMaleJson) + "а"; // Условная женская версия
    },

    randomSurname: function(gender) {
        let surname = this.randomValue(this.surnameJson);
        return gender === this.GENDER_FEMALE ? surname + "а" : surname;
    },

// **Выбор отчества**
    randomPatronymic: function(gender) {
    let fatherName = this.randomValue(this.fatherNameJson); // Получаем имя отца
    
    if (fatherName.endsWith("й")) {
        fatherName = fatherName.slice(0, -1); // Убираем "й" в конце
        return gender === this.GENDER_MALE ? fatherName + "евич" : fatherName + "евна";
    } else {
        return gender === this.GENDER_MALE ? fatherName + "ович" : fatherName + "овна";
    }
},
// **Выбор профессии**
    randomProfession: function (gender) {
        const obj = JSON.parse(this.professionJson);
        const professions = gender === this.GENDER_MALE ? obj.male : obj.female;
        return professions[this.randomIntNumber(professions.length - 1, 0)];
    },
    

    randomBirthYear: function() {
        return this.randomIntNumber(2005, 1950); // Генерация года рождения от 1950 до 2005
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
    
};
