pragma solidity ^0.8.0;
import "./Givingztoken.sol";
contract TokenController{
Givingztoken public token;

constructor(Givingztoken _token){
    token=_token;

}

function tokentransfer(address _recepient,uint _amount)public {
token.transfer(_recepient,_amount);
}


}