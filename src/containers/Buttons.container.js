import { connect } from 'react-redux';
import { Buttons as DumbButtons } from '../components/Buttons';
import { increment, decrement } from '../actions/counter';

export default connect(null, { increment, decrement })(DumbButtons);