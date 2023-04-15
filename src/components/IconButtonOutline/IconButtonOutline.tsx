import React, { ReactNode } from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

//This button I speccially create for outline buttons from design. I decide for this solution, because I think for specially styled button we need to create new component.
//I get icons from react-native-vector-icons. I think they match with current design, and that was easier and faster to me than copy icons from figma.

type IconButtonProps = {
    icon?: ReactNode,
    label: string,
    onPress: () => void,
}

const IconButtonOutline = ({ icon, ...props }: IconButtonProps) => {
    return (
        <View style={{ alignSelf: 'center', width: '85%', marginHorizontal: 15, height: 50, flexDirection: 'row', marginTop: 10 }} borderWidth="1" borderRadius="xl" borderColor="#483E89">
            <TouchableOpacity onPress={props.onPress} style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf:'center', paddingTop: 10}}>
                {icon}
                <Text style={{ textAlign: 'center', width: '100%' }} color="#EDEDED" fontFamily="body" fontStyle="normal" ml="5px">
                    {props.label}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default IconButtonOutline;