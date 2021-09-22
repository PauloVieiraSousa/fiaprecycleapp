import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Text, ThemeProvider } from 'react-native-elements';
import theme from './src/styles/theme';
import { RootStackParamList } from './src/types/RootStackParamListType';
import styles from './styles';

import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import colors from './src/styles/colors';

/* Screens */
import DashboardScreen from './src/screens/Dashboard';
import AccountScreen from './src/screens/Account';
import RecycleScreen from './src/screens/Recycle';
import StoresScreen from './src/screens/Stores';
import LoginScreen from './src/screens/Login';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Login">
              <RootStack.Screen
                  name="Dashboard"
                  options={{   
                    headerShown: false
                  }}
                  component={DashboardScreen}
                />

             <RootStack.Screen
                name="Account"
                options={{   
                  headerBackTitleVisible: false,
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {
                    fontSize: 30, 
                    fontWeight: '700', 
                    color: colors.primary}
                }}
                component={AccountScreen}
              />

              <RootStack.Screen
                name="Recycle"
                options={{   
                  headerBackTitleVisible: false,
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {
                    fontSize: 30, 
                    fontWeight: '700', 
                    color: colors.primary}
                }}
                component={RecycleScreen}
              />


              <RootStack.Screen
                name="Stores"
                options={{   
                  headerBackTitleVisible: false,
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {
                    fontSize: 30, 
                    fontWeight: '700', 
                    color: colors.primary}
                }}
                component={StoresScreen}
              />

              <RootStack.Screen
                name="Login"
                options={{   
                  headerBackTitleVisible: false,
                  headerTransparent: true,
                  headerShown: false,
                  headerTitleStyle: {
                    fontSize: 30, 
                    fontWeight: '700', 
                    color: colors.primary}
                }}
                component={LoginScreen}
              />



            </RootStack.Navigator>
            <View style={styles.footer}>
              <Text>V06-2021</Text>
            </View>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}


export default App;
