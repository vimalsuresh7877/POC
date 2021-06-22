import React, { Component } from "react"
import {toast} from "react-toastify"
import {getBlockchain} from "./ethereum"
class App extends Component {

  async componentWillMount() {
    const contract=await getBlockchain();
    console.log(contract)
    await this.setState({contract:contract});
   
  }
  constructor(props) {
    super(props);
    this.state = {
      tokenamount: 0,
      recip:"",
      contract:""
    
    };
  }
  handleInputChange = (event) => {
    event.preventDefault();
    //storing input
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
onsubmit=async()=>{
  console.log("hello")
  console.log(this.state.contract);
 await this.state.contract.tokentransfer(this.state.recip,this.state.tokenamount);
}

  render() {
    return (
      <div className="App">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Enter Token Amount</label>
          <input type="number" class="form-control" name="tokenamount" onChange={this.handleInputChange} id="exampleFormControlInput1" placeholder="tokenamount" />
          <input type="string" class="form-control" name="recip" onChange={this.handleInputChange} id="exampleFormControlInput1" placeholder="tokenamount" />
          <button type="button" class="btn btn-info" onClick={this.onsubmit}>Transfer</button>
        </div>
      </div>
    );
  }

}

export default App;
