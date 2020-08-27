import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'

import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Store"
import VideoLibraryIcon from "@material-ui/icons/VideoLibraryOutlined"
import ExpandMoreOutLined from "@material-ui/icons/ExpandMoreOutlined"

function Sidebar(props) {

	const {} = props

	return (
		<div className="sidebar">
			{/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
			<SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
			<SidebarRow Icon={PeopleIcon} title='Friends'/>
			<SidebarRow Icon={ChatIcon} title='Messenger'/>
			<SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
			<SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
			<SidebarRow Icon={ExpandMoreOutLined} title='Marketplace'/>
		</div>
	)
}

export default Sidebar
