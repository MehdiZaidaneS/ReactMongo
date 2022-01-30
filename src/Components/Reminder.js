import React from 'react';


class Reminder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [
        {
          name: 'Buy some eggs',
          timestamp: "2018-11-10T13:00:00.141Z"
        }
      ],
      newName: '',
      newTime: ""
    }
  }
 

   addName = (event) =>{
       event.preventDefault()
       console.log("nappia painettu")
       const nameObject = {
        name: this.state.newName,
        timestamp: this.state.newTime,
      } 

      let reminderss = this.state.reminders.concat(nameObject)

      this.state.reminders.map(reminder => 
        reminder.name === this.state.newName ?
        reminderss.pop() :
        this.setState({
          reminders: reminderss,
          newName: "",
          newTime: ""
        })
        )

}
   

   handleNameChange = (event) => {
       console.log(event.target.value)
       this.setState({newName: event.target.value})
   }

   handleTimeChange = (event) =>{
     this.setState({newTime: event.target.value})
   }

  render() {
    

    return (
      <div>
         <p>--------------------------</p>
         <h2>Add Reminder</h2>
         
         <form onSubmit={this.addName}>
           
          <div>
            Topic: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>

          <div>
            Time: <input value={this.state.newTime} onChange={this.handleTimeChange} />
          </div>
            
          <div>
            <button type="submit">Add</button>
          </div>

        </form>

        <h2>Reminders</h2>
        {this.state.reminders.map(reminder => { return (
             <div>
               <p>{reminder.timestamp} {reminder.name}</p>
             </div>  
        )})}
      
      </div>
      
    )
  }
}

export default Reminder
