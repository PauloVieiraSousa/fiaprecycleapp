import React, { useState } from 'react';
import { Card, Button } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View,  } from 'react-native'
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import useStyles from './styles';

type HeaderTextProps = {
    title: string
}

const HeaderText: React.FC<HeaderTextProps> = ({title}: HeaderTextProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text style={styles.title} adjustsFontSizeToFit>{title}</Text>
        </View>
    )
}

export default HeaderText;