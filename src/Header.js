import React from 'react'
import "./Header.css"



// Material-UI 


import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
	return (
		<div className="header">
			<div className="header-left">

				<img src="https://img.icons8.com/fluent/2x/facebook-new.png" alt="facebook icon"/>

				<div className="header-search">
					<SearchIcon />
					<input placeholder="Search..." type="text"/>
				</div>

			</div>

			<div className="header-middle">
				<div className="header-icons active">
					<HomeIcon fontSize="large"/>
				</div>
				<div className="header-icons">
					<FlagIcon fontSize="large"/>
				</div>
				<div className="header-icons">
					<SubscriptionsOutlinedIcon fontSize="large"/>
				</div>
				<div className="header-icons">
					<StorefrontOutlinedIcon fontSize="large"/>
				</div>
				<div className="header-icons">
					<SupervisedUserCircleIcon fontSize="large"/>
				</div>
			</div>

			<div className="header-right">
				<div className="header-info">
					<Avatar />
					<h4>George</h4>
				</div>

				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default Header
