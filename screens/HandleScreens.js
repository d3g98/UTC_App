import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashSc from './FlashScreen';
import MainSc from './Main';
import Login_Register_Sc from './Login_Register';
import EditProfileSc from './EditProfile';

const Stack = createNativeStackNavigator();

class HandleScreens extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="FlashSc" component={FlashSc} options={{ headerShown: false }} />
                    <Stack.Screen name="Login_Register_Sc" component={Login_Register_Sc} options={{ headerShown: false }} />
                    <Stack.Screen name="MainSc" component={MainSc} options={{ headerShown: false }} />
                    <Stack.Screen name="EditProfileSc" component={EditProfileSc} options={{ headerShown: true, title: "Chỉnh sửa thông tin" }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default HandleScreens;