/**
 * Created by song on 2017/7/2.
 */
/*let obj={ //对象中的函数 “：”和function关键字 可以省略
    "+"(a,b){
        return a+b;
    },
    "-"(a,b){
        return a-b;
    }
}
exports.obj = obj;//module.exports = obj
//obj[+] 执行
*/
/*let a = 'b';
let obj = {
    [a]:1//es6的语法，取a对应的值作为key
}
console.log(obj);*/

let sum=(...ary)=>{
        let result=ary[0];
        ary.forEach(item=>result+=item);
        // for(var i=1; i<ary.length; i++){
        //     result+=ary[i];
        // }
        return result;
    }

module.exports = sum;
//exports.obj = obj;









