// src/components/Debits.js

//import axios, { Axios } from 'axios';
//import { getByAltText } from '@testing-library/react';
import { Component } from 'react';



import '../deb.css';



class Debits extends Component {
  

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

    this.props.addDebit(this.state.post, this.state.post.amount, "deb");

  
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
      < br></br>
      <br></br>
      <br></br>
      
      
        <header>
          <h1 class="title" >Debits</h1 >
          <br></br>
          <br></br>
          <h3 class="title"> 
           Total Balance: {this.props.accountBalance}
          </h3>
          <h3 class="title"> 
     
           Debit Balance: {this.props.totalDebits}
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
          <table>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
           
            {this.props.debits.reverse().map((job, key) => {
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

export default Debits;

// class Debits extends Component {
//   state = {
//     cart: ["Corn", "Potato"],
//   };

//   saveInput = (e) => {
//     this.setState({ input: e.target.value });
//   };

//   addNewItem = () => {
//     let { cart, input } = this.state;
//     cart.push(input);
//     this.setState({cart: cart});
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           onChange={this.saveInput}
//         />
//         <button onClick={this.addNewItem}> Add Item </button>
//         <ol>
//           {this.state.cart.map((subItems, sIndex) => {
//             return <li key={sIndex}> {subItems}</li>
//           })}
//         </ol>
//       </div>
//     );
//   }
// }

// export default Debits;



// class Debits extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       debitData : ['test', 'green']

//     }
    
//   }


//   // debitsView = () => {
    
      
     
//   // }

//   addItem(e){
//     e.preventDefault();
//     const{debitData} = this.state;
//     const newItem = debitData.value;

//     this.setState({
//       debitData: [...this.state.debitData, newItem]
//     })
  
//   }

//   render () {
//     return (
//       <div>
//       <h1>Debits</h1>
//       {this.state.debitData}
//       <form onSubmit={(e) => {this.addItem(e)}}>
//         <input type="text" name="description" />
//         <input type="number" name="amount" />
//         <button type="submit">Add Debit</button>
//       </form>
//       <Link to="/">Return to Home</Link>
//     </div>
//     )
//   }
// }

// export default Debits;









// class Debits extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       debitData : {
//         id: "",
//         description : "",
//         amount: 0,
//         date: ""

//       }
//     }
//   }

//   debitsView = () => {
//     return this.props.debits.map((debit) => {
//     let date = debit.date.slice(0,10);
//     return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
//   }) 
// }
//   handleInputChange = (event) => {
//     this.setState({searchText: event.target.value});
//   }

//   render () {
//     return (
//       <div>
//       <h1>Debits</h1>

//       {this.debitsView()}

//       <form onSubmit={this.props.addDebit}>
//         <input type="text" name="description" />
//         <input type="number" name="amount" />
//         <button type="submit">Add Debit</button>
//       </form>
//       <Link to="/">Return to Home</Link>
//     </div>
//     )
//   }
// }

// export default Debits;







































// const Debits = (props) => {
// 	let debitsView = () => {
//     const { debits } = props;
//     console.log(debits)
//     return debits.map((debit) => {
//       let date = debit.date.slice(0,10);
//       return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
//     }) 
//   }

//   let debb = [];
//   //let amount = 0
//   //let descri = ""


//   let userView  = (debits) => {
//     return debits.map((debit) => {
//       let date = debit.date.slice(0,10);
//       return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
//     }) 
    
//   }


  

//   let adddeb = (e) => {
//     // let amo = document.getElementById("amo").value;
//     // let des = document.getElementById("Des").value;

//     //const input = document.getElementById('amo').value;


//     //console.log(amo, des)
   
//   //   var dateNow = new Date().toJSON()

//   //   let newDeb = {
//   //     amount: amo,
//   //     date: dateNow,
//   //     description: des,
//   //     id: '' ,
//   //  }
   
//   //  debb.push(newDeb)
   
   
//   }


  
//   return (
//     <div>
//       <h1>Debits</h1>
//       {debitsView()}
//       {userView(debb)}
//       <form onSubmit={adddeb()}>
//          <input type="text" name="description"  id = 'Des'/>
//          <input type="number" name="amount" id = 'amo'/>
//         <button type="submit">Add Debit</button>
      
//       </form>
//       {console.log(document.getElementById("amo").value)}
      
      
//       <Link to="/">Return to Home</Link>
//     </div>
//   )



// }
// export default Debits;
