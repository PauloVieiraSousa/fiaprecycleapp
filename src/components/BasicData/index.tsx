import React from 'react';
import { View,  } from 'react-native'
import { Avatar, Button, Text } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../styles/colors';

import useStyles from './styles';

type BasicDataProps = {
    name: string;
    email: string;
    navigateEdit: () => void
}

const BasicData: React.FC<BasicDataProps> = ({name, email, navigateEdit}: BasicDataProps) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <View style={styles.viewAvatar}>
                <Avatar
                    rounded
                    title='PS'
                    size="large"
                    overlayContainerStyle={{backgroundColor: colors.green}}
                />
            </View>

            <View style={styles.viewData}>
                <Text style={styles.label}>{name}</Text>
                <Text style={styles.label}>{email}</Text>
            </View>

            <View style={styles.viewButton}>
                <Button
                    icon={
                    <FontAwesome5Icon  name={'edit'} solid size={20} style={styles.iconEdit}/>
                    }
                type="clear" 
                onPress={ () => navigateEdit()}>
                    
            </Button>
            </View>

        </View>
    )
}

export default BasicData;