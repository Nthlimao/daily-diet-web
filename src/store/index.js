const getStorage = (key) => {
    return localStorage.getItem(key);
}

const setStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const clearStorage = (key) => {
    localStorage.removeItem(key);
}

export { getStorage, setStorage, clearStorage }