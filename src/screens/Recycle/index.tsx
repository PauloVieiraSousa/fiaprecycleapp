import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Card } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';
import { BasicData } from '../../components';
import colors from '../../styles/colors';
import QRCode from 'react-native-qrcode-svg';


type RecycleScreenProps = NativeStackScreenProps<RootStackParamList, 'Recycle'>;

const RecycleScreen = ({ route, navigation }: RecycleScreenProps) => {
    const styles = useStyles();

    const [qrValue, setQrValue] = useState('');
  
    const navigate = (view: any) => {
      navigation.navigate(view);
    }

    return (
      <React.Fragment>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#00C3B1', '#007C70']} style={styles.linearGradient}>

            <View style={{marginTop: 60}}>
              <BasicData
                  email={'paulogabrielvieira@gmail.com'} 
                  navigateEdit={() => navigate('Account')} 
                  name={'Paulo Gabriel'}
              />
            </View>
            

            <Card containerStyle={styles.card}>
              <View style={styles.viewHeader}>
                <Text style={styles.title}>QRCode Checkpoint</Text>
              </View>

              <View style={styles.viewQrCode}>
                <QRCode 
                  value={qrValue ? qrValue : 'NA'} 
                  size={150} 
                  color="black" 
                  backgroundColor="white" 
                  logoSize={30} 
                  logoMargin={2} 
                  logoBorderRadius={15} 
                  logoBackgroundColor="yellow" 
                /> 
              </View>


              <View style={styles.viewFooterCard}>
                <Text style={styles.paragraph}>Checkpoint code for check your recycling</Text>
              </View>

            </Card>    
           </LinearGradient>
           <View style={styles.viewAttention}>
              <FontAwesome5 name="clock" size={30} color={colors.yellow}/>
             <Text style={styles.paragraphWarning}>Please wait while we are validating your {'\n'} operation</Text>
           </View>
      </React.Fragment>
      ); 
}

export default RecycleScreen;