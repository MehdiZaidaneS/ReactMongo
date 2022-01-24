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
      newName: ''
    }
  }
 
   addName = (event) =>{
       event.preventDefault()
       console.log("nappia painettu")
       const nameObject = {
        name: this.state.newName,
        timestamp: new Date().toISOString(),
      }

      const reminderss = this.state.reminders.concat(nameObject)
       
      this.state.reminders.map(reminder => 
        this.state.newName === reminder.name ?
        this.setState({newName:''})  (alert("Stop")):
            this.setState({
               reminders: reminderss,
               newName: ''
            })
        )
   }

   

   handleNameChange = (event) => {
       console.log(event.target.value)
       this.setState({newName: event.target.value})
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
            <button type="submit">Add</button>
          </div>
        </form>

        <h2>Reminders</h2>
        {this.state.reminders.map(reminder => <p>{reminder.name}</p>)}
        
        <h2>At time:</h2>
        ...
        <div>
            debug: {this.state.newName}
        </div>
      </div>
      
    )
  }
}

export default Reminder
