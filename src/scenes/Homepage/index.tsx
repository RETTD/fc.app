import React, { FC, memo } from 'react';
import { Button, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MainContainer from '@components/MainContainer/MainContainer';
import IconButtonOutline from '@components/IconButtonOutline/IconButtonOutline';


//About this screen:
//This screen is the first screen that the user sees when he opens the app.
//Here we have buttons to log in. If the user does not have an account, he can register by clicking the button below.
//In task description we have information about 3 types of button. Here we have usage of 2 types of button (solid and outline).
//I decide to create 2 components for buttons (ButtonSOlid and IconButtonOutline), because only this 2 I seen in the design.
//In solid I use Button from native-base, and in outline I use View and TouchableOpacity from native-base. For Outline button we neeed to add icon on the left side.
//For create this design i need to use this resolutioon. Of course we still can use variant attribute in Button from native-base to get outline or another type of button.


const Home: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();

  return (
    <MainContainer type="home">
      <Text style={{ alignSelf: 'center', fontFamily: 'Aeonik-Regular', marginTop: 15, marginBottom: 15 }} fontSize={11} color="white" >MASZ JUŻ KONTO?</Text>
      <Button
        onPress={() => navigation.navigate('Main', { screen: 'Register' })}
        backgroundColor="#7868E4"
        borderRadius="xl"
        style={{ width: '85%', height: 48 }}
        mb="5px">
        <Text color="WHITE" fontFamily="body" fontStyle="normal">
          Zaloguj się
        </Text>
      </Button>
      <Text style={{ alignSelf: 'center', fontFamily: 'Aeonik-Regular', marginTop: 5, marginBottom: 8 }} fontSize={11} color="white">
        LUB ZAREJESTRUJ SIĘ
      </Text>
      <IconButtonOutline onPress={() => console.log('Hey facebook!')} icon={<Icon as={FontAwesome5} name="facebook" color="#7868E4" size="30px" style={{ marginLeft: 20 }} />} label='Użyj konta Facebook' />
      <IconButtonOutline onPress={() => console.log('Hey google!')} icon={<Icon as={AntDesign} name="google" color="#7868E4" size="30px" style={{ marginLeft: 20 }} />} label='Użyj konta Google' />
      <IconButtonOutline onPress={() => console.log('Hey apple!')} icon={<Icon as={AntDesign} name="apple1" color="#7868E4" size="30px" style={{ marginLeft: 20 }} />} label='Użyj konta Apple' />
      <IconButtonOutline onPress={() => navigation.navigate('Main', { screen: 'Register' })} icon={<Icon as={Fontisto} name="email" color="#7868E4" size="30px" style={{ marginLeft: 20 }} />} label='Zarejestruj się E-mailem' />
    </MainContainer>
  );
};

export default memo(Home);
