const localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      if (store[key] === undefined) {
        return null;
      }
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value;
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

export default localStorageMock;
