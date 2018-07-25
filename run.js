//设置web3连接
var Web3 = require('web3');
//http://localhost:7545 为Ganache提供的节点链接
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
//读取合约
var fs = require('fs');
var contractCode = fs.readFileSync('Hello.sol').toString();
//编译合约代码
var solc = require('solc');
var compileCode = solc.compile(contractCode);
//获取合约abi和字节码
var abi = JSON.parse(compileCode.contracts[':Hello'].interface);
var byteCode = compileCode.contracts[':Hello'].bytecode;


//创建合约对象
var myContract = new web3.eth.Contract(abi,'0x613b5CEAE5A813E691Fc2F3e13B4CBE2b56a88eF',{});


myContract.methods.say(4,5).call({}, function(error, result){
    console.log(result)
});

//0x80e9eb989046693dfebe31c2aade5245c11b7353为合约部署地址
/* var contractInstance = VotingContract.at("");

var result = contractInstance.say.call('Hello world');
 console.log(result);*/