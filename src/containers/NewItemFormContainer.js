import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { addItem } from '../store/items/actions';
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, price) => dispatch(addItem(name, price))
});
export default connect(null, mapDispatchToProps)(NewItemForm);
