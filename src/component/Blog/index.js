import React, { useContext } from 'react';
import Blog from './PostComp/Post';
import { GlobalContext } from "../Context/Context";

const Index = () => {
    const { blogData } = useContext(GlobalContext);
    return (
        <Blog />
    )
}

export default Index;
