import { Header } from './Header';
import { connect } from "../../api/Provider/connect";
import {
  goToLogin,
  goToSearch
} from "../../api/reducers/process/actionCreators";

export const mapDispatchToProps = dispatch => ({
  onGoToLogin: () => dispatch(goToLogin()),
  onGoToSearch: () => dispatch(goToSearch())
})

export default connect(
  undefined,
  mapDispatchToProps
)(Header);