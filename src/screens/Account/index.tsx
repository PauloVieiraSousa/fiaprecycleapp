import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import {Button , Input } from 'react-native-elements';
import { HeaderText } from '../../components';
import { Avatar, Card } from 'react-native-elements';

import useStyles from './styles';
import colors from '../../styles/colors';


type AccountScreenProps = NativeStackScreenProps<RootStackParamList, 'Account'>;

const AccountScreen = ({ route, navigation }: AccountScreenProps) => {
  const styles = useStyles();


    return (
       <View>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#00C3B1', '#007C70']} style={styles.linearGradient}>
          <Card containerStyle={styles.cardAccount}>
            <View style={styles.viewAvatar}>
                  <Avatar
                      rounded
                      title='PS'
                      size="xlarge"
                      overlayContainerStyle={{backgroundColor: colors.green}}
                  />
              </View>
              <View style={styles.viewGroupInputs}>
                  <Input
                    placeholder='Name'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                  />

        	        <Input
                    placeholder='Email'
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                  />

                  <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                  />
              </View>
          </Card>

          </LinearGradient>
          <View style={styles.viewWallet}>
            <View style={styles.viewAddress}>
              <Text style={styles.label}>Wallet Address</Text>
              <Text style={styles.dataText}>0xe04c689c5c0a3771488b970aad43cf2fdb989e9e</Text>
            </View>
            <View style={styles.viewSecret}>
              <Text style={styles.label}>Secret Recovery Phrase </Text>
              <Text style={styles.dataText}>jealous expect hundred young unlock disagree major siren surge acoustic machine catalog</Text>
            </View>
          </View>

          <View style={styles.viewActions}>
            <Button  type="outline" title="OK" containerStyle={styles.button}/>
          </View>

          </View>
      ); 
}

export default AccountScreen;