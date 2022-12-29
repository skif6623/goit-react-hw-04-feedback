import { useSelector } from 'react-redux';
import { Notification } from 'components/Notification/Notification';
import { StatisticsTitle } from './Statistics.styled';

export const Statistics = () => {
  const state = useSelector(value => value);

  const countTotalFeedback = () => {
    const { good, bad, neutral } = state;
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return (state.good / countTotalFeedback()) * 100;
  };

  const { good, bad, neutral } = state;

  return (
    <>
      {countTotalFeedback() !== 0 ? (
        <>
          <StatisticsTitle>Statistics</StatisticsTitle>
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
              <p>Total: {countTotalFeedback()}</p>
            </li>
            <li>
              <p>
                Positive feedback:{' '}
                {good === 0 ? 0 : countPositiveFeedbackPercentage().toFixed(0)}%
              </p>
            </li>
          </ul>
        </>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};
