/**
 * Created by song on 2017/7/2.
 */
//引用第三方模块，第三方可以直接写模块名
    //第三方模块需要下载  引用不需要相对路径./  ../，在node_modules下查找，没有去上级查找，找到根盘符为止  module.paths 查看查找路径
let str = require('my-pack-song');
console.log(str);
console.log(module.paths);