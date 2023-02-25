import { Component } from "react";

export class App extends Component {
  state ={
  good: 0,
  neutral: 0,
  bad: 0}
  handleIncrement = (e)=>{
   const value = e.currentTarget.textContent;
   console.log(value)
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
    
  }
  countTotalFeedback = ()=>{
    return this.state.good+this.state.neutral+this.state.bad }
countPositiveFeedbackPercentage = () =>{
return ((this.state.good * 100) / this.countTotalFeedback())}
  render(){
    const totalFeetback = this.countTotalFeedback();
     return (
    <div>
   <h2>Please leave feedback</h2>
   <button type='button' onClick={this.handleIncrement}>good</button>
   <button type='button' onClick={this.handleIncrement}>neutral</button>
   <button type='button' onClick={this.handleIncrement}>bad</button>
   {totalFeetback !==0 ?(<div> <h2>Statistics</h2>
     <p>Good:{this.state.good}</p>
     <p>Neutral:{this.state.neutral}</p>
     <p>Bad:{this.state.bad}</p>
     <p>Total: {this.countTotalFeedback()}</p>
     <p>Positive feedback:{this.countPositiveFeedbackPercentage()} %</p></div>) : (<p>There is no feedback</p>)}
    
    </div>
  );}
 
};
