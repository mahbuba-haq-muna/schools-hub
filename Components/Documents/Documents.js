import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Documents = () => {
    return (
        <View>
            <View style={styles.box}>
          <Image source={{ uri: "https://s3-alpha-sig.figma.com/img/9a6d/0a05/f56115a4ae52dbaa9b4cad9dc7ee4285?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RKjUyIJvBNf-ed855~etfx1yfXE8Y2lanoz0CAg6dIIL~rjWrsXgwKTv~YY-cUm368DnhMgQ0tRV6PZ9dvn5CTxxNwvRLEWJ9NL9knURNRmqxawyxP1Bqtxi83BqGlt0W8eLyOZ38c0wCdmHw-vETur0yI0QzFUaj0MB86HQUZhvjP4tboE3RJMdf3~FEfoh~4m9gNbq4qMS96HMmkxp6MUk6117JnFSqCM-rY~gS6lV5bG7iBYT5vb2tEd6q~iN3YjxnFS47VcdMBci~-k5l04lPtpaHllbIrRswfgFNC94MUt0Y7iZEf9nTgagfEW5Icah-ai0bj9DUFpwOQg2dQ__" }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          <View>
            <View style={{ width: 250 }}>
              <Text style={{ fontSize: 16, fontWeight: 600, color: "#0B2A46" }}>Create Product Application Deployment</Text>
              <Text style={{ fontSize: 14, fontWeight: 500, color: "#546A7E", paddingVertical: 10 }}>January 20, 2024</Text>
            </View>

            {/* action buttons */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Pressable >
                <Text style={styles.deleteBtn}>Delete</Text>
              </Pressable>
              <Pressable >
                <Text style={styles.viewBtn}>View</Text>
              </Pressable>
              <Pressable >
                <Text style={styles.editBtn}>Edit</Text>
              </Pressable>
            </View>
            </View>
        </View>
        </View>
    );
};

export default Documents;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      marginTop: 50,
  
      fontFamily: "Work Sans"
  
    },
    box: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "lightgray",
      marginHorizontal: 20,
      padding: 15,
      marginTop: 15,
      backgroundColor: "#fff",
      flexDirection: "row",
      gap: 10,
    },
    deleteBtn: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 6,
      backgroundColor: 'rgba(39, 172, 31, 0.10)',
      color: "#27AC1F",
      width: 70,
      textAlign: "center"
    },
    viewBtn: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 6,
      backgroundColor: "#27AC1F",
      color: "white",
      width: 70,
      textAlign: "center"
    },
    editBtn: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 6,
      backgroundColor: '#546A7E',
      color: "white",
      width: 70,
      textAlign: "center"
    },
    
  
  });