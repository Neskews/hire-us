import { Heading as _Heading } from './Heading';
import { connect } from "../../../../../api/Provider/connect";
import { getFilterArray } from "../../../../../api/selectors/filter/filter";

const mapStateToProps = state => ({
  filterArray: getFilterArray(state)
});

export const Heading = connect(
  mapStateToProps
)(_Heading);