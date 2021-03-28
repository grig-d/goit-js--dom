const clientStorage = {
  getItem(key) {
    try {
      JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return undefined;
    }
  },
  setItem(key, payload) {
    try {
      localStorage.setItem(key, JSON.stringify(payload));
    } catch (error) {
      return undefined;
    }
  },
};
