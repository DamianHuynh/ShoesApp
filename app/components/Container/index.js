import React from 'react';
import { View, SafeAreaView } from 'react-native';
import * as Themes from '../../config/styles';

export default function Container({ children, style }) {
  return (
    <SafeAreaView style={[Themes.appStyle.WrapScreen, style]}>
      <View style={Themes.appStyle.WrapContent}>{children}</View>
    </SafeAreaView>
  );
}
