import React, {Component} from 'react'
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'
import css from './App.module.css'



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
onLeaveFeedback = state => {
  this.setState(prevState => ({
    [state]: prevState[state] + 1
  }))
}
countTotalFeedback() {
  const {good, neutral, bad} = this.state 
  return good + neutral + bad
}

countPositiveFeedbackPercentage = () => {
  const {good} = this.state
  const total = this.countTotalFeedback()
  return Math.round((good/ total) * 100)
}

render() {
  const {good, neutral, bad} = this.state
  const options = Object.keys(this.state)
  const countTotalFeedback = this.countTotalFeedback()
  const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage()
  return (
    <div className={css.App}>
 <Section title="Please leave feedback">
 <FeedbackOptions 
 options = {options}
 onLeaveFeedback={this.onLeaveFeedback}/>
 </Section>
 <Section title="Statistics">
  {countTotalFeedback !==0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>) : (<Notification message="There is no feedback"/>)}
 </Section>
    </div>
  )
}
}

export default App