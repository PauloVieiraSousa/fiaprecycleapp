import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import useStyles from './styles';
import { Card } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getShopAsync, selectShops } from '../../store/feature/shops/ShopsSlice';

type StoresScreenProps = NativeStackScreenProps<RootStackParamList, 'Stores'>;


export type Store = {
  name: string,
  category: string,
  address: string,
  favorite: boolean
}

const StoresScreen = ({ route, navigation }: StoresScreenProps) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {data, loading} = useSelector(selectShops);

  useEffect(() => {
      dispatch<any>(getShopAsync());
  }, [dispatch])

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#00C3B1', '#007C70']} style={styles.linearGradient}>
           
           <View style={styles.container}>
             {data?.map( (store, key) => (
                <Card key={key} containerStyle={styles.cardStore}>
                  <View style={styles.viewCardContainer}>
                    <View style={styles.viewIcon}>
                        <FontAwesome5Icon name="store" size={40} color={colors.contrast} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.titleStore}> {store.name}</Text>
                        <Text style={styles.label}>Category: {store.category} </Text>
                        <Text style={styles.label}>Address: {store.address}</Text>
                    </View>
                    <View style={styles.viewIcon}>
                      <FontAwesome5Icon solid={store.favorite} name="heart" size={30} color={colors.contrast}/>
                    </View>
                  </View>
                </Card>
             ))}

           </View>
        </LinearGradient>
      ); 
}

export default StoresScreen;