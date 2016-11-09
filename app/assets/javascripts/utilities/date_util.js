class DateUtility {
  toDateString(date) {
    var year = date.getFullYear()
    var month = this.twoDigits(date.getMonth() + 1)
    var day = this.twoDigits(date.getDate())

    return year + '-' + month + '-' + day
  }

  twoDigits(number) {
    if (number > 10) {
      return number.toString();
    } else {
      return '0' + number;
    }
  }
}

const dateUtil = new DateUtility()
