import React, { Component } from 'react'

export default class HookCounterTwo extends Component {

state={
  person:[
    {
      id:1,
      category:'react',
      title:'react project',
      
      price:120
    },
    {
      id:2,
      category:'html',
      title:'html project',
      price:30
    },
    {
      id:3,
      category:'react',
      title:'react project',
      price:500
    },
    {
      id:4,
      category:'react',
      title:'react project',
      price:100
    }
  ],
  activeBtn:false
}


handleBut1=()=>{
  let filtered = this.state.person.filter(item=>item.category==='react').map(item=>{
    return <div key={item.id}>
      {item.title}
      {item.price}
  
    </div >
  });

  console.log(filtered);
  
  this.setState({
    id:this.state.id,
     category:filtered,
    title:filtered,
    price:this.state.price,
    activeBtn:true
  })
}

handleBut2=()=>{
  let filtered = this.state.person.filter(item=>item.category==='html').map(item=>{
    return <div key={item.id}>
      {item.title}
      {item.price}
    </div >
  });

  console.log(filtered);
  
  this.setState({
    id:this.state.id,
    category:filtered,
    title:filtered,
    price:this.state.price,
    activeBtn:true
  })
}

handleBut3=()=>{
  let filtered = this.state.person.filter(item=>item.category!=='fd').map(item=>{
    return <div key={item.id} >
         {item.title}
      {item.price}

    </div >
  });

  console.log(filtered);
  
  this.setState({
    id:this.state.id,
    category:filtered,
    title:filtered,
    price:this.state.price,
    activeBtn:true
  })
}


  render() {
    return (

      <React.Fragment>

<div>
       
       <button onClick={this.handleBut1}>show data1</button>
       <button onClick={this.handleBut2}>show data 2</button>
       <button onClick={this.handleBut3}>show all data</button>

     </div>


 <div>
   {this.state.activeBtn ?<div  className="title">
       {this.state.title}
       {this.state.price}
</div>:  

<div>
    {this.state.person.map(item=>{
      return <div key={item.id} className="title">
        {item.title}
         {item.price}
    
      </div>
    })}
 </div>}
  </div>    



    
      </React.Fragment>

    )
  }
}
