const reverseString = (str) => {
    // Начало
    if (str.length === 0) {
        return "";
    } else {
        return reverseString(str.slice(1)) + str[0];
    }
    // Конец
};

export default reverseString;