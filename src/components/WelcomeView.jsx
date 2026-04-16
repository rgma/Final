import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import InputBar from "./InputBar";

const { height } = Dimensions.get('window');

export default function({ scrollToBottom, sendMessage, setInputBarText, inputBarText }) {

    // SIMPLE helper for buttons
    const handlePrompt = (displayText, actualValue) => {
    setInputBarText(displayText);

    setTimeout(() => {
        sendMessage(actualValue);
    }, 100);
};

    return (
        <View style={styles.container}>

            {/* HERO */}
            <View style={styles.hero}>
                <Image 
                    source={{ uri: 'https://images.pexels.com/photos/7755652/pexels-photo-7755652.jpeg' }} 
                    style={styles.image}
                />
                <Text style={styles.title}> The Fresh Coat </Text>
                <Text style={styles.subtitle}>
                    Book your perfect nail experiance
                </Text>
            </View>

             {/* INPUT */}
            <InputBar 
                onSendPressed={sendMessage} 
                onSizeChange={() => scrollToBottom(false)}
                onChangeText={setInputBarText}
                text={inputBarText}
            />
            
            {/* PROMPT BUTTONS */}
            <View style={styles.prompts}>
                <Text style={styles.subtitle}>
                    Quick Book: 
                </Text>
            <TouchableOpacity style={styles.button} onPress={() => handlePrompt("Gel-X", "1")}>
            <Text style={styles.buttonText}>Gel-X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePrompt("Regular Polish", "2")}>
                <Text style={styles.buttonText}>Regular Polish</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePrompt("View Services", "menu")}>
                <Text style={styles.buttonText}>View Services</Text>
            </TouchableOpacity>
            </View>

           

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 20
    },

    hero: {
        height: height * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    image: {
        width: '100%',
        height: '80%',
        borderRadius: 15,
        marginBottom: 10
    },

    title: {
        fontSize: 45,
        padding: 20,
        fontWeight: 'bold'

    },

    subtitle: {
        fontSize: 20,
        color: 'gray',
        textAlign: 'center',
        marginTop: 5
    },

    prompts: {
        paddingHorizontal:400,
        gap: 10,
        padding: 30
    },

    button: {
        backgroundColor: '#d86bb4',
        padding: 15,
        marginLeft: 30, 
        marginRight: 30,
        borderRadius: 10,
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});