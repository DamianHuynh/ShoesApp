import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import { PROPERTIVE } from '../../config/styles';
import styles from './styles';
const colorsFB = ['#4c669f', '#3b5998', '#192f6a'];

const Footer = () => (
  <>
    <View style={{ marginBottom: PROPERTIVE.space2 }}>
      <LinearGradient colors={colorsFB} style={styles.buttonFB}>
        <Button
          underlayColor="rgba(255,255,255,0.1)"
          height={50}
          width={250}
          onPress={() => {
            console.log('red');
          }}>
          <View style={styles.buttonFBContent}>
            <FeatherIcon name="facebook" color="white" size={30} />
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </View>
        </Button>
      </LinearGradient>
    </View>
    <TouchableOpacity
      onPress={() => {
        console.log('red');
      }}>
      <View style={styles.navigateContent}>
        <Text style={styles.textRight}>Don't have an account?</Text>
        <Text style={styles.textLink}>Sign Up here</Text>
      </View>
    </TouchableOpacity>
  </>
);

export default Footer;
