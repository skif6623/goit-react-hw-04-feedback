import { FeedbackSection, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </FeedbackSection>
  );
};
