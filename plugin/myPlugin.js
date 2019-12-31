module.exports = a;
//处理静态资源服务器  图片服务器 换成url地址
function a(){

}

const fs = require('fs')
const path = require('path')
a.prototype.apply = function(compiler){
    //对apply打包的某个周期进行监听
    //done 已经打包完成，dist目录已经形成
    //emit 
    //begin 
    compiler.hooks.done.tap('changeStatic',function(complilation){
        let context = compiler.options.context
        // console.log(context) 
        let publicPath = path.resolve(context, 'dist')
        //获取文件夹下文件信息
        complilation.toJson().assets.forEach((ast)=>{
            // console.log(ast)
            const filePath = path.resolve(publicPath, ast.name)
            fs.readFile(filePath, function(err, file){
                var newcontent = file.toString().replace('./static', 'www.xxx.com')
                fs.writeFile(filePath, newcontent, function(err, file){
                   
                })
            })
        })
    })
}