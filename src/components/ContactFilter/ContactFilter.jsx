import PropTypes from 'prop-types';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export const ContactFilter = ({ value, onFilterChange }) => {
  return (
    <Label>
      Find contacts by Name:
      <Input type="text" value={value} onChange={onFilterChange} />
    </Label>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
