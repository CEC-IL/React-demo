import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableHighlight, Alert} from 'react-native';
import { createDrawerNavigator} from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';



const data =[
  'Data structures',
  'software analysis',
  'hardware Analysis',
  'Maintainance',
  'customer Support',
  'user experience'
]
const items = 
     [
      { item: "Item 1", price: "10", id: 1 },
      { item: "Item 2", price: "20", id: 2 },
      { item: "Item 3", price: "30", id: 3 },
      { item: "Item 4", price: "40", id: 4 },
      { item: "Item 5", price: "50", id: 5 },
      { item: "Item 6", price: "60", id: 6 },
      { item: "Item 7", price: "70", id: 7 },
      { item: "Item 8", price: "80", id: 8 },
      { item: "Item 9", price: "90", id: 9 },
      { item: "Item 10", price: "100", id: 10 },
      { item: "Item 11", price: "110", id: 11 },
      { item: "Item 12", price: "120", id: 12 },
      { item: "Item 13", price: "130", id: 13 },
      { item: "Item 14", price: "140", id: 14 },
      { item: "Item 15", price: "150", id: 15 },
    ];

function Home() {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={()=> {Alert.alert('Touchable highlight pressed');}}
        style= {styles.touchable}
        >
          <Text style={styles.text}>HOME!</Text>
      </TouchableHighlight>
      
      
    </View>
  );
}

function FlatLList() {
  return (
    <View style={styles.container}>

      <Text style={styles.rowtext}>Courses</Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowtext}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

function ScrollViewList() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          items.map((item)=>
            <View key={item.id} style={styles.summary}>
              <Text style={styles.summaryText}>
                {item.item}{" "}
                <Text style={styles.amount}>{item.price}</Text>
              </Text>
              <Button
                title="Order"
                color="#FFC107"
                onPress={() => {
                  console.log(`Ordered ${item.item}`);
                }}
              />
            </View>
            
          )
        }
      </ScrollView>
    </View>
  );
}

const Tab = createDrawerNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          name="Home"
          component={Home}
        />
        <Tab.Screen 
          name="FlatLList"
          component={FlatLList}
        />
        <Tab.Screen 
          name="ScrollViewList"
          component={ScrollViewList}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row:{
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowtext:{
    fontSize: 18
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,

    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,

    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },

  summaryText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  amount: {
    color: "#C2185B",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  touchable: {
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4287f5",
  },
});

