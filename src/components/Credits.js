import { Component } from 'react';
import '../deb.css';

class Credits extends Component {
  

  state = {
    post: {
      amount : "",
      description: "",
      date: "",
    },
    jobs: [],

  };
  

  getDate = () => {
     let date = new Date().toJSON();
    
     return date
  }



  handleChange = e => {
    
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: {...prevState.post, [name]: value , date: this.getDate()},
      
    }));
    

  };

 


  handleSubmit = e => {
    e.preventDefault();

    this.setState({date: this.getDate() });

    if (!this.state.post.description){
      this.setState(prevState => ({
        jobs: [...prevState.jobs, prevState.post],
        post: { description: "", amount: "", date: ""}, 
      }));
      return alert("Please Enter Description!");
    }
    else if(!this.state.post.amount){
      this.setState(prevState => ({
        jobs: [...prevState.jobs, prevState.post],
        post: { description: "", amount: "", date: ""}, 
      }));
      return alert("Please Enter Amount!");
    }
    this.props.addCredit(this.state.post, this.state.post.amount, "deb");

  
    this.setState(prevState => ({
      jobs: [...prevState.jobs, prevState.post],
      post: { description: "", amount: "", date: ""}, 
    }));

    
    
  };

  changeDate = (date) => {
    let daten = date.slice(0,10);
    return  daten;
  }

  

  render() {
    return (
      <div style={{marginLeft: 190}}>
      <br></br>
      <br></br>
      <br></br>
      
      
        <header>
          <h1 class="title" >Credits</h1 >
          <br></br>
          <br></br>
          <h3 class="title"> 
           Total Balance: {this.props.accountBalance}
          </h3>
          <h3 class="title"> 
     
           Credit Balance: {this.props.totalCredits}
          </h3>
        </header>

      <br></br>
      <br></br>
      <br></br>
        <div >
        <form>
          <input
            name="description"
            onChange={this.handleChange}
            type="text"
            value={this.state.post.description}
            placeholder="Description"
            class = "pad"
          />
          <input
            name="amount"
            onChange={this.handleChange}
            type="number"
            value={this.state.post.amount}
            placeholder="Amount"
            class = "pad"
          />
          <button onClick={this.handleSubmit} class="button">Submit</button>
          <br></br>
          <br></br>
          <br></br>
        </form>
          <table >
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
           
            {this.props.credits.reverse().map((job, key) => {
              return (
                <tr key={key}>
                  <td>{job.amount}</td>
                  <td>{job.description}</td>
                  <td>{this.changeDate(job.date)}</td>
                  
                </tr>
              )
            })}

          </table>
          </div>
          
        
      </div>
    );
  }
}





export default Credits;
  
  