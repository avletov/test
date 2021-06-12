export const selectColor = (value1, value2) => {
    if (value1 === value2) {
        return '';
    } else if (value1 < value2) {
        return 'success';
    } else {
        return 'danger';
    }
}

export const getColor = (userData, i, field, isRecentUpdate) => {
    if (userData.prev[i] && isRecentUpdate) {
        return selectColor(userData.prev[i][field], userData.current[i][field]);
    } else {
        return '';
    }
}

export const getSum = (arr, param) => {
    return Number(arr.reduce((acc, item) => {
        return acc + Number(item[param]) / Number(item['price']);
    }, 0).toFixed(5));
}