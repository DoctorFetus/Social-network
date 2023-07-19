import {connect} from "react-redux";
import Login from "./Login";
import {FormDataType} from "./LoginForm/LoginForm";
import {StoreType} from "../../redux/redux-store";
import {loginIn} from "../../redux/redusers/auth-reducer";

type MapStateToPropsType =  {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    loginIn: (formData: FormDataType) => void
}

export type LoginType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType) : MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {loginIn})(Login)