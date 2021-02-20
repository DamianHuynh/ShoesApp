import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import FormContainer from '../../components/FormContainer';
import TextInput from '../../components/TextInput';

import Footer from './Footer';
import { COLORS, PROPERTIVE } from '../../config/styles';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SCREEN } from '../../navigation/Constant';

const colors = ['#ff8368', COLORS.brightRed];

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(6, 'Password Too Short!')
    .max(12, 'Password Too Long!')
    .required('Password is Required'),
});

export default function Login({ navigation }) {
  return (
    <FormContainer footer={<Footer />}>
      <View style={{ padding: PROPERTIVE.space3 }}>
        <Text style={styles.headerTitle}>Wellcome</Text>
        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            if (values) {
              navigation.navigate(SCREEN.HOME);
            }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={{ marginBottom: PROPERTIVE.space3 }}>
                <TextInput
                  icon="mail"
                  placeholder="Enter your email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errors={errors.email}
                  touched={touched.email}
                />
              </View>
              <View style={{ marginBottom: PROPERTIVE.space3 }}>
                <TextInput
                  icon="lock"
                  placeholder="Enter your password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  errors={errors.password}
                  touched={touched.password}
                  secureTextEntry
                />
              </View>
              <View style={styles.rememberContent}>
                <CheckBox
                  underlayColor="rgba(255,255,255,0.3)"
                  label="Remember Me"
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
                />
              </View>
              <View style={styles.signinContent}>
                <LinearGradient {...{ colors }} style={styles.buttonSignin}>
                  <Button
                    height={50}
                    width={250}
                    underlayColor="rgba(255,255,255,0.3)"
                    onPress={handleSubmit}>
                    <Text style={styles.textSignin}>Log into your account</Text>
                  </Button>
                </LinearGradient>

                <Button
                  style={styles.buttonGoback}
                  onPress={() => {
                    navigation.goBack();
                  }}
                  height={50}
                  width={250}
                  underlayColor={COLORS.lightGray}>
                  <Text>Go back</Text>
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </FormContainer>
  );
}
