import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Home from "./components/Home/Home";

const App = (props) => {
	return (
        <div>
            <Header />
            <div className="wrapper">
            <Navbar />
            <div className="app-wrapper-content">
                <Route exact path="/" component={Home} />
                <Route path="/content" render={() => <Content
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updatePost={props.updatePost}
                />} />
                <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
            </div>
        </div>
        </div>
	);
};

export default App;
