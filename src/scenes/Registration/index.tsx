import React, { FC } from 'react';
import { Image } from 'native-base';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { FormProvider, useForm } from 'react-hook-form';
import SingleStep from './SingleStep';

//Here we have proces of Registration, I create here useForm, and context with FormProvider.
//For view we have same style of Header and same component for each step.
//I decide to create array steps - if I want to add new step I just add new object to array.

const Stack = createStackNavigator();


const RegistrationForm: FC = () => {

    const methods = useForm();

    const optionsForStackForm = {
        headerShown: true,
        headerStatusBarHeight: 20,
        headerTintColor: 'white',
        headerTitle: () => (<Image source={require('../../assets/images/logo1.png')} style={{ width: 217, height: 32 }} />),
        headerTransparent: true,
        ...TransitionPresets.SlideFromRightIOS,
    }
    const steps = [
        {name: 'name', next: 'phone', label: 'Imię i nazwisko'},
        {name: 'phone', next: 'email', label: 'Numer telefonu'},
        {name: 'email', next: 'password', label: 'Adres e-mail'},
        {name: 'password', next: 'account', label: 'Hasło'},
        {name: 'account', next: 'submit'}
    ]

    return (
        <FormProvider {...methods}>
        <Stack.Navigator>
            {steps.map((item, index) => <Stack.Screen
                key={item.name}
                name={item.name}
                options={{
                    ...optionsForStackForm,
                }}
                component={() => (
                   <SingleStep name={item.name} next={item.next} step={index+1} label={item.label}/>
                )}
            />)}
          
        </Stack.Navigator>
        </FormProvider>

    );
};
export default RegistrationForm;  