
const saveToLocal = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocal = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export { saveToLocal, getFromLocal };
