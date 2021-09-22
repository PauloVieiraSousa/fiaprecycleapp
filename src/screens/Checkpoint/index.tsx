import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import useStyles from './styles';

interface Dev {
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  location: string;
  latitude?: number;
  longitude?: number;
  html_url: string;
}

const initialRegion = {
  latitude: 49.2576508,
  longitude: -123.2639868,
  latitudeDelta: 100,
  longitudeDelta: 100,
};

type CheckpointScreenProps = NativeStackScreenProps<RootStackParamList, 'Checkpoint'>;

const CheckpointScreen = ({ route, navigation }: CheckpointScreenProps) => {

    const styles = useStyles();
    const [devs, setDevs] = useState<Dev[]>([]);

    const handleOpenGithub = () => {}



    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#00C3B1', '#007C70']} style={styles.linearGradient}>
           <View>
             <Text>Find the checkpoint so you can recycle and get your tokens</Text>
            
           </View>

        </LinearGradient>
      ); 
}

export default CheckpointScreen;