import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Main from "./components/main";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import WrappedNormalSignUpForm from "./components/signUp";
import WrappedNormalSignInForm from "./components/signIn";
import WrappedNormalResetForm from "./components/reset"
import Profile from "./components/profile";

const blogs=[
    {
        id:1,
        title:"title1",
        description:"desc1",
        author:"author1",
    },
    {
        id:2,
        title:"title2",
        description:"desc2",
        author:"author2",
    },
    {
        id:3,
        title:"title3",
        description:"desc3",
        author:"author3",
    },
    {
        id:4,
        title:"title4",
        description:"desc4",
        author:"author4",
    },
];

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path={'/'} component={() => <Main blog={blogs} />}/>
                <Route exact path={'/signup'} component={WrappedNormalSignUpForm}/>
                <Route exact path={'/signin'} component={WrappedNormalSignInForm}/>
                <Route exact path={'/reset'} component={WrappedNormalResetForm}/>
                <Route exact path={'/profile'} component={Profile}/>

            </Switch>
        </Router>

    </div>

  );

}

export default App;
