import { BandArea } from './BandArea';
import { connect } from '../../../../../api/Provider/connect';
import { getLogin } from "../../../../../api/selectors/selectors";

const mapStateToProps = (state) => ({
  login: getLogin(state)
})

export default connect(
  mapStateToProps
)(BandArea);