
const saveToLocal = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { saveToLocal };
