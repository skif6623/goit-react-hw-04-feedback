import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return (good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage =
      this.countPositiveFeedbackPercentage().toFixed(0);

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions onLeaveFeedback={this.addFeedback}>
          good
        </FeedbackOptions>
        <FeedbackOptions onLeaveFeedback={this.addFeedback}>
          neutral
        </FeedbackOptions>
        <FeedbackOptions onLeaveFeedback={this.addFeedback}>
          bad
        </FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
