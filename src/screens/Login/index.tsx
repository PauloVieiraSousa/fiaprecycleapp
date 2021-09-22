import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import styles from './styles'
import { ButtonGroup, Card, Input, Button, Divider } from 'react-native-elements';
import useStyles from './styles';
import { color } from 'react-native-elements/dist/helpers';
import colors from '../../styles/colors';




type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ route, navigation }: LoginScreenProps) => {


  const navigateDashboard = () => {
    navigation.navigate("Dashboard");
  }


  const styles = useStyles (); 
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#00C3B1', '#007C70']} style={styles.linearGradient}>
           <Card containerStyle={styles.cardLogin}>
             <Text style={styles.title}>Login</Text>
             <Divider />

                  <View style={styles.viewInputGroup}>
                    <Input
                      placeholder='Email'
                      leftIcon={{ type: 'font-awesome', name: 'user', color: colors.contrast}}
                    />
                    
                    <Input
                      placeholder='Password'
                      secureTextEntry={true}
                      leftIcon={{ type: 'font-awesome', name: 'lock',  color: colors.contrast }}
                    />
                  </View>
                  <View>
                    <Button type="outline" title="Sign In" containerStyle={styles.button} onPress={navigateDashboard}/>                    
                  </View>

           </Card>
        </LinearGradient>
      ); 
}

export default LoginScreen;