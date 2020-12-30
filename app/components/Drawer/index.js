import React from 'react';
import { Image, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { SCREEN } from '../../navigation/Constant';
import { COLORS } from '../../config/styles';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        paddingLeft: 10,
      }}>
      <View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            aspectRatio: 1,
            borderWidth: 1,
            borderColor: COLORS.darkGray,
            borderRadius: 60,
          }}>
          <Image
            source={{ uri: 'http://svcy3.myclass.vn/images/user-icon.png' }}
            style={{
              width: 79,
              aspectRatio: 1,
              borderRadius: 60,
            }}
          />
        </View>
        <DrawerItem
          label="Login"
          onPress={() => props.navigation.navigate(SCREEN.LOGIN)}
        />
      </View>
      <View>
        <DrawerItem
          label="Login"
          onPress={() => props.navigation.navigate(SCREEN.LOGIN)}
        />
      </View>
    </DrawerContentScrollView>
  );
}
