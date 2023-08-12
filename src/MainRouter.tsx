import {Route, Routes} from "react-router-dom";
import React from "react";
import About from "./About";
import Home from "./Home";
import Blog from "./Blog";
import BlogArticle from "./BlogArticle";
import AddPost from "./AddPost";

function MainRouter() {

    return (
        <Routes>
            <Route path={''} element={<Home/>}/>
            <Route path={'about/'} element={<About/>}/>
            <Route path={'blog/'} element={<Blog/>}/>
            <Route path={'blog/add_post'} element={<AddPost/>}/>
            <Route path={'blog/<int>:pk'} element={<BlogArticle/>}/>
        </Routes>
    )
}

export default MainRouter