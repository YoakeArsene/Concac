import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

export default class Inputs extends Component {

    handleName = (text) => {
            this.setState({ name: text })
    }
    handleDescription = (text) => {
        this.setState({ description: text })
    }


    handleDestination = (text) => {
        this.setState({ destination: text })
    }

    handleDate = (text) => {
        this.setState({ date: text })
    }

    handleRisk = (text) => {
        this.setState({ risk: text })
    }
    
    display = (name,destination,date,risk,description) => {
        if (this.state.name == '' || this.state.destination == '' || this.state.date == '' || this.state.risk == '' || this.state.description == ''){
            alert('Please fill all required fields.')}
            else{
                alert('name: ' + name + ' destination: ' + destination + ' date: ' + date +  ' risk: ' + risk + ' description: '+ description)
            }
    }

    render() {
        
        return (
            <View style={styles.container}>

                <Text style={styles.text}>
                    Name
                </Text>
                
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter trip name"
                    placeholderTextColor="#27D7EF"
                    autoCapitalize="none"
                    onChangeText={this.handleName} />

                <Text style={styles.text}>
                    Destination
                </Text>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter destination"
                    placeholderTextColor="#27D7EF"
                    autoCapitalize="none"
                    onChangeText={this.handleDestination} />

                <Text style={styles.text}>
                    Date of the Trip
                </Text>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter date trip"
                    placeholderTextColor="#27D7EF"
                    autoCapitalize="none"
                    onChangeText={this.handleDate} />
                
                <Text style={styles.text}>
                    Risk Assessment
                </Text>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Yes/No"
                    placeholderTextColor="#27D7EF"
                    autoCapitalize="none"
                    onChangeText={this.handleRisk} />
                
                <Text style={styles.text}>
                    Description
                </Text>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Description"
                    placeholderTextColor="#27D7EF"
                    autoCapitalize="none"
                    onChangeText={this.handleDescription} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.display(this.state.name, this.state.destination, this.state.date , this.state.risk,  this.state.description)
                    }>
                    <Text style={styles.submitButtonText}> Add Trip </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    text: {
        fontWeight: 'bold'
    },

    container: {
        paddingTop: 23

    },
    input: {
        margin: 15,
        height: 40,
        width: 300,
        borderColor: '#4E73F4',
        borderWidth: 1,
        alignItems: 'center'
    },
    submitButton: {
        backgroundColor: '#4E73F4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center'
    }
})