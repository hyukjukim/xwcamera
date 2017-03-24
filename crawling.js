//load module
var request = require('request');
var fs = require('fs');

//target url
var url = "http://naver.com";

//file name
var savepath ="naver.txt";
request(url).pipe(fs.createWriteStream(savepath));
