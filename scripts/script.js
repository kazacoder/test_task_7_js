let clients = [
    {
        firstName: 'Александр',
        lastName: 'Иванчук',
        date: '11-29-1990',
        phone: '8(929) 988-90 - 09',
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: 'Анатолий',
        lastName: 'Стаценко',
        date: '02-12-1987',
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstName: 'Марина',
        lastName: 'Петрова',
        date: '07-26-1997',
        phone: '8(899) 546-09-08',
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: 'Иван',
        lastName: 'Караванов',
        date: '09-12-1999',
        phone: null,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: 'Оксана',
        lastName: 'Абрамова',
        date: '01-24-2002',
        phone: '8(952) 746-99 - 22',
        amounts: [342, 766, 362]
    }
]


bestClients = [
    {
        firstName: 'Алексей',
        lastName: 'Петров',
        date: '11-30-1998',
        phone: '8(999)-00-00-90',
        amounts: [546, 1198, 1764, 761]
    },
    {
        firstName: 'Виталий',
        lastName: 'Иванов',
        date: '12-31-1987',
        phone: '+7 925-252-25',
        amounts: [56, 887, 1889, 544]
    },
    {
        firstName: 'Анастасия',
        lastName: 'Мельникова',
        date: '04-25-1987',
        phone: '8(999) 466-91-81',
        amounts: [16525, 2837, 283, 92]
    }
]


class Client {
    constructor(client) {
        this.firstName = client.firstName;
        this.lastName = client.lastName;
        this.date = client.date;
        this.phone = client.phone;
        this.amounts = client.amounts;
    }
}


// Часть Первая: обернул в функцию, чтобы удобнее было отключать
function addNewClient() {
    let newClient = {}

    newClient.firstName = prompt('Введите имя')
    newClient.lastName = prompt('Введите фамилию')
    newClient.date = prompt('Введите дату рождения в формате мм-дд-гггг')
    newClient.phone = prompt('Введите телефон')
    newClient.amounts = []

    while (confirm(`Добавить покупку для клиента ${newClient.firstName}?`)) {
        let amount = parseInt(prompt('Введите сумму покупки'))
        if (amount) {
            newClient.amounts.push(amount)
        }
    }
    clients.push(newClient)
    return newClient
}

console.log(addNewClient())


// Часть Вторая
function fullName(obj) {
    return `${obj.firstName} ${obj.lastName}`
}

// console.log(fullName(clients[1]))


function getBirthday(birthdayString) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
        'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ]
    let birthday = new Date(birthdayString)
    let today = new Date();
    let isToday = (birthday.getDate() === today.getDate() && birthday.getMonth() === today.getMonth()) ? ' (сегодня)' : ''
    return `${birthday.getDate()} ${months[birthday.getMonth()]}${isToday}`;
}

// console.log(getBirthday('02-02-1981'))
// console.log(getBirthday(clients[0].date))
// console.log(getBirthday('10-22-1981'))


function getAllAmount(array) {
    return array.reduce((sum, el) => sum + el, 0);
}

// console.log(getAllAmount(clients[1].amounts));


function getAverageAmount(array) {
    return (array.reduce((sum, el) => sum + el, 0) / array.length).toFixed(1);
}

// console.log(getAverageAmount(clients[2].amounts))


showClients = (clients) => {
    try {
        clients.forEach((client) => {
            console.log(`Клиент ${fullName(client)} имеет среднюю сумму чека ${getAverageAmount(client.amounts)}. День рождения клиента: ${getBirthday(client.date)}`);
        })
    } catch (err) {
        console.log('Вызвана функция без параметров')
        console.log(err.message);
    }
}

showClients(clients);
showClients();


setTimeout(() => {showClients(bestClients)} , 3000)


function whoSpentMore (array) {
    let client
    let max_amount = 0
    for (let el of array) {
        let current_amount = getAllAmount(el.amounts)
        if (current_amount >= max_amount) {
            max_amount = current_amount
            client = el
        }
    }
    console.log(`Больше всех потратил ${fullName(client)}. Сумма покупок: ${max_amount}.`)
}

whoSpentMore(clients)
whoSpentMore(bestClients)