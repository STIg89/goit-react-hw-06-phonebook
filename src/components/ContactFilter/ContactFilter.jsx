import { Label, Input } from 'components/ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, getFilterValue } from 'redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const onChange = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by Name:
      <Input type="text" value={filterValue} onChange={onChange} />
    </Label>
  );
};
