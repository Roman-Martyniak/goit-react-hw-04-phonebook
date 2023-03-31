import PropTypes from 'prop-types';
import { Item, Text, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number, OnContactDelete }) => {

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button
        type="button"
        onClick={() => {
          OnContactDelete(id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  OnContactDelete: PropTypes.func.isRequired,
};

export default ContactItem;
