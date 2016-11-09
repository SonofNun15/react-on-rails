class AjaxUtility {
  post(url, data, callback, options) {
    $.post(url, data, callback, options)
  }
}

const ajax = new AjaxUtility()
