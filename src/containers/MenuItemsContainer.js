import { connect } from 'react-redux';
import { MenuItems } from '../components/MenuItems';
import { addItem } from '../store/items/actions';
const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.items
  };
};
const mapActions = {
  addItem
};
export default connect(mapStateToProps, mapActions)(MenuItems);
