export const setFavorites = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFavorites = (key) => {
    return JSON.parse(localStorage.getItem(key));
}