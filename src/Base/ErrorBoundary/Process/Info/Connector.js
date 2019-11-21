import { connect } from '../../../../api/Provider/connect';
import { Info as _Info } from './Info';
import { getHireBand } from "../../../../api/selectors/hire/hire";

export const mapStateToProps = state => ({
  band: getHireBand(state)
})

export const Info = connect(
  mapStateToProps
)(_Info);