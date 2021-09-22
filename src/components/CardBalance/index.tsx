import React, { useState } from 'react';
import { Card, Button } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View,  } from 'react-native'
import { Text } from 'react-native-elements';
import useStyles from './styles';
import colors from '../../styles/colors';

export type CardBalanceProps = {
    title: string,
    balanceValue: number
}

const CardBalance:React.FC<CardBalanceProps> = ({ title, balanceValue }: CardBalanceProps) => {
    const [showBalance, setShowBalance] = useState<boolean>(true); 
    const styles = useStyles();
    return (

    <Card containerStyle={styles.card}>
       <View style={styles.cardHeader}>

                <View style={styles.viewTitle}>
                    <FontAwesome5 name={'wallet'} size={20} color={colors.contrast}/>
                    <Text  style={styles.title}>Balance</Text>
                </View>
            
                <Button
                    icon={
                    showBalance ? 
                    <FontAwesome5 name={'eye'} solid size={20} color={colors.contrast}/>:
                    <FontAwesome5 name={'eye-slash'} solid size={20} color={colors.contrast}/>
                    }
                type="clear" 
                onPress={ () => setShowBalance(!showBalance)}>
            </Button>
        </View>

        <Card.Divider />
        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <View style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', width: 200}}>

                <View style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20, color: colors.black, paddingBottom: 10}}>ReC:</Text>
                    <Text style={{ fontSize: 70, fontWeight: '700',  color: colors.black}}> {showBalance? balanceValue : "------"}</Text>
                </View>

                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: colors.contrast}}>reCycle Coin</Text>
                </View>
            </View>
            

            <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                <Text  style={{ fontSize: 15, color: colors.contrast}}>Total coins in wallet</Text>
            </View>
        </View>
      



    </Card>
)}


export default CardBalance;

