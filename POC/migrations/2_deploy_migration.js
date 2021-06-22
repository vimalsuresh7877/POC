const GivingzToken=artifacts.require("Givingztoken");
const TokenController=artifacts.require("TokenController");

module.exports= async  function (deployer){

    await deployer.deploy(GivingzToken);
    const token= await GivingzToken.deployed()
    console.log(token.address)
    await deployer.deploy(TokenController,token.address);
    const tokencontroller= await TokenController.deployed()
    await token.mint(tokencontroller.address,10000);

    
    

}