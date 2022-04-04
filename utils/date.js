function formatDate(str) {
    if (str.length !== 10) {
      return null;
    }
    if (typeof str !== "string") {
      return null;
    }
  
    const date = new Date(str),
      years = date.getFullYear(),
      months = (date.getMonth() + 1).toString().padStart(2, "0"),
      days = date.getDate();
    return `${days}/${months}/${years}`;
  }
  
  
  module.exports = {
    formatDate
  };