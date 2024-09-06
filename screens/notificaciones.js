import React, {useState} from 'react'
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import img6 from '../assets/img6.png';
import img2 from '../assets/img2.png';
import img9 from '../assets/img9.png';
import img5 from '../assets/img5.png';

export default function Clases () {
        return(
            <View style={styles.padre} >
                <View style={styles.container} >
                    <Text style={styles.title} > Notificaciones </Text>

                </View>
            </View>
        );
}

const styles = StyleSheet.create ({
    padre:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: '#0E0E0E'
    },
    container:{
        height: '15%',
        backgroundColor: '#0E0E0E',
        width: '100%',
        marginTop: '20%'
    },
    title:{
        fontSize: 50,
        color: 'white',
        margin: '5%',
    },
});