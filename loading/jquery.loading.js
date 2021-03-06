/**
 * 加载更多功能插件
 * @autor alan
 * @version 1.0.0
 * @param $
 * @param undefined
 */
(function ($, undefined) {
    var Loading = function (element, options) {
        var $this = this;
        $this.$element = element;
        var defaultPageSettings = {
            pageNum: 0,
            pageSize: 5,
            pageName: "",
            pageNumName: "pageNum",
            pageSizeName: "pageSize"
        };
        var defaultAjaxSettings = {
            "success": function (data) {
                $($this.settings.container).append(data);
            }
        }
        options.page = $.extend({}, defaultPageSettings, options.page);
        $this.settings = $.extend({}, {
            registryEvent: "click",
            container: "",
            bootLoad: true,
        }, options);
        $this.settings.ajax = $.extend(defaultAjaxSettings, $this.settings.ajax);
    };

    Loading.prototype = {
        // 加载更多
        loadMore: function () {
            this.settings.page.pageNum += 1;
            var page = this.getPage();
            var ajaxSettings = this.settings.ajax;
            ajaxSettings = $.extend({}, ajaxSettings, {
                "data": page
            });
            $.ajax(ajaxSettings);
        },
        // 获取容器
        getContainer: function () {
            return this.settings.container;
        },
        // 获取分页信息
        getPage: function () {
            var $page = this.settings.page;
            var page = {};
            page[$page.pageSizeName] = $page.pageSize;
            page[$page.pageNumName] = $page.pageNum;
            if (!$page.pageName || $page.pageName == "") {
                return page;
            }
            return ({}[$page.pageName] = page);
        },
        // 获取注册事件
        getRegistryEvent: function () {
            return this.settings.registryEvent;
        }

    };

    $.fn.extend({
        loading: function (options) {
            var load = new Loading(this, options);
            this.bind(load.getRegistryEvent(), function () {
                load.loadMore();
            });
            if (load.settings.bootLoad) {
                load.loadMore();
            }
            return this;
        }
    });
})(jQuery);
