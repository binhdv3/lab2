import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App(props) {
  
  const route = props.route;
  const listFromHome = route.params.data;

  return (
    <View style={styles.container}>
      <Text>
          Danh sach:
      </Text>
      <View>
        <FlatList
            data={listFromHome}
            renderItem = {({item}) => <View>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>}
          keyExtractor = {(item)  => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});
