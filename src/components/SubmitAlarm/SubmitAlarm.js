import React from 'react';
import styles from "./SubmitAlarm.module.css";

const SubmitAlarm = ({setSubmitted}) => {

    let key = localStorage.getItem('searchKey');


    return (
        <div className={styles.main} onClick={() => setSubmitted(false)}>
            <div className={styles.message} onClick={event => event.stopPropagation()}>
                Message:<br/>
                You have just made search by: " {key} "
            </div>
        </div>
    );
};

export default SubmitAlarm;