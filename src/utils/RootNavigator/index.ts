import * as React from 'react';

export const navigationRef = React.createRef<any>();

export const RootNavigator = {
  navigate: (name: any, params = {}) => {
    navigationRef.current?.navigate(name, params);
  },
  goBack: () => {
    navigationRef.current?.goBack();
  },
  dangerouslyGetState: () => {
    return navigationRef.current?.dangerouslyGetState();
  },
};
