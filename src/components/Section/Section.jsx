import PropTypes from 'prop-types';
import { FeedbackSection, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
