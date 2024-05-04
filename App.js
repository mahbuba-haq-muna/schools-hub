import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Circle, G, Path, Svg } from 'react-native-svg';
import Documents from './Components/Documents/Documents';
const home = require("./assets/home.svg")

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={[styles.container]}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}> Upload Documents</Text>

          {/* Add new button */}
          <Pressable onPress={() => setIsModalVisible(true)}>
            <Text style={{ width: 100, borderRadius: 5, color: "white", backgroundColor: "#27AC1F", textAlign: "center", paddingHorizontal: 10, paddingVertical: 5, gap: 5 }}>
              <Text>+</Text>
              <Text>Add New</Text>
            </Text>
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>

              <Pressable onPress={() => setIsModalVisible(false)}>
                <Text>X</Text>
              </Pressable>
              <View>
                <Text style={{ color: "#0B2A46", fontSize: 18, fontWeight: 600 }}>Add New Document</Text>
                <Text style={{ color: "#546A7E", fontSize: 14, fontWeight: 400 }}>To initiate the creation of a new document, kindly complete the form below.</Text>
              </View>
              <View style={{marginVertical:20}}>
              <Text style={{ color: "#0B2A46", fontSize: 14, fontWeight: 500 }}>Document Name *</Text>
              <TextInput style={styles.nameInput} placeholder='Enter document name'/>
              </View>
              <View >
              <Text style={{ color: "#0B2A46", fontSize: 14, fontWeight: 500 }}>Document Name *</Text>
              <TextInput style={styles.input} placeholder='Enter description'/>
              </View>
              <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:10}}>
              <Pressable onPress={() => setIsModalVisible(false)}>
            <Text style={{ width: 150, borderRadius: 5, color: "#27AC1F", backgroundColor: "#F8F8F8", textAlign: "center", paddingHorizontal: 10, paddingVertical: 10, gap: 5 }}>
              <Text>Cancel</Text>
            </Text>
          </Pressable>
              <Pressable>
            <Text style={{ width: 150, borderRadius: 5, color: "white", backgroundColor: "#27AC1F", textAlign: "center", paddingHorizontal: 10, paddingVertical: 10, gap: 5 }}>
              <Text>Submit</Text>
            </Text>
          </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        {/* content */}
        <Documents></Documents>
        <Documents></Documents>
        <Documents></Documents>
        <Documents></Documents>
        <Documents></Documents>
        <Documents></Documents>

        <StatusBar style="auto" />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    marginTop: 50,

    fontFamily: "WorkSans"

  },
  
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: 350
  },
  nameInput: {
     height:40,
     marginVertical: 10,
     padding: 12,
     borderWidth:1,
     borderRadius:8,
     backgroundColor: "#F8F8F8"
  },
  input: {
     height:100,
     marginVertical: 10,
     padding: 12,
     borderWidth:1,
     borderRadius:8,
     backgroundColor: "#F8F8F8"
  }

});
