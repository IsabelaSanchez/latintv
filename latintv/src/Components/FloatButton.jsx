import React from 'react';
import './styles/FloatButton.scss';
import boticon from './styles/assets/bot-icon.svg';
import ChatBotLatin from './ChatBotLatin.jsx'

const FloatButton = () => {
    return (
        <div class="btn-container">
            <input type="checkbox" id="btn-mas"></input>
            <div className="redes">
                <a href="#">
                <ChatBotLatin className='containerChatbot'/>
                </a>
            </div>
            <div className="btn-mas1">
                <label for="btn-mas" className="icon-mas2">
                <img src={boticon} className="bot-icon" alt="boticon" />
                </label>
            </div>
        </div>
    )
};
export default FloatButton;