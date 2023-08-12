import {Route, Routes} from "react-router-dom";
import React from "react";
import About from "./About";
import Home from "./Home";
import Blog from "./Blog";
import BlogArticle from "./BlogArticle";
import Add_Post from "./Add_Post";

function MainRouter() {

    return (
        <Routes>
            <Route path={''} element={<Home/>}/>
            <Route path={'about/'} element={<About/>}/>
            <Route path={'blog/'} element={<Blog/>}/>
            <Route path={'blog/add_post'} element={<Add_Post/>}/>
            <Route path={'blog/:pk'} element={<BlogArticle/>}/>
        </Routes>
    )
}

export default MainRouter