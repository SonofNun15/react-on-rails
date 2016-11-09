var AjaxUtility = {
  post: function(url, data, callback, options) {
    $.post(url, data, callback, options);
  },
};

module.exports = AjaxUtility;
