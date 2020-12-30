import React from 'react';
import { View, SafeAreaView } from 'react-native';
import * as Themes from '../../config/styles';

export default function Container({ children }) {
  return (
    <SafeAreaView style={Themes.appStyle.WrapScreen}>
      <View style={Themes.appStyle.WrapContent}>{children}</View>
    </SafeAreaView>
  );
}
