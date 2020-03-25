import React, { Component } from 'react'

export default class slider extends Component {

    state={
        count:1,
    }

   
  handleLeft = ()=>{
  
    console.log('clecked1');
     
    let neCount = this.state.count +1;

    this.setState({
       count:neCount
   }) 

   if(this.state.count===4){
       this.setState({
           count:1
       }) 
   }


     console.log(this.state.count);

     
  }

  handleRight = ()=>{
    console.log('clecked2');

      
    let neCount = this.state.count -1;

    this.setState({
       count:neCount
   }) 

   if(this.state.count===1){
       this.setState({
           count:4
       }) 
   }
      
 }




    render() {

        return (
    <div>
    
     <div className="back" style={{background:`url(./images/decor-${this.state.count}.jpg) ` }}>

      </div>
            <button className="bt1" onClick={this.handleLeft}>button1</button>
            <button className="bt2" onClick={this.handleRight}>button2</button>
           
     </div>
        )
    }
}
