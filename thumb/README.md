# thumb plugin  
点赞插件，提供置顶和踩一下两个功能，ui需要自己设定，后续可能会考虑加入。  
## properties如下 
this.$element:jquery元素。  
this.settings:设置选项，一些自定义属性，它的数据结构如下。  
     {pullMethod:'',pullUrl:'',pullParams:'',pushMethod:'',pushUpUrl : "",pushDownUrl : "",pushParams : {}}  
pullMethod：拉取置顶和踩一下的Ajax方法，只支持get和post,默认值get  
pullUrl：拉取置顶和踩一下的Ajax url，默认值''  
pullParams：拉取置顶和踩一下的Ajax 参数，默认值为{}  
pushMethod：触发置顶或者踩一下事件，推送数据到服务器的Ajax 方法，默认为post  
pushUpUrl：触发置顶事件，推送数据到服务器的Ajax Url，默认为'' 
pushDownUrl：触发踩一下事件，推送数据到服务器的Ajax Url，默认为'' 
pushParams：触发置顶或者踩一下事件，推送数据到服务器的Ajax 参数，默认为{}  
 
## 方法介绍
pull：从服务器上拉取点赞数据  
push：推送数据到服务器上更新  
updateElement:更新元素信息  
afterPush：推送数据后触发    
 
## 使用方法
必须引用jquery插件和js-cookie插件  
$(".thumb").thumbthumb({pullUrl:"pullUrl",pushUpUrl:"upUrl",pushDownUrl:"downUrl"});
 
规约  
必须使用一个父级标签包含一个置顶和踩一下标签，其中置顶标签class必须为thumbUp，踩一下标签class为thumbDown。  

