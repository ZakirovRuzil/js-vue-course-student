// Возвращает копию элемента.
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов.
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    const keysOne = Object.keys(objOne);
    const keysTwo = Object.keys(objTwo);
    const allKeys = onlyUnique([...keysOne, ...keysTwo]);

    const result = {};

    allKeys.forEach(key => {
        if (!keysOne.includes(key)) {
            result[key] = 'added';
        } else if (!keysTwo.includes(key)) {
            result[key] = 'deleted';
        } else if (objOne[key] !== objTwo[key]) {
            result[key] = 'changed';
        } else {
            result[key] = 'unchanged';
        }
    });

    return result;
};

export default generateDifference;