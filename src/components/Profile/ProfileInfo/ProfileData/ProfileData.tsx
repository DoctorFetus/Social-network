import React from 'react';
import {ContactsKeyType, UserProfileType} from "../../../../redux/redusers/profile-reducer";
import {v1} from "uuid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ListItem} from "@mui/material";


type ProfileDataPropsType = {
    profile: UserProfileType,
    isOwner: boolean
}


const ProfileData = (props: ProfileDataPropsType) => {

    const isPropertyUnspecified = (prop: string) => prop ? prop : "???"

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography> User information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ListItem>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</ListItem>
                        {props.profile.lookingForAJob &&
                            <ListItem>Skills: {isPropertyUnspecified(props.profile.lookingForAJobDescription)}</ListItem>}
                        <ListItem>About me: {isPropertyUnspecified(props.profile.aboutMe)}</ListItem>
                        {Object.keys(props.profile.contacts).map((key) => {
                            return <ListItem
                                key={v1()}>{key}: {isPropertyUnspecified(props.profile.contacts[key as ContactsKeyType])}</ListItem>
                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default ProfileData;