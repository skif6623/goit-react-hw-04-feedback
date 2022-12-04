export const FeedbackOptions = ({ onLeaveFeedback, children }) => {
  return (
    <button name={children} type="button" onClick={onLeaveFeedback}>
      {children}
    </button>
  );
};
