import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { BasicData, CardBalance, HeaderText } from '../../components';
import { ListItem, Button } from 'react-native-elements'
import colors from '../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardAsync, selectDashboard } from '../../store/feature/dashboard/dashboardSlice';

type DashboardProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const DashboardScreen = ({ route, navigation }: DashboardProps) => {

    const dispatch = useDispatch();

    const {data: dashboard, loading} = useSelector(selectDashboard);
    const list = [
        {
            title: 'Recycle',
            icon: 'recycle',
            name: 'Recycle'
        },
        {
            title: 'Stores',
            icon: 'store',
            name: 'Stores'
        }
    ]

    useEffect(() => {
        dispatch(getDashboardAsync());
    }, [dispatch])
  
 

    const navigate = (view: any): void => {
        navigation.navigate(view);
    }


      
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#00C3B1', '#007C70']} style={styles.linearGradient}>

            <HeaderText title="Dashboard"/>
            <BasicData
                email={dashboard?.user.email || ""} 
                navigateEdit={() => navigate('Account')} 
                name={dashboard?.user.name || ""}
            />
            <CardBalance title="teste" balanceValue={dashboard?.wallet.balance || 0} />
            <View style={styles.navigation}>
            {
                    list.map((item, i) => (
                    <ListItem key={i} bottomDivider onPress={() => navigate(item.name)}>
                         <FontAwesome5 name={item.icon} solid size={20} color={colors.contrast}/>
                         <ListItem.Content >
                             <ListItem.Title style={{fontSize: 20, color: colors.contrast}}>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    ))
            }
            </View>

            <View>
              <Button   
              type="clear" title="Sign Out" 
              titleStyle={{color: colors.contrast, marginLeft: 10}}
              containerStyle={styles.button} 
              onPress={() => navigate("Login")}
              icon={
                <FontAwesome5 name="sign-out-alt" solid size={20} color={colors.contrast}/>
              }
              />   
            </View>


        </LinearGradient>
      ); 
}

export default DashboardScreen;