import React from 'react';
import CSafeAreaView from '@components/CSafeAreaView';
import { Image, Box, KeyboardAvoidingView, View } from 'native-base';
import { ImageBackground } from 'react-native';

// Here we have background of application. Because in design I don't see how app looks without opened keyboard (maybe that was in prototype, but figma crush for me when I wanted open prototype in this project)
// I decide to create one background for Home and Registration screens. Here we have reusable container with background and title (only for home screen, because I decide add logo to headaer in StackNavigation).
// Children is a content of this container. For current state of app (only register and home) this container is box with buttons, inputs etc. showed on the bottom of screen (in design).
// For move content up when keyboard is opened I use KeyboardAvoidingView from native-base. I set behavior to position, because I want to move content up when keyboard is opened.

type MainContainerProps = {
    type: 'home' | 'register' | 'listOfAccounts';
    children: React.ReactNode;
}

const MainContainer = ({ type = 'home', children }: MainContainerProps) => {
    return (
        <CSafeAreaView>
            <View
                style={{
                    alignItems: 'center',
                    flex: 1,
                }}>
                <ImageBackground
                    style={{
                        height: 384,
                        width: '100%',
                    }}
                    source={require("../../assets/images/background.png")}
                />
                {type === "home" && <Image style={{ width: 333, height: 51, position: 'absolute', top: 40 }} source={require("../../assets/images/logo1.png")} alt='Logo' size="xl" color='white' />}
                {type === "listOfAccounts" ?
                    <Box borderTopLeftRadius={30} borderTopRightRadius={30} style={{
                        backgroundColor: '#241F44', width: '100%',
                        alignItems: 'center', height: "100%", position: 'absolute', top: 90, bottom: 0
                    }}>
                        {children}
                    </Box>
                    : <KeyboardAvoidingView behavior="position" style={{ zIndex: 0, minHeight: 380, width: '100%', position: 'absolute', top: 354, bottom: 0, flex: 1 }}>
                        <Box borderTopLeftRadius={30} borderTopRightRadius={30} style={{
                            backgroundColor: '#241F44', width: '100%',
                            alignItems: 'center', height: "100%"
                        }}>
                            {children}
                        </Box>
                    </KeyboardAvoidingView>}
            </View>
        </CSafeAreaView>
    )
};

export default MainContainer;