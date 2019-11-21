import { connect } from '../../../../../../api/Provider/connect';
import { Login as _Login } from './Login';
import { goToBandArea } from "../../../../../../api/reducers/reducers";

const mapDispatchToProps = dispatch => ({
  onLogin: (state) => dispatch(goToBandArea(state))
})

export const Login = connect(
  undefined,
  mapDispatchToProps
)(_Login);