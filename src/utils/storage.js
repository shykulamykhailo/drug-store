export const loadStoreData = () => {
    const storedData = localStorage.getItem('storeData');
    return storedData ? JSON.parse(storedData) : [];
};

export const saveStoreData = (data) => {
    localStorage.setItem('storeData', JSON.stringify(data));
};
