/* eslint-disable react/prop-types */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default ({ children }) => {
  return (
    <LinearGradient
      colors={[
        '#ffef52',
        '#fded4f',
        '#fee54d',
        '#fddd4c',
        '#fed24b',
        '#fed24b',
        '#ffbe4a',
        '#fbaf41',
      ]}
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </LinearGradient>
  );
};
