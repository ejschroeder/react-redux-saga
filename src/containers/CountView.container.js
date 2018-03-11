import { connect } from 'react-redux';
import { CountView as DumbCountView } from '../components/CountView';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(DumbCountView);