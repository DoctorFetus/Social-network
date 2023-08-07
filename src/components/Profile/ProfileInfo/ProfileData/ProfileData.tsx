import React from 'react';
import {ContactsKeyType, UserProfileType} from "../../../../redux/redusers/profile-reducer";
import {v1} from "uuid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';


type ProfileDataPropsType = {
    profile: UserProfileType,
    isOwner: boolean
}

const ProfileData = (props: ProfileDataPropsType) => {

    const isPropertyUnspecified = (prop: string) => prop ? prop : "unspecified"

    return (
        <div>
            {/*<div>Full name: {props.profile.fullName}</div>*/}
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
                        <Typography>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</Typography>
                        {props.profile.lookingForAJob &&
                            <Typography>Skills: {isPropertyUnspecified(props.profile.lookingForAJobDescription)}</Typography>}
                        <Typography>About me: {isPropertyUnspecified(props.profile.aboutMe)}</Typography>
                        {Object.keys(props.profile.contacts).map((key) => {
                            return <Typography
                                key={v1()}>{key}: {isPropertyUnspecified(props.profile.contacts[key as ContactsKeyType])}</Typography>
                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default ProfileData;