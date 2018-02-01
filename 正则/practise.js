// 区块链钱包地址正则  以 0X开头  后边跟42位a-f \ A-F \ 0-9

var address = "0x92894470B8A2027F5e8BA46413A31f9d61cd84B7" 


var reg = /^0x[0-9a-fA-F]{40}$/ ;

console.log(reg.test(address))