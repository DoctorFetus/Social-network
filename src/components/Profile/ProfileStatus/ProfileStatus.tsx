import React, {ChangeEvent} from 'react';
import {ProfileInfoType} from "../ProfileInfo/ProfileInfo";

type ProfileStatusStateType = {
    editMode: boolean,
    currentStatus: string | null
}

type ProfileStatusPropsType = {
    status: string | null
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    state =  {
        editMode: false,
        currentStatus: this.props.status!
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentStatus: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
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
        return <span>
            {!this.state.editMode
                ? <span onDoubleClick={() => this.activateEditMode()}>{this.state.currentStatus}</span>
                : <input onChange={this.onChangeHandler}
                         onBlur={() => this.deactivateEditMode()}
                         autoFocus
                         value={this.state.currentStatus}/>}
        </span>
    }
}

export default ProfileStatus;