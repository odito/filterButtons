import React, { Component } from 'react'

export default class slider2 extends Component {

    state={
        count:1,
        anim:false
    }

   
  handleLeft = ()=>{
  
    console.log('clecked1');
     
    let neCount = this.state.count +1;

 

    this.setState({
       count:neCount,
       anim:true,
   }) 

   this.timer();

  

   if(this.state.count===4){
       this.setState({
           count:1
       }) 
   }




     console.log(this.state.count);

     
  }

  handleRight = (timer)=>{
    console.log('clecked2');

      
    let neCount = this.state.count -1;

   

     this.setState({
       count:neCount,
       anim:true
   }) 

   this.timer();

    

   if(this.state.count===1){
       this.setState({
           count:4
       }) 
   }
      
 }


//  anim function
componentDidMount(){
   this.timer();


}

  timer=()=>{
    setTimeout(()=>{
        this.setState({
            anim:false
        })
    },500)
}





    render() {

        return (
    <div>
    
     <div className="photos" className={this.state.anim?'newPhotos':''}>
         <img src={`./images/decor-${this.state.count}.jpg`} alt="photo"/>
      </div>
            <button className="bt1" onClick={this.handleLeft}>button1</button>
            <button className="bt2" onClick={this.handleRight}>button2</button>
           
     </div>
        )
    }
}
