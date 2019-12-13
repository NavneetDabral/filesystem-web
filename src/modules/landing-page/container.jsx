import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = state => ({ data:state.appReducer});
const mapDispatchToProps = dispatch => ({  });
export default connect(mapStateToProps,mapDispatchToProps)(Component);