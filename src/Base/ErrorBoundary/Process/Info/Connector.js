import { connect } from '../../../../api/Provider/connect';
import { Info } from './Info';
import { getHireBand } from "../../../../api/selectors/hire/hire";

export const mapStateToProps = state => ({
  band: getHireBand(state)
})
export default connect(
  mapStateToProps
)(Info);