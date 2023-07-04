import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ShowFam = () => {

    const [fam, setFam] = useState([])

    useEffect(() => {
        fetchfam();
    }, []);

    const fetchfam = async () => {
        try {
            const response = await axios.get('http://192.168.43.78:8080/api/v1/emgpersons');
            setFam(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View className="bg-slate-200 flex-1">
            <ScrollView contentContainerStyle={styles.container}>
                {fam.map((emgpersons, index) => (
                    <View style={styles.itemContainer} key={index}>
                        <Text style={styles.text}>Id: {emgpersons.id}</Text>
                        <Text style={styles.text}>Name: {emgpersons.firstName}</Text>
                        <Text style={styles.text}>Last Name: {emgpersons.phoneNo}</Text>
                        <Text style={styles.text}>Email Address: {emgpersons.emailId}</Text>
                        <Text style={styles.text}>Phone No: {emgpersons.phoneNo}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    itemContainer: {
        backgroundColor: '#dddddd',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,

    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
});


export default ShowFam