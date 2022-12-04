import PropTypes from 'prop-types';

import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, children }) => {
  return (
    <FeedbackBtn name={children} type="button" onClick={onLeaveFeedback}>
      {children}
    </FeedbackBtn>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
