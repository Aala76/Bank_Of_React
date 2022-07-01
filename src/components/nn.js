// src/components/Debits.js

//import React, { Component } from 'react'
//import axios, { Axios } from 'axios';
import { Component } from 'react';
//import { Component } from 'react';
import {Link} from 'react-router-dom';


class Debits extends Component {

  // constructor(props) {
  //   super(props)
  //   let new_date = new Date();
  //   let da = new_date.slice(0,10);
  //   this.state = {
      
  //     newDeb : {
  //       id: Math.floor(Math.random() * 990),
  //       description: '',
  //       amount: 0,
  //       date: new Date.slice(0,10),
  //     }
      

  //   }
  // }

  debitsView = () => {
      return this.props.debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  }

  // userDataView = (debits) => {
  //   return debits.map((debit) => {
  //     return <li key={debit.id}>{debit.amount} {debit.description} {debit.date}</li>
  //   }) 
  // }

  // addDes(){
  //   return document.getElementById("description").value;
  // }

  // addAmount(){
  //   return document.getElementById("amount").value;
  // }




  render(){
    return(
      <div>
      <h1>Debits</h1>
      <form onSubmit={this.props.addDebit()}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
        
      </form>
      <Link to="/">Return to Home</Link>
    </div>
    )
  }

}

export default Debits;





// const Debits = (props) => {
// 	let debitsView = () => {
//     const { debits } = props;
//     return debits.map((debit) => {
//       let date = debit.date.slice(0,10);
//       return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
//     }) 
//   }

//   // let handleChange = (e) => {
//   //   this.setState({
//   //     [e.target.name]: e.target.value
//   //   })
//   // }

//   // let handleSubmit = (e) => {
//   //   e.preventDeafult()
//   //   axios.post('https://moj-api.herokuapp.com/debits', this.state).then(response => {
//   //    console.log(response)
      
//   //   })
//   // }


//   // let createC = async () => {
//   //   let res = await api.post('/', {  amount: 'am', date: 5 })
//   //   console.log(res)
//   // }
//   // async function doPostRequest() {

//   //   let payload = { id: '888', description: "ll", amount: 'am', date: new Date() };

//   //   let res = await axios.post('https://moj-api.herokuapp.com/debits', payload);

//   //   let data = res.data;
//   //   console.log(data);
//   // }
  
//   const postData = (e) => {
//     e.preventDefault();

//     let data = {description: '', amount: '', date: new Date()}
//     Axios.post('https://moj-api.herokuapp.com/debits', data).then(res=> console.log('posting data', res)).catch(err => console.log(err));
//   }
  
  
//   return (
//     <div>
//       <h1>Debits</h1>
//       {debitsView()}
//       <form onSubmit={[props.addDebit, postData()]}>
//          <input type="text" name="description"  />
//          <input type="number" name="amount" />
//         <button type="submit">Add Debit</button>
//       </form>
//       <Link to="/">Return to Home</Link>
//     </div>
//   )
//   //props.addDebit



// }
// export default Debits;


    
// class Debits extends Component {
//   render() {
//     return (
//         <div>
//           <h1>Bank of Debits</h1>
//           <Link to="/">Home</Link>
//         </div>
//     );
//   }
// }
    
// export default Debits;


// class Debits extends Component {
//   // constructor(props) {
//   //   super(props)

//   //   this.state = {
//   //     description: '',
//   //     amount: ''


//   //   }
//   // }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDeafult()
//     axios.post('https://moj-api.herokuapp.com/debits', this.state).then(response => {
//      console.log(response)
      
//     })
//   }

//   debview = (props) => {
//     const { debits } = props;
//     return debits.map((debit) => {
//       let date = debit.date.slice(0,10);
//       return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
//     }) 
//   }
  
//   render(){
//     const {debits} = props;
//     return(
//       <div>
//       <h1>Debits</h1>
//       debits.map(debit => <li key={debit.id}>{debit.amount} {debit.description} {date}</li> )
//       <form onSubmit={this.props.addDebit}>
//         <input type="text" name="description" />
//         <input type="number" name="amount" />
//         <button type="submit">Add Debit</button>
//         onChange = {this.handleChange}
//       </form>
//       <Link to="/">Return to Home</Link>
//     </div>
//     )
//   }

  
  


// }





// export default Debits;



// render(){
//   return(
//     <div>
//     <h1>Debits</h1>
//     {this.debitsView()}
//     {this.userDataView(this.props.debits)}
//     <form onSubmit={this.props.addDebit(this.newDeb)}>
//       <input type="text" name="description" id = "description" onChange={this.addDes()}/>
//       <input type="number" name="amount" id = "amount" onChange={this.addAmount()} />
//       <button type="submit">Add Debit</button>
      
//     </form>
//     <Link to="/">Return to Home</Link>
//   </div>
//   )
// }