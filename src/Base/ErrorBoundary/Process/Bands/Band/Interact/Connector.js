import { connect } from '../../../../../../api/Provider/connect';
import { goToInfo } from "../../../../../../api/reducers/reducers";
import { Interact as _Interact } from './Interact';

const mapDispatchToProps = dispatch => ({
  onGoToInfo: bandName => dispatch(goToInfo(bandName))
});

export const Interact = connect(
  undefined,
  mapDispatchToProps
)(_Interact);