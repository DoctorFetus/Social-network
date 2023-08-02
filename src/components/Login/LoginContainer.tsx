import {connect} from "react-redux";
import Login from "./Login";
import {FormDataType} from "./LoginForm/LoginForm";
import {StoreType} from "../../redux/store";
import {loginIn} from "../../redux/redusers/auth-reducer";

type MapStateToPropsType =  {
    isAuth: boolean
    captchaUrl: null | string
}

type MapDispatchToPropsType = {
    loginIn: (formData: FormDataType) => void
}

export type LoginType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType) : MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {loginIn})(Login)