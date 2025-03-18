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
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Артемида",
            "id_5": "Дина",
            "id_6": "Николь",
            "id_7": "Мишель",
            "id_8": "Даная",
            "id_9": "Ефросия",
            "id_10": "Анна"
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
        let firstName = '';
        if (gender === this.GENDER_FEMALE) {
            firstName = this.randomValue(this.firstNameFemaleJson);
        }
        else {
            firstName = this.randomValue(this.firstNameMaleJson); 
        }
        return firstName; 
    },

    randomSurname: function(gender) {
        let surname = this.randomValue(this.surnameJson);
        return gender === this.GENDER_FEMALE ? surname + "а" : surname;
    },

// **Выбор отчества**
    randomPatronymic: function(gender) {
    let fatherName = this.randomValue(this.firstNameMaleJson); // Получаем имя отца
    
    // особый случай
    const specialCases = {
        "Никита": { male: "Никитович", female: "Никитовна" }
    };

    if (specialCases[fatherName]) {
        return gender === this.GENDER_MALE ? specialCases[fatherName].male : specialCases[fatherName].female;
    }
    //Если имя заканчивается на "й" меняем окончание на евич и евна
    if (fatherName.endsWith("й")) {
        return gender === this.GENDER_MALE 
            ? fatherName.slice(0, -1) + "евич" 
            : fatherName.slice(0, -1) + "евна";
    }

    // Для остальных случаев просто добавляем ович и овна
    return gender === this.GENDER_MALE ? fatherName + "ович" : fatherName + "овна";
},
// **Выбор профессии**
    randomProfession: function (gender) {
        const obj = JSON.parse(this.professionJson);
        const professions = gender === this.GENDER_MALE ? obj.male : obj.female;
        return professions[this.randomIntNumber(professions.length - 1, 0)];
    },
    

    randomBirthDate: function() {
        const months = {
            "января": 31, 
            "февраля": 28, 
            "марта": 31, 
            "апреля": 30,
            "мая": 31, 
            "июня": 30, 
            "июля": 31, 
            "августа": 31,
            "сентября": 30, 
            "октября": 31, 
            "ноября": 30,
             "декабря": 31
        };
    
        let monthNames = Object.keys(months); 
        let month = monthNames[this.randomIntNumber(monthNames.length - 1, 0)]; 
        let day = this.randomIntNumber(months[month], 1); 
        let year = this.randomIntNumber(2007, 1950); 
    
        return `${day} ${month}, ${year}`;
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.birthDate = this.randomBirthDate();
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
    
};
