import React, {ChangeEvent} from 'react';
import {ProfileInfoType} from "../ProfileInfo/ProfileInfo";
import profile from "../Profile";

class ProfileStatus extends React.Component<Omit<ProfileInfoType, "profile">, any> {
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