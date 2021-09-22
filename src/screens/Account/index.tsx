import React, { useEffect, useState } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import {Button , Input } from 'react-native-elements';
import { HeaderText } from '../../components';
import { Avatar, Card } from 'react-native-elements';

import useStyles from './styles';
import colors from '../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountAsync, postAccountAsync, selectAccount } from '../../store/feature/account/AccountSlice';
import { FormUser } from '../../types/FormUserType';


type AccountScreenProps = NativeStackScreenProps<RootStackParamList, 'Account'>;


const AccountScreen = ({ route, navigation }: AccountScreenProps) => {
  const styles = useStyles();

    const dispatch = useDispatch();
    const {data: account, loading} = useSelector(selectAccount);

    const [user, setUser] = useState<FormUser>({name: "", email: "", password: ""});

    useEffect(() => {
      dispatch<any>(getAccountAsync())
    }, [dispatch])

    useEffect(() => {
      if(account){
        setUser({name: account.user.name, email: account.user.email, password: ""})
      }
    }, [account])


    const changePersonalData = (formUser : FormUser) => {
      dispatch(postAccountAsync(formUser)) 
    }


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
                    value={user?.name}
                    onChangeText={(value) => setUser({...user, name: value})}
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                  />

        	        <Input
                    placeholder='Email'
                    value={user?.email}
                    onChangeText={(value) => setUser({...user, email: value})}
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                  />

                  <Input
                    placeholder='Password'
                    value={user?.password}
                    onChangeText={(value) => setUser({...user, password: value})}
                    secureTextEntry={true}
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                  />
              </View>
          </Card>

          </LinearGradient>
          <View style={styles.viewWallet}>
            <View style={styles.viewAddress}>
              <Text style={styles.label}>Wallet Address</Text>
              <Text style={styles.dataText}>{account?.wallet.address}</Text>
            </View>
            <View style={styles.viewSecret}>
              <Text style={styles.label}>Secret Recovery Phrase </Text>
              <Text style={styles.dataText}>{account?.wallet.mnemonics}</Text>
            </View>
          </View>

          <View style={styles.viewActions}>
            <Button  type="outline" title="OK" containerStyle={styles.button} onPress={() => changePersonalData(user)} loading={loading === 'pending'}/>
          </View>

          </View>
      ); 
}

export default AccountScreen;