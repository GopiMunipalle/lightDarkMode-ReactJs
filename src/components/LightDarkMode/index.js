// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {theDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({theDarkMode: !prevState.theDarkMode}))
  }

  render() {
    const {theDarkMode} = this.state
    const changeMode = theDarkMode ? 'light-mode' : 'dark-mode'
    const buttonText = theDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${changeMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
