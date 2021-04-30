import React from "react";
import * as AiIcons from 'react-icons/ai';

export const Sidebar = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Stuff",
        path: '/stuff',
        icon: <AiIcons.AiFillHeart />,
        cName: 'nav-text'
    },
    {
        title: "Other Stuff",
        path: '/other-stuff',
        icon: <AiIcons.AiFillHeart />,
        cName: 'nav-text'
    },
    {
        title: "More Stuff",
        path: '/more-stuff',
        icon: <AiIcons.AiFillHeart />,
        cName: 'nav-text'
    },
    {
        title: "Settings",
        path: '/settings',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },
]