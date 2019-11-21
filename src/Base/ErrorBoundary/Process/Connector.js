import { Process as _Process } from './Process';
import { connect } from "../../../api/Provider/connect";
import { goToBands } from '../../../api/reducers/reducers';

const mapStateToProps = state => ({
  process: state.process
});

const mapDispatchToProps = dispatch => ({
  goToBands: () => dispatch(goToBands())
});

export const Process = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Process);
