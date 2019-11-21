import { BandArea as _BandArea } from './BandArea';
import { connect } from '../../../../../api/Provider/connect';
import { getLogin } from "../../../../../api/selectors/selectors";

const mapStateToProps = (state) => ({
  login: getLogin(state)
})

export const BandArea = connect(
  mapStateToProps
)(_BandArea);