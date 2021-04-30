import './Settings.css';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from "react-icons/cg";
import { Link } from 'react-router-dom';
import React from 'react';


function Settings() {


    return (
        <div className='settings'>
            {/*Header*/}
            <div className="settings_header">
                <h1>Settings</h1>
            </div>
  
            {/*General User*/}
            <h3 className="general">General</h3>
            
            <div className="general_user">
                <div className="avatar">
                    <h4 className="avatar_header">Avatar</h4>
                    <p className="avatar_note">Add a photo to personalize your account.</p>
                    <Link to="#" className="userPic">
                        <CgIcons.CgProfile />
                    </Link>
                </div>

                <div className="user">
                    <h4 className="name_header">Name</h4>
                    <p className="user_name">Karina Sanchez</p>
                    <Link to="#" className="userBtn">
                        <AiIcons.AiFillCaretRight />
                    </Link>
                </div>

                <div className="user_title">
                    <h4 className="title_header">Title</h4>
                    <p className="title_name">Business Analyst</p>
                    <Link to="#" className="titleBtn">
                        <AiIcons.AiFillCaretRight />
                    </Link>
                </div>
            </div>

            {/*Governance*/}
            <h3 className="governance">Governance</h3>
            
            <div className="governance_menu">
                <div className="domain">
                    <h4 className="domain_owner">Domain Owners</h4>
                    <Link to="#" className="domainBtn">
                        <AiIcons.AiFillCaretRight />
                    </Link>
                </div>

                <div className="govern">
                    <h4 className="governors">Governors</h4>
                    <Link to="#" className="governBtn">
                        <AiIcons.AiFillCaretRight />
                    </Link>
                </div>

                <div className="sensitivity">
                    <h4 className="sensitivity_level">Sensitivity Level</h4>
                   <Link to="#" className="sensitivityBtn">
                        <AiIcons.AiFillCaretRight />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Settings
