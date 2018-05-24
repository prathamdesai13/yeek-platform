let tokenstats = {}

const maxDecimalPrecision = 3;

let rawToDecimal = function(bigNumStr, decimals) {
    let exponent= bigNumStr.substring(0, bigNumStr.length - decimals);
    let mantissa = bigNumStr.substring(bigNumStr.length - decimals, bigNumStr.length);
    if (mantissa.length > maxDecimalPrecision)
        mantissa = mantissa.substring(0,maxDecimalPrecision);
    if (exponent == '')
        exponent = "0"
    return exponent+"."+mantissa;
  }
  
  let decimalToRaw = function(num, decimals) {
    let paddingLength = decimals
    let nstr = num.toString();
    if (nstr.indexOf('.') > -1) {
      let mantissa = nstr.substring(nstr.indexOf('.'));
      paddingLength -= mantissa.length;
      nstr = nstr.replace('.', '');
    }

    for (var i=0; i<paddingLength; i++) 
      nstr += "0";
    return nstr;
  }
  
$(document).ready(() => {
    setTimeout(() => {
        const eth = new Eth(window.web3.currentProvider);
        const myAddress = window.web3.eth.defaultAccount;


        console.log("Account: "+myAddress);
        $("#ethAddress").html(myAddress);

        /*
        eth.getBlockByNumber(45300, true, (err, block) => {
        // result null { ...block data... }
        });

        const etherValue = Eth.toWei(72, 'ether');

        // result <BN: 3e733628714200000>
        */
            const dropperABI = [
                {
                    "constant": false,
                    "inputs": [],
                    "name": "withdrawAirdropTokens",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "numberOfTokensPerUser",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "tokenContract",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "airdropRecipients",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "endAirdrop",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "airdroppedUsers",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "tokensRemaining",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "tokensDispensed",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "airdropRecipientCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "name": "_tokenContract",
                            "type": "address"
                        },
                        {
                            "name": "_numTokensPerUser",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "buyer",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "Dispensed",
                    "type": "event"
                }
            ];

            const tokenABI = [
                {
                    "constant": true,
                    "inputs": [],
                    "name": "name",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_spender",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "approve",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "decimals",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint8"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "burn",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "burnFrom",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "symbol",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_spender",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        },
                        {
                            "name": "_extraData",
                            "type": "bytes"
                        }
                    ],
                    "name": "approveAndCall",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        },
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "allowance",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "name": "initialSupply",
                            "type": "uint256"
                        },
                        {
                            "name": "tokenName",
                            "type": "string"
                        },
                        {
                            "name": "tokenSymbol",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Burn",
                    "type": "event"
                }
            ];

            const token = eth.contract(tokenABI).at('0x96387e69fac1d3b63e31a3a70ee3a06761887759');
            const dropper = eth.contract(dropperABI).at('0xe77078cbbc4592e06849fd2fdddb4721de6e42c8');

            token.totalSupply().then((totalSupply) => {
                tokenstats.totalSupply = totalSupply[0].toString(10);
                $("#totalSupply").html(rawToDecimal(tokenstats.totalSupply, 18));
            // result <BN ...>  4500000
            })
            
            token.balanceOf(myAddress).then((balance) => {
                tokenstats.balance = balance[0].toString(10);
                $("#yeekBalance").html(rawToDecimal(tokenstats.balance, 18));
            })

            dropper.tokensDispensed().then((amount) => {
                tokenstats.dispensed = amount[0].toString(10);
                $("#tokensDispensed").html(rawToDecimal(tokenstats.dispensed, 18));
            })

            dropper.tokensRemaining().then((amount) => {
                tokenstats.remaining = amount[0].toString(10);
                $("#tokensRemaining").html(rawToDecimal(tokenstats.remaining, 18));
            })

            dropper.numberOfTokensPerUser().then((amount) => {
                tokenstats.airdropsize = amount[0].toString(10);
                $("#airdropAmount").html(rawToDecimal(tokenstats.airdropsize, 18));
            })

            dropper.airdroppedUsers(myAddress).then((hasGottenAirdrop) => {
                if (hasGottenAirdrop[0]) {
                    $("#eligibility").html("Already Received")
                    $("#withdrawAirdropTokens").attr("disabled", "disabled")
                } else {
                    $("#eligibility").html("Eligible To Receive Tokens")
                    $("#withdrawAirdropTokens").removeAttr("disabled")
                }
            })
            $("#withdrawAirdropTokens").on("click", () => {
                $("#eligibility").html("Please authorize the transaction in your wallet to continue...")
                $("#withdrawAirdropTokens").attr("disabled", "disabled")

                dropper.withdrawAirdropTokens({"from": myAddress}).then((tx) => {
                        $("#eligibility").html("Requested. Transaction ID: <a href='https://etherscan.io/tx/"+ tx+"' />"+tx+"</a>");
                })
            })

    }, 5000)
})
