# loading  plugin
主要用于分页式加载数据，它可以做到每次加载指定的数据量。
## properties如下 
this.$element:jquery元素。  
this.settings:设置选项，包含jquery的ajax设置属性、page属性和其他属性，它的结构如下。  
>  {ajax:{},page:{},registryEvent:"",container:""}  

ajax：是jquery原生属性选项  
page：是分页属性，默认值参考[page属性](#page属性)  
registryEvent：目标元素触发的事件名，默认值为click  
container：存放数据的容器，默认为''  
bootLoad：是否首次执行离开加载，默认为true 
 
### page属性
pageNum：页码，默认为0  
pageSize：页长，每页显示最大数量，默认为5  
pageName：返回的数据key名称，如果为空字符，则不需要key，默认为''。  
pageNumName：页码数据名称，默认为pageNum  
pageSizeName：页长数据名称，默认为pageSize  
 
## 方法介绍
loadMore：加载更多的方法，主方法  
getContainer：获取容器  
getPage:获取分页的信息  
getRegistryEvent：获取注册事件名称  
 
## 使用方法
必须引用jquery插件  
>  $("#demo").loading({ajax:{url:'url'},page:{pageNum:0,pageSize:5},registryEvent:'click',container:'#container',bootLoad:true})   


