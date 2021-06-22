import { ethers, Contract } from 'ethers';
import tokencontroller from "./contracts/TokenController.json"
import detectEthereumProvider from '@metamask/detect-provider';
export const getBlockchain = async () => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      console.log(networkId)
      provider = new ethers.providers.Web3Provider(provider);
      const signer = await provider.getSigner();

      const account = await signer.getAddress();
      console.log(account);

      const tokencontract = new Contract(
        tokencontroller.networks[networkId].address,
        tokencontroller.abi,
        signer
      );
      
      return tokencontract;
    }
    
    else {
        window.alert("No wallet found")
    }
}





