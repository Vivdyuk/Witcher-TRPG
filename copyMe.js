/*
*   Просто скопіюй цей файл у відкритий едітор АппСкрипт на твому спредщиті.
*   ВАЖЛИВО! Цей скрипт ніяк не взаємодіє з файлами на вашому компʼютері і ніяким чином не опрацьовує особисту
*   інформацію.
*   Він лише полегшує створення персонажа і працює лише зі спредшитом, який ви створили на Ґуґл диску.
*
*   П.с: цей файл - просто збір всіх файлів у один.
*   Користуйтесь на здоровʼя!
*   GL HF!
*/

class Item {
    constructor(name, weight, price, notes = '') {
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.notes = notes;
    }
}

class Alchemy extends Item {
    constructor(name, notes, weight, price) {
        super(name, notes, weight, price);
    }
}

class Ammo extends Item {
    constructor(name, type, rarity, durability, effect, stealth, weight, price) {
        super(name, weight, price, effect)
        this.type = type;
        this.rarity = rarity;
        this.durability = durability;
        this.stealth = stealth;
    }
}

class Armor extends Item{
    constructor(name, durability, rarity, buff, effects, movesModifier, weight, price) {
        super(name, price, weight);
        this.durability= durability;
        this.rarity = rarity;
        this.buff = buff;
        this.effects = effects;
        this.movesModifier = movesModifier;
    }
}

class Component extends Item {
  constructor(name, weight, price) {
    super(name, weight, price);
  }
}

class Shield extends Armor {
    constructor(name, durability, rarity, buff, effects, movesModifier, weight, price) {
        super(name, durability, rarity, buff, effects, movesModifier, weight, price);
    }
}

class Tools extends Item {
    constructor(name, effect, rarity, stealth, weight, price) {
        super(name, price, weight, effect);
        this.rarity = rarity;
        this.stealth = stealth;
    }
}

class Vehicle extends Item {
    constructor(name,athletePlusAgility, sensitivityModifier, speed, hp,weight,price ) {
        super(name, price, weight);
        this.athletePlusAgility = athletePlusAgility;
        this.sensitivityModifier = sensitivityModifier;
        this.speed = speed;
        this.hp = hp;
    }
}

class Weapon extends Item {
    constructor(name, type, rarity, accuracy, damage, durability, hands, distance, effects, stealth, buff, weight, price) {
        super(name, weight, price);
        this.type = type;
        this.rarity = rarity;
        this.accuracy = accuracy;
        this.damage = damage;
        this.durability = durability;
        this.hands = hands;
        this.distance = distance;
        this.effects = effects;
        this.stealth = stealth;
        this.buff = buff;
    }
}

const professions = {
    'Бандит': {
        energy: 0,
        inventory: [
        ],
        learnedSkills: [
            'Спритність рук',
            'Злам замків',
            'Орієнтування в місті',
            'Підробка',
            'Обман',
            'Переховування',
            'Залякування',
            'Володіння кинжалом',
            'Атлетика',
            'Увага'
        ],
    },
    'Бард': {
        energy: 5,
        inventory: [

        ],
        learnedSkills: [
            'Обман',
            'Харизма',
            'Публічний виступ',
            'Розуміння людей',
            'Переконання',
            'Орієнтування в місті',
            'Мистецтво',
            'Зваблення',
            'Етикет'
        ],
        notes: 'Не забудьте обрати одну мову',
    },
    'Відьмак': {
        energy: 2,
        inventory: [],
        inventory: [
        ],
        notes: '',
    },
    'Воїн': {
        energy: 0,
        inventory: [

        ],
        learnedSkills: [
            'Виживання в д.п',
            'Хоробрість',
            'Сила',
            'Залякування',
            'Ухилення/Вертлявість'
        ],
        notes: 'Не забудьте обрати 5 бойових навичок',
    },
    'Жрець': {
        energy: 2,
        inventory: [

        ],
        learnedSkills: [
            'Проведення ритуалів',
            'Лідерство',
            'Хоробрість',
            'Розуміння людей',
            'Накладення проклять',
            'Перша допомога',
            'Харизма',
            'Виживання в д.п',
            'Передача знання',
            'Накладення заклять'
        ],
        notes: '',
    },
    'Лікар': {
        energy: 0,
        inventory: [

        ],
        learnedSkills: [
            'Супротив запевненню',
            'Харизма',
            'Етикет',
            'Розуміння людей',
            'Виживання в д.п',
            'Торгівля',
            'Дедукція',
            'Володіння кинжалом',
            'Алхімія',
            'Хоробрість'
        ],
        notes: '',
    },

    'Маг': {
        energy: 5,
        inventory: [

        ],
        learnedSkills: [
            'Розуміння людей',
            'Накладення заклять',
            'Накладення проклять',
            'Супротив магії',
            'Древкове',
            'Освіта',
            'Проведення ритуалів',
            'Етикет',
            'Зваблення',
            'Зовнішній вигляд'
        ],
        notes: '',
    },
    'Ремісник': {
        energy: 0,
        inventory: [

        ],
        learnedSkills: [
            'Виготовлення',
            'Торгівля',
            'Атлетика',
            'Стійкість',
            'Сила',
            'Орієнтування в місті',
            'Мистецтво',
            'Алхімія',
            'Освіта',
            'Переконання'
        ],
        notes: '',
    },
    'Торгаш': {
        energy: 0,
        inventory: [

        ],
        learnedSkills: [
            'Харизма',
            'Володіння кинжалом',
            'Освіта',
            'Орієнтування в місті',
            'Торгівля',
            'Переконання',
            'Розуміння людей',
            'Азартні ігри',
            'Супротив запевненню'
        ],
        notes: 'Не забудьте обрати дві мови'
    }
}

const mainVariables = {
    raceRange: 'C3:J3',
    professionRange: 'D7:J8',
    energyRange: 'BG2'
}

const skills = {
    'Боротьба': 'B41:D41',
    'Ухилення/Вертлявість': 'B42:D42',
    'Володіння мечем': 'B43:D43',
    'Верхова їзда': 'B44:D44',
    'Морехідство': 'B45:D45',
    'Володіння кинжалом': 'B46:D46',
    'Древкове': 'B47:D47',
    'Ближній бій': 'B48:D48',
    'Увага': 'B26:D26',
    'Торгівля': 'B27:D27',
    'Дедукція': 'B28:D28',
    'Освіта': 'B29:D29',
    'Загальна': 'B30:D30',
    'Старша Мова': 'B31:D31',
    'Червонолюдська': 'B32:D32',
    'Монстрологія': 'B33:D33',
    'Етикет': 'B34:D34',
    'Орієнтування в місті': 'B35:D35',
    'Тактика': 'B36:D36',
    'Передача знання': 'B37:D37',
    'Виживання в д.п': 'B38:D38',
    'Стрільба з луку': 'I26:K26',
    'Атлетика': 'I27:K27',
    'Стрільба з арбалета': 'I28:K28',
    'Спритність рук': 'I29:K29',
    'Переховування': 'I30:K30',
    'Сила': 'I33:K33',
    'Стійкість': 'I34:K34',
    'Харизма': 'I37:K37',
    'Обман': 'I38:K38',
    'Мистецтво': 'I39:K39',
    'Азартні ігри': 'I40:K40',
    'Зовнішній вигляд': 'I41:K41',
    'Розуміння людей': 'I42:K42',
    'Лідерство': 'I43:K43',
    'Переконання': 'I44:K44',
    'Публічний виступ': 'I45:K45',
    'Зваблення': 'I46:K46',
    'Алхімія': 'O26',
    'Злам замків': 'O27',
    'Знання пасток': 'O28',
    'Виготовлення': 'O29',
    'Маскування': 'O30',
    'Перша допомога': 'O31',
    'Підробка': 'O32',
    'Хоробрість': 'O35',
    'Накладення проклять': 'O36',
    'Залякування': 'O37',
    'Накладення заклять': 'O38',
    'Супротив магії': 'O39',
    'Супротив запевненню': 'O40',
    'Проведення ритуалів': 'O41',
}


function getAllItems() {
    return {
        /** Weapons */
        'Залізний півторашний меч': new Weapon('Залізний півторашний меч', 'Р/К', 'З', 0, '2d6 + 2', 10, 2, '-', '', 'К', 0, 1.5, 160),
        'Кинжал': new Weapon('Кинжал', 'Р/К', 'З', 0, '1d6 + 2', 10, 1, '-', '', 'Н', 0, 0.5, 50),
        'Посох': new Weapon('Посох', 'Д', 'Зв', 0, '1d6 + 2', 10, 2, '-', 'Довге, фокусуюче(1)', 'H/C', 1, 3, 335),
        'Спис': new Weapon('Спис', 'K/Д', 'З', 0, '3d6', 10, 2, 'Тіло * 2 м', 'Довге', 'H/C', 1, 3.5, 375),
        'Булава': new Weapon('Булава', 'Д', 'Зв', 0, '5d6', 15, 1, '-', '', 'K', 0, 2, 525),
        'Арбалет': new Weapon('Арбалет', 'K', 'У', 1, '4d6 + 2', 5, 2, '100 м', 'Повільна перезарядка', 'H/C', 1, 3, 455),
        'Стилет': new Weapon('Стилет', 'P/K', 'З', 2, '1d6', 5, 1, '-', 'Непомітне', 'M', 1, 0.5, 275),
        'Кастет': new Weapon('Кастет', 'Д', 'З', 1, '1d6', 15, 1, '-', 'Рукопашка', 'M', 1, 0.5, 50),
        'Метальні ножі': new Weapon('Метальні ножі', 'K', 'З', 0, '1d6', 5, 1, 'ТІЛО х 4 м', '', 'M', 0, 0.5, 50),
        'Сталевий відьмачий меч': new Weapon('Сталевий відьмачий меч', 'K/P', 'У', 0, '4d6 + 2', 15, 1, '-', 'Пробиває броню, метеоритне', 'Н/С', 2, 2.5, 0),
        'Срібний відьмачий меч': new Weapon('Срібний відьмачий меч', 'K/P', 'У', 0, '1d6 + 2', 10, 1, '-', 'Срібне (3d6)', 'Н/С', 2, 12.5, 0),
        'Арбалетні болти(X10)': new Ammo('Арбалетні болти', 'К', 'З', 10, '', 'K', 0.3, 10),


        /** Shields */
        'Сталевий баклер': new Shield('Сталевий баклер', 6, 'Зв', 0, '', 0, 1, 1, 150),

        /** Armor */
        'Кольчужний капюшон': new Armor('Кольчужний капюшон', 12, 'З', 0, '', 0, 1.5, 250),
        'Бригантина': new Armor('Бригантина', 12, 'Зв', 0, '', 1, 7, 300),

        /** Vehicles */
        'Кінь': new Vehicle('Кінь', 11, 2, 12, 40, 100, 520),
        'Мул': new Vehicle('Мул', 7, 0, 9, 45, 150, 200),
        'Повозка': new Vehicle('Повозка', 0, 0, 'Тварини -1', 30, 300, 200),

        /** Tools */
        'Грабіжницькі інструменти': new Tools('Грабіжницькі інструменти', 'Дозволяють відкривати замки', 'P', 'M', 1, 80),
        'Інструменти алхіміка': new Tools('Інструменти алхіміка', 'Дозволяють створювати алхімічні сполуки', 'P', 'K', 3, 80),
        'Хірургічні інструменти': new Tools('Хірургічні інструменти', 'Дозволяють проводити хірургічні операції', 'Зв', 'H', 1, 80),
        'Інструменти торговця': new Tools('Інструменти торговця', '+2 до Торгівлі при оцінці товару', 'Зв', 'Н', 1.5, 60),
        'Інструменти ремісника': new Tools('Інструменти ремісника', 'Дозволяють створювати зброю та броню', 'Зв', 'К', 5, 83),
        'Набір для макіяжу': new Tools('Набір для макіяжу', '+2 до Зваблення і Харизми', 'З', 'M', 0.5, 35),
        'Похідна кузня': new Tools('Похідна кузня', 'Дозволяє створбвати зброю і броню будь-де', 'P', 'K', 5, 111),
        'Письмовий інвентар': new Tools('Письмовий інвентар', 'Дозволяє писати письма, записки тощо', 'З', 'H', 1, 25),

        /** Alchemy */
        'Хлороформ': new Alchemy('Хлороформ', 'див. вкладку "Алхімія"', 0.1, 36),
        'Кровозгортний порошок': new Alchemy('Кровозгортний порошок', 'див. вкладку "Алхімія"', 0.1, 20),
        'Знезаражуюча рідина': new Alchemy('Знезаражуюча рідина', 'див. вкладку "Алхімія"', 0.1, 22),
        'Знебольнювальні трави': new Alchemy('Знебольнювальні трави', 'див. вкладку "Алхімія"', 0.1, 12),

        /** Items */
        'Шулерські дайси': new Item('Шулерські дайси', 0.1, 12),
        'Ліхтар "Биче Око"': new Item('Ліхтар "Биче Око"', 1, 39),
        'Потаємна кишенька': new Item('Потаємна кишенька', 0.1, 11),
        'Наручні піхви': new Item('Наручні піхви', 0.1, 13),
        'Піхви на стегна': new Item('Піхви на стегна', 0.1, 11),
        'Колода для Ґвинта': new Item('Колода для Ґвинта', 0.1, 5),
        'Наплічна сумка': new Item('Наплічна сумка', 1, 14),
        'Кишенькове дзеркальце': new Item('Кишенькове дзеркальце', 0.5, 27),
        'Музичний інструмент': new Item('Музичний інструмент', 1, 38),
        'Парфюм': new Item('Парфюм', 0.1, 22),
        'Священний символ': new Item('Священний символ', 0.1, 14),
        'Щоденник': new Item('Щоденник', 0.5, 8),
        'Свічка(5шт)': new Item('Свічка(5шт)', 0.5, 5),
        'Пісочний годинник(година)': new Item('Пісочний годинник(година)', 1, 38),
        'Велика палатка': new Item('Велика палатка', 8, 36),
        'Невелика скриня': new Item('Невелика скриня', 1, 18),
        'Замок': new Item('Замок', 0.1, 34),
        'Дошка для покера на дайсах': new Item('Дошка для покера на дайсах', 0, 0, 'NO INFO'),
        'Фляга з пійлом': new Item('Фляга з пійлом', 0, 0, 'NO INFO'),
        'Поясна сумка': new Item('Поясна сумка', 0.1, 7),
        'Щоденник із замком': new Item('Щоденник із замком', 0, 0, 'NO INFO'),
        'Формула еліксиру': new Item('Формула еліксиру', 0, 0, 'NO INFO'),
        'Формула відвару': new Item('', 0, 0, 'NO INFO'),
        'Корд': new Item('Корд', 0, 0, 'NO INFO'),
        'Ковдра': new Item('Ковдра', 0, 0, 'NO INFO'),
        '': new Item('', 0, 0, 'ЦЬОГО ТУТ НЕ МАЄ БУТИ'),
    }
}

function myFunction() {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const mainSheet = doc.getSheetByName("Main");

    if (!mainSheet) {
        throw new Error('Де головний шит, довбень?!');
    }

    const allItems = getAllItems();
    const { raceRange, professionRange } = mainVariables;
    const raceValue = mainSheet.getRange(raceRange).getValue();
    const professionValue = mainSheet.getRange(professionRange).getValue();

    if ((raceValue === 'Відьмак' && professionValue !== 'Відьмак')
        || (raceValue !== 'Відьмак' && professionValue === 'Відьмак')) {
        throw new Error('Відьмак він і в Темерії відьмак, довбень!!!')
    }

    console.log(`Вітаю, ти ${raceValue}-${professionValue}`);

    setProfessionSpecies(professionValue, mainSheet);

    function setProfessionSpecies(profession, sheet) {
        const { energy, inventory, learnedSkills, notes } = professions[profession];
        const { energyRange } = mainVariables;

        sheet.getRange(energyRange).setValue(energy);
        learnedSkills.forEach(skill => sheet.getRange(skills[skill]).setBackground('#FFC300'));

        console.warn(notes.length > 0 ? notes : 'GL HF');
    }
}
