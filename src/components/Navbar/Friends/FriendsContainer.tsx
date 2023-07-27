import React from 'react';
import {StoreType} from "../../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {SidebarType} from "../../../redux/redusers/sidebar-reducer";
import Friends from "./Friends";

type mapStateToPropsType = SidebarType



export type FriendsPropsType = mapStateToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
    friends: state.sidebar.friends
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        test: "test"
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)


export default FriendsContainer;