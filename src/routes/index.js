import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '~/contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutesT from './app.routes.teacher';
import AppRoutes from './app.routes';

export default () => {
  const { signed, loading, haveTeacher } = useContext(AuthContext);

  console.log(haveTeacher);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (signed) {
    if (haveTeacher) {
      return <AppRoutesT />;
    }
    return <AppRoutes />;
  }
  return <AuthRoutes />;
};
