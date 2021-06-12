export const userList = [
    {
        id_user: 1,
        name: 'Пользователь 1'
    },
    {
        id_user: 2,
        name: 'Пользователь 2'
    }
];

export const coinList = [
    {
        name: 'Общий баланс (сумма):',
        field: 'balance',
        currency: 'USDT',
    },
    {
        name: 'В ордерах (сумма):',
        field: 'frozen',
        currency: 'USDT',
    },
    {
        name: 'Свободный объем (сумма):',
        field: 'available',
        currency: 'USDT',
    }
]

export const summaryTableHeader = [
    'Монета', //coin coin_img
    'Курс к USDT', // price
    'Общий баланс', //balance
    'В ордерах', //frozen
    'Свободный объем' //available
];

export const summaryTableData = [
    {
        width: 180,
        field: 'price'
    },
    {
        width: 180,
        field: 'balance'
    },
    {
        width: 180,
        field: 'frozen'
    },
    {
        width: 180,
        field: 'available'
    },
]

export const arrowUp = `url("data:image/svg+xml,%3Csvg width='17' height='11' viewBox='0 0 17 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 9L8.5 3L15 9' stroke='%23F2C94C' stroke-width='3'/%3E%3C/svg%3E%0A")`;

export const arrowDown = `url("data:image/svg+xml,%3Csvg width='17' height='11' viewBox='0 0 17 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2L8.5 8L15 2' stroke='%23F2C94C' stroke-width='3'/%3E%3C/svg%3E%0A")`;