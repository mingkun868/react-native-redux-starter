import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';

const options = {
  withRef: true
};

function connectComponent(ViewComponent, { mapStateToProps, mapDispatchToProps, mergeProps } = {}) {
  return connect(
    mapStateToProps || function (state) {
      return {};
    },
    mapDispatchToProps || function (dispatch) {
      return {
        actions: bindActionCreators(actions, dispatch)
      }
    },
    mergeProps,
    options
  )(ViewComponent);
}

module.exports = connectComponent;