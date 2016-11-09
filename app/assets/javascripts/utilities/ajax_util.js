export class AjaxUtility {
  post(url, data, callback, options) {
    $.post(url, data, callback, options)
  }
}

export const ajax = new AjaxUtility()
