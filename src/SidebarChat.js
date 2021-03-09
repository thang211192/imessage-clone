import { Avatar } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './SidebarChat.css';
import { setChat } from './features/chatSlice';
import db from './firebase';
import * as timeago from 'timeago.js';


function SidebarChat({id, chatName}) {
    const dispatch = useDispatch();
    const [chatinfo, setchatinfo] = useState([]);
    useEffect(() => {
        db.collection("chats")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot => (
            setchatinfo(snapshot.docs.map((doc => doc.data())))
        ));
    }, [id]);
    return (
        <div 
        onClick={() => {
            dispatch(setChat({
                chatId: id,
                chatName: chatName,
            }))
        }}
        className="sidebarChat">
            <Avatar
                className="sidebarChat__avatar"
                src="http://image1.vn/thang/avatar.jpg"
            />
            <div className='sidebarChat__info'>
                <h3>{chatName}</h3>
                <p>{chatinfo[0]?.message}</p>
                <small>{timeago.format(new Date(chatinfo[0]?.timestamp?.toDate()).toLocaleDateString())}</small>
            </div>

        </div>
    )
}

export default SidebarChat
