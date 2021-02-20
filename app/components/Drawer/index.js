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
            width: '100%',
          }}>
          <Image
            source={{
              uri:
                'https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png',
            }}
            style={{
              height: 170,
              aspectRatio: 1,
              // borderRadius: 60,
            }}
            resizeMode="contain"
          />
        </View>
        <DrawerItem
          labelStyle={{ fontFamily: 'Poppins-Regular', fontSize: 18 }}
          label="Login"
          onPress={() => props.navigation.navigate(SCREEN.LOGIN)}
        />
      </View>
      {/* <View>
        <DrawerItem
          label="Login"
          onPress={() => props.navigation.navigate(SCREEN.LOGIN)}
        />
      </View> */}
    </DrawerContentScrollView>
  );
}
