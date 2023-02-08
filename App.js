import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Manager from "./Manager";
import {
    View,
    Text,
    Button,
} from "react-native";
const Stack = createNativeStackNavigator();

const Home = (props) => {
    const nav = props.navigation;
    const list =
        [
            {
                id: 1,
                name: 'nem ran',
                price: 10000,
            },
            {
                id: 2,
                name: 'keo ngot',
                price: 20000,
            },
            {
                id: 3,
                name: 'banh trung',
                price: 30000,
            },
        ];

    return (
        <View>
            <Text>
                HOME
            </Text>
            <Button
                title='Sang Manager'
                onPress={() => nav.navigate(
                    'Manager',
                    { data: list }
                )}
            />
            <Button
                title='Sang About'
                onPress={() => nav.navigate(
                    'About',
                    {
                        nameUser: 'Dao Van Binh',
                        Msv: 'ph26010'
                    },
                )}
            />
        </View>
    );
};

const About = (props) => {
    const route = props.route;
    const nameFromHome = route.params.nameUser;
    const msv = route.params.Msv;
    return (
        <View>
            <Text>
                About
            </Text>
            <Text>
                Họ tên: {nameFromHome}
            </Text>
            <Text>
                Mã sinh viên: {msv}
            </Text>
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
                <Stack.Screen
                    name='About'
                    component={About}
                />
                <Stack.Screen
                    name='Manager'
                    component={Manager}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default App;
