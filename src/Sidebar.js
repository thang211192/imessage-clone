import { Avatar, IconButton } from "@material-ui/core";
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SearchIcon from '@material-ui/icons/Search';
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from "./firebase";
import './Sidebar.css';
import SidebarChat from './SidebarChat';
function Sidebar() {
    const user = useSelector(selectUser);
    const [Chats, setChats] = useState([]);
    useEffect(() => {
        db.collection("chats").onSnapshot((snapshot) =>(
            setChats(snapshot.docs.map(doc => ({
                id:doc.id,
                data: doc.data(),
            })))
        ));
    }, []);
    const addChat = () => {
        const chatName = prompt("Enter chatName");
        if(chatName){
            db.collection('chats').add({
                chatName: chatName,
            })
        }
        
    }
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar
                onClick={() => auth.signOut()}
                className="sidebar__avatar"
                src={user.photo}
                />
                <div className='sidebar__input'>
                    <SearchIcon/>
                    <input placeholder="Search"/>
                </div>
                <IconButton
                onClick={addChat}
                variant="outline"
                className="sidebar__inputButton"
                >
                    <RateReviewOutlinedIcon />
                </IconButton>
            </div>
            <div className='sidebar__chats'>
                {Chats.map(({id, data:{ chatName}}) => (
                    <SidebarChat
                    key={id}
                    id={id}
                    chatName = {chatName}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
