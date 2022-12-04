import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  margin-right: 10px;
  padding: 10px 15px;
  background-color: ${({ children }) => {
    switch (children) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'yellow';
      case 'bad':
        return 'red';
      default:
        return;
    }
  }};
  border: none;
  border-radius: 4px;
  ::first-letter {
    text-transform: uppercase;
  }
`;
