var DateUtility = {
  toDateString: function(date) {
    var year = date.getFullYear();
    var month = twoDigits(date.getMonth() + 1);
    var day = twoDigits(date.getDate());

    return year + '-' + month + '-' + day;
  },
};

function twoDigits(number) {
  if (number > 10) {
    return number.toString();
  } else {
    return '0' + number;
  }
}

module.exports = DateUtility;
