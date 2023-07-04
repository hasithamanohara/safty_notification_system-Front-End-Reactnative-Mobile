import { View, Alert } from "react-native"
import { Text, Button, TextInput } from "@react-native-material/core"
import React, { useState } from "react"

const EmergancyPerson = () => {

    const [emgPerson, setemgName] = useState("");
    const [contact, setContact] = useState("");
    const [relation, setRelation] = useState("");

    const handleEmgPerson = () => {

        setemgName(emgPerson);
        setContact(contact);
        setRelation(relation);
        const details = {
            emgPerson: emgPerson,
            contact: contact,
            relation: relation
        }
        fetch("http://localhost:8080/api/save", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(details),
        })
            .then(() => {
                "add new One"
            }).catch((error) => {
                console.error(error);
            })
        //  alert(`Name: ${emgName}\nContact: ${contact}\nRelation: ${relation}`) 
        alert(JSON.stringify(details))
    }
    // const details=(emgName,contact,relation)=>{
    //    Alert.alert(`Name: ${emgName}\nContact: ${contact}\nRelation: ${relation}`,)
    // }

    const handleValidation = () => {
        const nameRegex = /^[a-zA-Z ]+$/;
        const phoneRegex = /^\d{10}$/;
        const relationRegex = /^ $/;

        if (!nameRegex.test(emgPerson)) {
            Alert.alert('Error', 'Invalid name');
        }
        else if (!phoneRegex.test(contact)) {
            Alert.alert('Error', 'Invalid phone number');
        }

        else (!relationRegex.test(relation));{

        }
        // else (!relationRegex.test(relation); {
        //     Alert.alert('Success', 'Input is invalid');
        // }
    };

    return (
        <View className="absolute items-center justify-center w-full h-5/6">
            <View className="bg-blue-500 w-10/12">
                <View className="">
                    <TextInput value={emgPerson} label="Emergancy person Name" variant="outlined" onChangeText={(text) => setemgName(text)}></TextInput>
                </View>
                <View className="">
                    <TextInput value={contact} label="Emergancy Person contact number" variant="outlined" onChangeText={(text) => setContact(text)}></TextInput>
                </View>
                <TextInput value={relation} label="Emergancy Person Relation" variant="outlined" onChangeText={(text) => setRelation(text)}></TextInput>
            </View>
            <View className="flex-row space-x-2 items-center justify-center">
                <View className="">
                    <Button title="Check" onPress={handleValidation}></Button>
                </View>
                <Button title="press" onPress={handleEmgPerson}></Button>
            </View>
        </View>
    )

    //     background-color: #4CAF50;
    //   color: white;
    //   padding: 12px 20px;
    //   border: none;
    //   border-radius: 4px;
    //   cursor: pointer;

}
export default EmergancyPerson;