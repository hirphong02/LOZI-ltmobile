import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Hello from './hello';
import Login from './login';
import ToCoToCo from './ToCoToCo';
import TrungTamHoTro from './trungtamhotro';
import Home from './home';
import SanPham from './sanpham';
import SigUp from './sigup';

const stack = createNativeStackNavigator();
const App = () => {

  return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="hello" screenOptions={{ headerShown: false }}>
          <stack.Screen name="Hello" component={Hello}  />
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="ToCoToCo" component={ToCoToCo} />
          <stack.Screen name="TrungTamHoTro" component={TrungTamHoTro}/>
          <stack.Screen name="Home" component={Home}/>
          <stack.Screen name="SanPham" component={SanPham}/>
          <stack.Screen name="SigUp" component={SigUp}/>
        </stack.Navigator>
      </NavigationContainer>

  );
  

}


export default App;