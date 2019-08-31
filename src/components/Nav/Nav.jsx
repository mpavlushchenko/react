import React from 'react';
import style from './Nav.module.scss';

import {NavLink} from "react-router-dom";

import Friends from "./Friends/Friends";

const Navbar = () => {
    return (
        <div>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to="/" activeClassName={style.active}>Home</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/content" activeClassName={style.active}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/dialogs" activeClassName={style.active}>Massages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/news" activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
                </div>
            </nav>
            <Friends />
        </div>
    )
};

export default Navbar;
