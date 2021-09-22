import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import styles from './styles'




type SendTokensScreenProps = NativeStackScreenProps<RootStackParamList, 'SendTokens'>;

const SendTokensScreen = ({ route, navigation }: SendTokensScreenProps) => {

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#00C3B1', '#007C70']} style={styles.linearGradient}>
           

        </LinearGradient>
      ); 
}

export default SendTokensScreen;