import React from 'react';
import {
    Text, StyleSheet, Dimensions, TouchableHighlight,
} from 'react-native';

export default (props) => {
    const styleButton = [Style.button]
    const styleHighlight = [Style.highlight]

    if (props.light) styleButton.push(Style.lightGray)
    else if (props.orange) styleButton.push(Style.orange)
    else if (props.large) {
        styleButton.push(Style.large)
        styleHighlight.push(Style.highlightLarge)
    }
    return (
        <TouchableHighlight style={styleHighlight} onPress={props.onClick}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    );
};

const Style = StyleSheet.create({

    highlight: {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        backgroundColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    highlightLarge: {
        width: (Dimensions.get('window').width / 4) * 2,
    },

    button: {
        width: (Dimensions.get('window').width / 4) - 15,
        height: (Dimensions.get('window').width / 4) - 15,
        backgroundColor: '#333333',
        fontSize: 25,
        color: '#fcfcfc',
        borderRadius: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    lightGray: {
        backgroundColor: '#a6a6a6',
        color: '#000',
    },

    orange: {
        backgroundColor: '#ff9501',
        color: '#fcfcfc',
    },

    large: {
        paddingLeft: 30,
        width: ((Dimensions.get('window').width / 4) - 15) * 2,
        textAlign: 'left',
    },
});
