/**
 * 点赞功能插件
 * @autor alan
 * @version 1.0.0
 * @param $
 * @param undefined
 */
(function ($, undefined) {
    var Thumb = function (element, options) {
        this.$element = element;
        var defaultPageSettings = {
            pullMethod: "get",
            pullUrl: "",
            pullParams: {},
            pushMethod: "post",
            pushUpUrl: "",
            pushDownUrl: "",
            pushParams: {}
        };
        this.settings = $.extend({}, defaultPageSettings, options);
    };

    Thumb.prototype = {
        // 从服务器上拉取点赞数据
        pull: function () {
            $this = this;
            if (this.settings.pullMethod == 'get') {
                $.get(this.settings.pullUrl, this.settings.pullParams,
                    function (data) {
                        $this.updateElement(data);
                    });
            } else {
                $.post(this.settings.pullUrl, this.settings.pullParams,
                    function (data) {
                        $this.updateElement(data);
                    });
            }
        },
        // 推送数据到服务器上更新
        push: function (e) {
            $this = this;
            if (e == 'up') {
                pushUrl = this.settings.pushUpUrl;
            } else {
                pushUrl = this.settings.pushDownUrl;
            }
            target = window.event.target;// 触发事件的元素
            if (this.settings.pushMethod == 'get') {
                $.get(pushUrl, this.settings.pushParams, function (data) {
                    $this.afterPush(target);
                });
            } else {
                $.post(pushUrl, this.settings.pushParams, function (data) {
                    $this.afterPush(target);
                });
            }
        },
        // 更新元素信息
        updateElement: function (data) {
            element = this.$element;
            element.each(function () {
                $(this).children('.thumbUp').text(data['thumbUp']);
                $(this).children('.thumbDown').text(data['thumbDown']);
            });
        },
        // 推送数据后触发
        afterPush: function (target) {
            element = this.$element;
            Cookies.set(window.location.href, 1, {
                expires: 1
            });
            $(target).text(parseInt($(target).text()) + 1);
            // 点赞后，不可继续点
            element.each(function () {
                $(this).children('.thumbUp').unbind('click');
                $(this).children('.thumbDown').unbind('click');
            });
        }

    };

    $.fn.extend({
        thumb: function (options) {
            var t = new Thumb(this, options);
            t.pull();
            if (Cookies.get(window.location.href)) {
                return;
            }
            return this.each(function () {
                $(this).children('.thumbUp').bind('click', function () {
                    t.push('up');
                });
                $(this).children('.thumbDown').bind('click', function () {
                    t.push('down');
                });
            });
        }
    });
})(jQuery);
