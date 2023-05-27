import React from 'react';
import preloader from "../../../assets/images/preloader2.svg";
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <>
            <img className={style.preloader} src={preloader} alt={"preloader"}/>
        </>
    );
};

export default Preloader;