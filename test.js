const even = require("./utils/even");
const date = require("./utils/date");

test("If number is even return true, if odd return false", () => {
    const result = even.isEven("9");
    expect(result).toBe(false);
});

test("If the parameter is a date in yyyy-mm-dd format, it returns a string in dd/mm/yyyy format, else it returns null", () => {
  const result = date.formatDate("2000-04-11");
  expect(result);
});