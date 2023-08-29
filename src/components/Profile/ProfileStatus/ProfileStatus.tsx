import React, {ChangeEvent} from 'react';
import {ProfileInfoType} from "../ProfileInfo/ProfileInfo";
import {Input, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import ShortTextIcon from '@mui/icons-material/ShortText';

type ProfileStatusStateType = {
    editMode: boolean,
    currentStatus: string | null
}

type ProfileStatusPropsType = {
    status: string | null
    updateStatus: (status: string) => void
    isOwner: boolean
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    state = {
        editMode: false,
        currentStatus: this.props.status!
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentStatus: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        if (this.props.isOwner) {
            this.setState({
                editMode: true
            })
        }
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.currentStatus)
    }

    componentDidUpdate(prevProps: Omit<ProfileInfoType, "profile">, prevState: ProfileStatusStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                currentStatus: this.props.status
            })
        }
    }

    render() {
        return <ListItem>
            {!this.state.editMode
                ? <Typography style={{display: "flex", alignItems: 'center', gap: '10px'}}
                              onDoubleClick={() => this.activateEditMode()}>
                    <ShortTextIcon/>{this.state.currentStatus}
                </Typography>
                : <Input onChange={this.onChangeHandler}
                         onBlur={() => this.deactivateEditMode()}
                         autoFocus
                         value={this.state.currentStatus}/>}
        </ListItem>
    }
}

export default ProfileStatus;