import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "../components/Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = ({ target: { name } }) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }))
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round(good / this.countTotalFeedback() * 100);
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  render() {
     const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message={"kjshvjhbdj"}/>}
        </Section>
      </div>
    )
  }
};
