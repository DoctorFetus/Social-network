import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {NavLink} from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '15px'}}>
            <List component="nav" aria-label="main mailbox folders">
                <NavLink to="../profile">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <AccountBoxIcon color={"primary"} />
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>

                    </ListItemButton>
                </NavLink>
                <NavLink to="../chat">
                <ListItemButton

                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <MessageIcon color={"primary"}/>
                    </ListItemIcon>
                    <ListItemText primary="Chat"/>
                </ListItemButton>
                </NavLink>
                <NavLink to="../users">
                    <ListItemButton

                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <GroupIcon color={"primary"}/>
                        </ListItemIcon>
                        <ListItemText primary="Users"/>
                    </ListItemButton>
                </NavLink>
                <NavLink to="../settings">
                    <ListItemButton

                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <SettingsIcon color={"primary"}/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItemButton>
                </NavLink>
            </List>
        </Box>
    );
}