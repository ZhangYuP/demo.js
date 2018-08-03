#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2] // �㴫�Ĳ����Ǵӵ� 2 ����ʼ��

if (fs.existsSync("./" +dirName)){

console.log("error: dir exists")
process.exit(1)
}
else{
console.log("success")
    
fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

fs.writeFileSync("index.html", "<!DOCTYPE> <title>Hello</title> <h1>Hi</h1>") // echo "" > index.html
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", "var string = 'Hello World' alert(string)")

process.exit(0) // exit 0
}