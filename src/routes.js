import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import './config/ReactotronConfig';
import Login from './Pages/Login'
import Home from './Pages/Home';
const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Home,
    },
    {
        headerLayoutPreset: 'center',
        
    })
);
export default Routes;