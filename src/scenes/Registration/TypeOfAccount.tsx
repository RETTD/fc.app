import { RegistrationRequestPayload } from "@api/users/types";
import MainContainer from "@components/MainContainer/MainContainer";
import { Box, Flex, Image, Pressable, Text, VStack } from "native-base";
import React, { FC } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { ImageSourcePropType } from "react-native";

type AccountProps = {
    onPress: () => void;
    title: string;
    description: string;
    img: ImageSourcePropType;
}


const listOfAccounts = [
    {title: 'Trener', description: 'Zarządza drużynami, organizuje wydarzenia i wprowadza statystyki zawodników', img: require('../../assets/images/account1.png')},
    {title: 'Zawodnik', description: 'Dołącza do drużyny i bierze udział w sparingach oraz turniejach', img: require('../../assets/images/account2.png')},
    {title: 'Kibic', description: 'Obserwuje wydarzenia i drużyny, może być opiekunem gracza', img: require('../../assets/images/account3.png')},
    {title: 'Organizator', description: 'Tworzy i organizuje sparingi, turnieje i wydarzenia', img: require('../../assets/images/account4.png')},
    ]

const AccountContainer = ({onPress, title, description, img}: AccountProps) => {
    return (
        <Pressable onPress={onPress}>
        <Box borderWidth={1} borderRadius={15} borderColor="#6053B6" backgroundColor="#6053B6" style={{ width: '100%', height: 96, marginBottom: 19 }} >
            <Flex direction="row">
                <Image source={img} alt="logo"  width={101} height={112} style={{borderTopLeftRadius: 15, borderBottomLeftRadius: 15, flex: 1, position: "relative", bottom: 13}} />
                <Box  backgroundColor="#483E89" style={{height: 100, borderTopRightRadius: 15, borderBottomRightRadius: 15, flex: 2, paddingLeft: 15, paddingVertical: 10 }}>
                    <VStack>
                        <Text fontSize={14} fontWeight={500} color="white">{title}</Text>
                        <Text fontSize={12} fontWeight={400} lineHeight="md" color="white">{description}</Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    </Pressable>
    )
}

const TypeOfAccount: FC = () => {
    const { handleSubmit } = useFormContext()

    const onSubmit = (data: RegistrationRequestPayload) => {
        console.log('data', data);
        // react query hook for POST request for registration

        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(responseData => {
        //         console.log(responseData);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    };

    const handleChooseType = () => {
        handleSubmit(onSubmit as SubmitHandler<FieldValues>)
    }

    return (
        <MainContainer type="listOfAccounts">
            <Text fontSize={17} textAlign="center" color="white" style={{ marginVertical: 14 }}>Wybierz rodzaj konta</Text>
            <Text  color="white" fontSize={12} style={{marginHorizontal: 50, marginBottom:18}}>Wybierz rodzaj swojego konta. W późniejszym etapie będzie możliwość zmiany lub dodania innych typów konta.</Text>
            <VStack style={{ width: "90%", justifyContent: 'space-between' }}>
                {listOfAccounts.map((item, index) => 
                <AccountContainer key={item.title + index} onPress={handleChooseType} img={item.img} description={item.description} title={item.title} /> )}
            </VStack>
            <VStack style={{marginTop: 10}}>
                <Text fontSize={12} color="#EDEDED">Tworząc konto zgadzasz się na warunki</Text>
                <Text fontSize={12} color="#7868E4">Regulaminu i Polityki Prywatności</Text>
            </VStack>
        </MainContainer>
    )
}
export default TypeOfAccount;