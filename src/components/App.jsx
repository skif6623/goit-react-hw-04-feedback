import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Box display="flex" justifyContent="center" gridGap={20} mb={20}>
          <FeedbackOptions onLeaveFeedback={() => setGood(state => state + 1)}>
            good
          </FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback={() => setNeutral(state => state + 1)}
          >
            neutral
          </FeedbackOptions>
          <FeedbackOptions onLeaveFeedback={() => setBad(state => state + 1)}>
            bad
          </FeedbackOptions>
        </Box>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage().toFixed(0)}
          />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = e => {
//     const { name } = e.currentTarget;

//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, bad, neutral } = this.state;

//     return good + bad + neutral;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;

//     return (good / this.countTotalFeedback()) * 100;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage =
//       this.countPositiveFeedbackPercentage().toFixed(0);

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <Box display="flex" justifyContent="center" gridGap={20} mb={20}>
//             <FeedbackOptions onLeaveFeedback={this.addFeedback}>
//               good
//             </FeedbackOptions>
//             <FeedbackOptions onLeaveFeedback={this.addFeedback}>
//               neutral
//             </FeedbackOptions>
//             <FeedbackOptions onLeaveFeedback={this.addFeedback}>
//               bad
//             </FeedbackOptions>
//           </Box>
//           {totalFeedback === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//         <GlobalStyle />
//       </>
//     );
//   }
// }
