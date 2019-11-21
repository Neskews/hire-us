import { connect } from '../../../../api/Provider/connect';
import { goToBands } from "../../../../api/reducers/reducers";
import { Search as _Search } from './Search';
import { 
  setEventFilter,
  setKindFilter
} from "../../../../api/reducers/filter/actionCreators";
import {
  getKindFilter,
  getEventFilter
} from '../../../../api/selectors/filter/filter';

const mapStateToProps = state => ({
  event: getEventFilter(state),
  kind: getKindFilter(state)
});

const mapDispatchToProps = dispatch => ({
  onGoToBands: () => dispatch(goToBands()),
  onSetEventFilter: event => dispatch(setEventFilter(event)),
  onSetKindFilter: kind => dispatch(setKindFilter(kind))
});

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Search);