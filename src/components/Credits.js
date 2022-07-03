import { Component } from 'react';
import AccountBalance from './AccountBalance';
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
      <div>
        <header>
          <h1 >Credits</h1>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <p>Credit Balance: {this.props.totalCredits}</p>
        </header>
        
        <form>
          <input
            name="description"
            onChange={this.handleChange}
            type="text"
            value={this.state.post.description}
            placeholder="Description"
          />
          <input
            name="amount"
            onChange={this.handleChange}
            type="number"
            value={this.state.post.amount}
            placeholder="Amount"
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
          <table>
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
    );
  }
}





export default Credits;
  
  