import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      start_time: '',
      finish_time: '',
      total_time: '',
      history: [],
      button_value: 'Start'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(this.state.start_time === ""){
      this.setState({
        'task': event.target.value,
        'start_time': new Date().toLocaleTimeString()
      })
    }else{
      this.setState({
        'task': event.target.value
      })
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.button_value === "Start"){
      this.setState({
        'button_value': 'Stop',
        'start_time': new Date().toLocaleTimeString(),
        'finish_time': '',
      })
    }

    else if(this.state.button_value === "Stop"){
      this.setState({
        'button_value': 'Start',
        'finish_time': new Date().toLocaleTimeString()
      })

      this.state.history.push({
        'start_time': this.state.start_time,
        'finish_time': new Date().toLocaleTimeString(),
        'task': this.state.task
      })
    }
  }

  render() {
    const history = this.state.history;
    return (
      <div>
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <input type="submit" value={this.state.button_value} />
          </form>
          </div>
          <div className="search-result">
          <table style={{
            'width': '100%',
            'textAlign': 'left'
            }}>
            <thead>
              <tr>
                <th>Task</th>
                <th>Start Time</th>
                <th>Finish Time</th>
              </tr>
            </thead>
            <tbody >
              {history.map((item) =>
                <tr key={JSON.stringify(item)}
                >
                  <td>{item.task}</td>
                  <td>{item.start_time}</td>
                  <td>{item.finish_time}</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
