import React from 'react'
import MainContainer from "@components/MainContainer/MainContainer"
import { useNavigation } from "@react-navigation/native"
import { Box, Button, Flex, HStack, Icon, Input, Text } from "native-base"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { Controller, FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { RegistrationRequestPayload } from '@api/users/types'
import { StackNavigationProp } from '@react-navigation/stack'
import TypeOfAccount from './TypeOfAccount'



type SingleStepProps = {
    name: string,
    next: string,
    step: number,
    label?: string,
}
type RootStackParamList = {
    Register: { screen: string } | undefined;
};


const SingleStep = ({ name, next, step, label }: SingleStepProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); //types to fix weird issue with navigation in RN > 0.65
    const {
        control,
        formState: { errors: errorsForm }, } = useFormContext();

    const handleNext = () => {
        navigation.navigate('Register', { screen: next })
    }

    return step === 5 ? <TypeOfAccount /> : (
        <MainContainer type="register">
                    <Text textAlign="center" color="white" style={{ marginVertical: 35 }}>Utwórz konto</Text>

                    <Box style={{ width: '85%' }}>
                        <Text fontSize={14} color="#EDEDED">{label}</Text>
                        <Controller
                            name={name}
                            control={control}
                            rules={{
                                required: `${label} jest wymagane`,
                                minLength: { value: 3, message: `${label} musi mieć minimum 3 znaki` },
                            }}
                            render={({ field }) => (
                                <Input
                                    InputLeftElement={<Icon as={<FontAwesome5Icon name="user" />} size={5} ml="2" color="#483E89" />} // change icon for steps
                                    color={'white'}
                                    borderWidth="1" borderRadius="xl" borderColor="#483E89"
                                    {...field}
                                />)}
                        />
                        {
                            errorsForm[name] &&
                            <Text color="red.600" fontSize={12}>
                                {errorsForm[name]?.message?.toString()}
                            </Text>
                        }
                    </Box>
                    <Box>
                        <Flex direction='row' justifyContent="space-between" alignItems="flex-end" style={{marginTop:20}}>
                            <Text fontSize={14} color="#EDEDED">Krok:</Text>
                            <Text color="#483E89" fontSize={52} lineHeight={52} fontWeight={400}>{step}/4</Text>
                        </Flex>
                        <HStack style={{ marginBottom: 15 }} height={4} width="90%">
                            <Box width={
                                `${step * 25}%`
                            } borderWidth={1} backgroundColor={"#7868E4"} borderColor={"#7868E4"} />
                            <Box width={`${100 - step * 25}%`} borderWidth={1} backgroundColor="#302A5B" borderColor={"#302A5B"} />
                        </HStack>
                    </Box>
                    <Button
                        backgroundColor="#7868E4"
                        borderRadius="xl"
                        style={{ width: '85%', height: 48, marginBottom: 15 }}
                        onPress={handleNext}>
                        <Text>Dalej</Text>
                    </Button>
        </MainContainer>

    )
}

export default SingleStep