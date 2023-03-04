import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';
import { removeItem } from '../store/items/actions';
function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    remove: () => dispatch(removeItem(ownProps.uuid))
  };
}

export default connect(null, mapDispatchToProps)(MenuItem);
