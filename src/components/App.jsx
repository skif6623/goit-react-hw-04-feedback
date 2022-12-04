import React, { Component } from 'react';
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
    const positivePersentage =
      this.countPositiveFeedbackPercentage().toFixed(0);

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button name="good" type="button" onClick={this.addFeedback}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.addFeedback}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={this.addFeedback}>
          Bad
        </button>
        <p>Statistics</p>
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>{' '}
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {totalFeedback}</p>
          </li>
          <li>
            <p>Positive feedback: {good === 0 ? 0 : positivePersentage}%</p>
          </li>
        </ul>
      </div>
    );
  }
}
