import { Band as _Band } from './Band';
import { connect } from '../../../../../api/Provider/connect';

export const Band = connect()(
  _Band
);