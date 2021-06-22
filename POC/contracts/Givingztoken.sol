pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Owner.sol";
contract Givingztoken is ERC20 ,Owner{

    constructor() ERC20("Giving","GV") Owner(){}

    function mint(address recip,uint _amount) external onlyOwner {

        _mint(recip,_amount);
    }
}