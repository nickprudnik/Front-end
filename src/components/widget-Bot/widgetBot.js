import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import logo from './logo.jpg';

import 'react-chat-widget/lib/styles.css';

class WidgetBot extends Component {

    componentDidMount() {
        addResponseMessage("Welcome to this awesome app!");
      }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        addResponseMessage();
    }    

    render() {
        return (
            <Widget 
                handleNewUserMessage={this.handleNewUserMessage}
                profileAvatar={logo}
                title="Welcom to Nick's Air"
                subtitle="Ask any questions"
            />
        );
    } 
}

export default WidgetBot;