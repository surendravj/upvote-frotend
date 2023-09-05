
const sessionStorageKey = 'upvote'; 

const sessionStorageHelper = {
  setData: (data) => {
    try {
      const dataString = JSON.stringify(data);
      sessionStorage.setItem(sessionStorageKey, dataString);
    } catch (error) {
      console.error('Error setting data to sessionStorage:', error);
    }
  },
  getData: () => {
    try {
      const dataString = sessionStorage.getItem(sessionStorageKey);
      return dataString ? JSON.parse(dataString) : null;
    } catch (error) {
      console.error('Error getting data from sessionStorage:', error);
      return null;
    }
  },
  clearData: () => {
    try {
      sessionStorage.removeItem(sessionStorageKey);
    } catch (error) {
      console.error('Error clearing data from sessionStorage:', error);
    }
  },
};

export default sessionStorageHelper;
