import { Bands } from './Bands';
import { connect } from '../../../../api/Provider/connect';
import { getBands } from "../../../../api/selectors/selectors";

const mapStateToProps = state => ({
  bands: getBands(state)
})

export default connect(
  mapStateToProps
)(Bands);