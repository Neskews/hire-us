import React from 'react';
import { useMiddleware } from './useMiddleware';
import { Api } from './Provider';

export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => Component => props => (
  <Api.Consumer>
    {apiProps => {
      if (!apiProps) return <Component {...props} />;

      const { state } = apiProps;
      let componentProps = props;

      if (mapStateToProps) {
        componentProps = {
          ...componentProps,
          ...mapStateToProps(state, props)
        };
      }

      if (mapDispatchToProps) {
        componentProps = {
          ...componentProps,
          ...mapDispatchToProps(
            useMiddleware(apiProps),
            props,
            state
          )
        };
      }

      return <Component {...componentProps} />;
    }}
  </Api.Consumer>
);