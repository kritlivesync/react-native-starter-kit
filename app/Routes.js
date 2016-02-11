import React, {Navigator} from 'react-native'
import {Router, Route, Schema, Animations, Actions, TabBar} from 'react-native-router-flux';
import { connect } from 'react-redux';

import CounterPage from './counter/CounterPage';
import LoginPage from './auth/LoginPage';
import Loader from './navigation/loader/Loader';

const AppRouter = connect()(Router);

const Routes = () => (
    <AppRouter>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>

        <Route name="loginPage" initial={true} component={LoginPage} title="Login"/>

        <Route name="counterPage" component={CounterPage} title="Counter" type="replace"/>
        <Route name="profilePage" component={CounterPage} title="Profile" schema="modal"/>

        <Route name="loading" type="modal" component={Loader}/>
    </AppRouter>
);

export default Routes;