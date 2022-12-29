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

// Реалізація через useReducer--------------------------------------------------------------------------------------------------------------------------------------------------

// import { useReducer } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';
// import { GlobalStyle } from './GlobalStyle';
// import { Box } from './Box';

// function leaveFeedback(state, actions) {
//   switch (actions.type) {
//     case 'good':
//       return { ...state, good: state.good + actions.payload };
//     case 'neutral':
//       return { ...state, neutral: state.neutral + actions.payload };
//     case 'bad':
//       return { ...state, bad: state.bad + actions.payload };

//     default:
//       return state;
//   }
// }

// export function App() {
//   const [state, dispatch] = useReducer(leaveFeedback, {
//     good: 0,
//     bad: 0,
//     neutral: 0,
//   });

//   const countTotalFeedback = () => {
//     const { good, bad, neutral } = state;
//     return good + bad + neutral;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     return (state.good / countTotalFeedback()) * 100;
//   };

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <Box display="flex" justifyContent="center" gridGap={20} mb={20}>
//           <FeedbackOptions
//             onLeaveFeedback={() => dispatch({ type: 'good', payload: 1 })}
//           >
//             good
//           </FeedbackOptions>
//           <FeedbackOptions
//             onLeaveFeedback={() => dispatch({ type: 'neutral', payload: 1 })}
//           >
//             neutral
//           </FeedbackOptions>
//           <FeedbackOptions
//             onLeaveFeedback={() => dispatch({ type: 'bad', payload: 1 })}
//           >
//             bad
//           </FeedbackOptions>
//         </Box>
//         {countTotalFeedback() === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={state.good}
//             neutral={state.neutral}
//             bad={state.bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage().toFixed(0)}
//           />
//         )}
//       </Section>
//       <GlobalStyle />
//     </>
//   );
// }
