//var _token = "0xd703311c357db71c9003dfc6e680b1bf16606159"; //AXIO
//var _token="0x639c560abc3a9f5c026910555591ecb859066dc3" //TIGER
var _token = "0xb10e690cb531512493fa5a88a4a1e1d3506b2258" //TITAN
//var _token = "0x8ee958f5f77c70aa7ef39077459e30455625152a" //STEALTH
var _weight = 10000;
var _formulaContract = "0x3aE6aBEb18DFa61F85FAfF25aef28c8cd6dDbe6b";
var exchangerv2Contract = web3.eth.contract([{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"grantAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amountInWei","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"admins","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"formulaContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"quantity","type":"uint256"},{"name":"minSaleReturn","type":"uint256"},{"name":"seller","type":"address"}],"name":"sellOneStep","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ppm","type":"uint256"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReserveBalances","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"virtualReserveBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"},{"name":"_token","type":"address"},{"name":"_extraData","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"collectedFees","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"depositEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"weight","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amountInWei","type":"uint256"}],"name":"extractFees","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amountInWei","type":"uint256"}],"name":"setVirtualReserveBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"issuedSupplyRatio","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"amountInWei","type":"uint256"}],"name":"getPurchasePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newValue","type":"uint256"}],"name":"setissuedSupplyRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"quantity","type":"uint256"},{"name":"minSaleReturn","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minPurchaseReturn","type":"uint256"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"depositTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"fee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ppm","type":"uint256"}],"name":"setReserveWeight","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokensToSell","type":"uint256"}],"name":"getSalePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"revokeAdminStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_weight","type":"uint32"},{"name":"_formulaContract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"purchaser","type":"address"},{"indexed":false,"name":"amountInWei","type":"uint256"},{"indexed":false,"name":"amountInToken","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"seller","type":"address"},{"indexed":false,"name":"amountInToken","type":"uint256"},{"indexed":false,"name":"amountInWei","type":"uint256"}],"name":"Sell","type":"event"}]);
var exchangerv2 = exchangerv2Contract.new(
   _token,
   _weight,
   _formulaContract,
   {
     from: web3.eth.accounts[0], 
     data: '0x60806040526000600260006101000a81548160ff021916908315150217905550611388600360186101000a81548163ffffffff021916908363ffffffff16021790555060016003601c6101000a81548163ffffffff021916908363ffffffff1602179055506000600455600060055534801561007a57600080fd5b506040516060806132b1833981018060405281019080805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060008263ffffffff1611801561019a5750620f4240600360149054906101000a900463ffffffff1663ffffffff1611155b15156101a557600080fd5b81600360146101000a81548163ffffffff021916908363ffffffff16021790555082600260016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506130578061025a6000396000f30060806040526004361061018b576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302d05d3f14610190578063238dafe0146101e75780632f2770db14610216578063315a095d1461022d57806335bb3e161461025a5780633bed33ce1461029d578063429b62e5146102ca57806355a373d6146103255780635cc5ca501461037c57806363f8a211146103d357806369fe0e2d1461042a57806377d56a04146104575780638e068b11146104895780638f4ffcb1146104b45780639003adfe1461053957806398ea5fca14610564578063a1aab33f1461056e578063a3907d71146105a5578063a6f9dae1146105bc578063b9c8464d146105ff578063bd8caabf1461062c578063c24e1fc114610659578063c59d563314610690578063cee96f49146106d1578063d79875eb146106fe578063d96a094a14610735578063dd49756e14610755578063ddca3f4314610782578063eff841d1146107b9578063f8eb5fc5146107e6578063fa62a1ff14610827575b600080fd5b34801561019c57600080fd5b506101a561086a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101f357600080fd5b506101fc61088f565b604051808215151515815260200191505060405180910390f35b34801561022257600080fd5b5061022b6108a2565b005b34801561023957600080fd5b506102586004803603810190808035906020019092919050505061096e565b005b34801561026657600080fd5b5061029b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa9565b005b3480156102a957600080fd5b506102c860048036038101908080359060200190929190505050610b10565b005b3480156102d657600080fd5b5061030b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bb5565b604051808215151515815260200191505060405180910390f35b34801561033157600080fd5b5061033a610bd5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561038857600080fd5b50610391610bfb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103df57600080fd5b506104286004803603810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c21565b005b34801561043657600080fd5b50610455600480360381019080803590602001909291905050506111b5565b005b34801561046357600080fd5b5061046c6112a7565b604051808381526020018281526020019250505060405180910390f35b34801561049557600080fd5b5061049e6113c6565b6040518082815260200191505060405180910390f35b3480156104c057600080fd5b50610537600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019082018035906020019190919293919293905050506113cc565b005b34801561054557600080fd5b5061054e6113df565b6040518082815260200191505060405180910390f35b61056c6113e5565b005b34801561057a57600080fd5b50610583611442565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b3480156105b157600080fd5b506105ba611458565b005b3480156105c857600080fd5b506105fd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611524565b005b34801561060b57600080fd5b5061062a600480360381019080803590602001909291905050506115c2565b005b34801561063857600080fd5b50610657600480360381019080803590602001909291905050506116cc565b005b34801561066557600080fd5b5061066e611785565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b34801561069c57600080fd5b506106bb6004803603810190808035906020019092919050505061179b565b6040518082815260200191505060405180910390f35b3480156106dd57600080fd5b506106fc60048036038101908080359060200190929190505050611cce565b005b34801561070a57600080fd5b506107336004803603810190808035906020019092919080359060200190929190505050611db0565b005b61075360048036038101908080359060200190929190505050612343565b005b34801561076157600080fd5b506107806004803603810190808035906020019092919050505061290e565b005b34801561078e57600080fd5b50610797612aa1565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b3480156107c557600080fd5b506107e460048036038101908080359060200190929190505050612ab7565b005b3480156107f257600080fd5b5061081160048036038101908080359060200190929190505050612ba8565b6040518082815260200191505060405180910390f35b34801561083357600080fd5b50610868600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612f1b565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061094657503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561095157600080fd5b6000600260006101000a81548160ff021916908315150217905550565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156109c957600080fd5b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015610a8e57600080fd5b505af1158015610aa2573d6000803e3d6000fd5b5050505050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610b0457600080fd5b610b0d81612fd1565b50565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610b6b57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610bb1573d6000803e3d6000fd5b5050565b60016020528060005260406000206000915054906101000a900460ff1681565b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166349f9b0f7600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610d1e57600080fd5b505af1158015610d32573d6000803e3d6000fd5b505050506040513d6020811015610d4857600080fd5b81019080805190602001909291905050506003601c9054906101000a900463ffffffff1663ffffffff16600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610df857600080fd5b505af1158015610e0c573d6000803e3d6000fd5b505050506040513d6020811015610e2257600080fd5b8101908080519060200190929190505050811515610e3c57fe5b04036005543073ffffffffffffffffffffffffffffffffffffffff163101600360149054906101000a900463ffffffff16886040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018481526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b158015610ee157600080fd5b505af1158015610ef5573d6000803e3d6000fd5b505050506040513d6020811015610f0b57600080fd5b81019080805190602001909291905050509050620f4240600360189054906101000a900463ffffffff1663ffffffff168202811515610f4657fe5b0481039050600260009054906101000a900460ff161515610f6657600080fd5b828110151515610f7557600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16318111151515610f9b57600080fd5b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330876040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561109457600080fd5b505af11580156110a8573d6000803e3d6000fd5b505050506040513d60208110156110be57600080fd5b810190808051906020019092919050505015156110da57600080fd5b620f4240600360189054906101000a900463ffffffff1663ffffffff16820281151561110257fe5b046004600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff167fed7a144fad14804d5c249145e3e0e2b63a9eb455b76aee5bc92d711e9bba3e4a8583604051808381526020018281526020019250505060405180910390a28173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156111ae573d6000803e3d6000fd5b5050505050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061125957503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561126457600080fd5b600081101580156112785750620f42408111155b151561128357600080fd5b80600360186101000a81548163ffffffff021916908363ffffffff16021790555050565b600080600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561136757600080fd5b505af115801561137b573d6000803e3d6000fd5b505050506040513d602081101561139157600080fd5b81019080805190602001909291905050506005543073ffffffffffffffffffffffffffffffffffffffff163101915091509091565b60055481565b6113d884600087610c21565b5050505050565b60045481565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561144057600080fd5b565b600360149054906101000a900463ffffffff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806114fc57503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561150757600080fd5b6001600260006101000a81548160ff021916908315150217905550565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561157f57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061166657503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561167157600080fd5b600454811115151561168257600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156116c8573d6000803e3d6000fd5b5050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061177057503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561177b57600080fd5b8060058190555050565b6003601c9054906101000a900463ffffffff1681565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329a00e7c600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561189957600080fd5b505af11580156118ad573d6000803e3d6000fd5b505050506040513d60208110156118c357600080fd5b81019080805190602001909291905050506003601c9054906101000a900463ffffffff1663ffffffff16600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561197357600080fd5b505af1158015611987573d6000803e3d6000fd5b505050506040513d602081101561199d57600080fd5b81019080805190602001909291905050508115156119b757fe5b04036005543073ffffffffffffffffffffffffffffffffffffffff163101600360149054906101000a900463ffffffff16876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018481526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b158015611a5c57600080fd5b505af1158015611a70573d6000803e3d6000fd5b505050506040513d6020811015611a8657600080fd5b81019080805190602001909291905050509050620f4240600360189054906101000a900463ffffffff1663ffffffff168202811515611ac157fe5b0481039050600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015611b8357600080fd5b505af1158015611b97573d6000803e3d6000fd5b505050506040513d6020811015611bad57600080fd5b8101908080519060200190929190505050811115611cc457600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015611c8257600080fd5b505af1158015611c96573d6000803e3d6000fd5b505050506040513d6020811015611cac57600080fd5b81019080805190602001909291905050509150611cc8565b8091505b50919050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680611d7257503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b1515611d7d57600080fd5b600081111515611d8c57600080fd5b806003601c6101000a81548163ffffffff021916908363ffffffff16021790555050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166349f9b0f7600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015611ead57600080fd5b505af1158015611ec1573d6000803e3d6000fd5b505050506040513d6020811015611ed757600080fd5b81019080805190602001909291905050506003601c9054906101000a900463ffffffff1663ffffffff16600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015611f8757600080fd5b505af1158015611f9b573d6000803e3d6000fd5b505050506040513d6020811015611fb157600080fd5b8101908080519060200190929190505050811515611fcb57fe5b04036005543073ffffffffffffffffffffffffffffffffffffffff163101600360149054906101000a900463ffffffff16876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018481526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b15801561207057600080fd5b505af1158015612084573d6000803e3d6000fd5b505050506040513d602081101561209a57600080fd5b81019080805190602001909291905050509050620f4240600360189054906101000a900463ffffffff1663ffffffff1682028115156120d557fe5b0481039050600260009054906101000a900460ff1615156120f557600080fd5b81811015151561210457600080fd5b3073ffffffffffffffffffffffffffffffffffffffff1631811115151561212a57600080fd5b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561222357600080fd5b505af1158015612237573d6000803e3d6000fd5b505050506040513d602081101561224d57600080fd5b8101908080519060200190929190505050151561226957600080fd5b620f4240600360189054906101000a900463ffffffff1663ffffffff16820281151561229157fe5b046004600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fed7a144fad14804d5c249145e3e0e2b63a9eb455b76aee5bc92d711e9bba3e4a8483604051808381526020018281526020019250505060405180910390a23373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561233d573d6000803e3d6000fd5b50505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329a00e7c600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561244057600080fd5b505af1158015612454573d6000803e3d6000fd5b505050506040513d602081101561246a57600080fd5b81019080805190602001909291905050506003601c9054906101000a900463ffffffff1663ffffffff16600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561251a57600080fd5b505af115801561252e573d6000803e3d6000fd5b505050506040513d602081101561254457600080fd5b810190808051906020019092919050505081151561255e57fe5b0403346005543073ffffffffffffffffffffffffffffffffffffffff16310103600360149054906101000a900463ffffffff16346040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018481526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b15801561260557600080fd5b505af1158015612619573d6000803e3d6000fd5b505050506040513d602081101561262f57600080fd5b81019080805190602001909291905050509050620f4240600360189054906101000a900463ffffffff1663ffffffff16820281151561266a57fe5b0481039050600260009054906101000a900460ff16151561268a57600080fd5b81811015151561269957600080fd5b80600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561275757600080fd5b505af115801561276b573d6000803e3d6000fd5b505050506040513d602081101561278157600080fd5b81019080805190602001909291905050501015151561279f57600080fd5b620f4240600360189054906101000a900463ffffffff1663ffffffff1634028115156127c757fe5b046004600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167f1cbc5ab135991bd2b6a4b034a04aa2aa086dac1371cb9b16b8b5e2ed6b036bed3483604051808381526020018281526020019250505060405180910390a2600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156128f257600080fd5b505af1158015612906573d6000803e3d6000fd5b505050505050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561296957600080fd5b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015612a6257600080fd5b505af1158015612a76573d6000803e3d6000fd5b505050506040513d6020811015612a8c57600080fd5b81019080805190602001909291905050505050565b600360189054906101000a900463ffffffff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680612b5b57503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b1515612b6657600080fd5b600081118015612b795750620f42408111155b1515612b8457600080fd5b80600360146101000a81548163ffffffff021916908363ffffffff16021790555050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166349f9b0f7600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015612ca657600080fd5b505af1158015612cba573d6000803e3d6000fd5b505050506040513d6020811015612cd057600080fd5b81019080805190602001909291905050506003601c9054906101000a900463ffffffff1663ffffffff16600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015612d8057600080fd5b505af1158015612d94573d6000803e3d6000fd5b505050506040513d6020811015612daa57600080fd5b8101908080519060200190929190505050811515612dc457fe5b04036005543073ffffffffffffffffffffffffffffffffffffffff163101600360149054906101000a900463ffffffff16876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808581526020018481526020018363ffffffff1663ffffffff168152602001828152602001945050505050602060405180830381600087803b158015612e6957600080fd5b505af1158015612e7d573d6000803e3d6000fd5b505050506040513d6020811015612e9357600080fd5b81019080805190602001909291905050509050620f4240600360189054906101000a900463ffffffff1663ffffffff168202811515612ece57fe5b04810390503073ffffffffffffffffffffffffffffffffffffffff1631811115612f11573073ffffffffffffffffffffffffffffffffffffffff16319150612f15565b8091505b50919050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612f7657600080fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505600a165627a7a72305820dc6826ae12813896acf0b6b865ecff1fd98fb54e02d246975620a7a3e440b3ba0029', 
     gas: '4700000',
     gasPrice: web3.toWei(3, 'gwei')
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })