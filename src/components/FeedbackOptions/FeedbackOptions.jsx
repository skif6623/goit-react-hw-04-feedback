import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, children }) => {
  return (
    <FeedbackBtn name={children} type="button" onClick={onLeaveFeedback}>
      {children}
    </FeedbackBtn>
  );
};
