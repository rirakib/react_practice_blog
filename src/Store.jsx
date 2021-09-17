import React from 'react'
import Navbar from './component/navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/about/About';
import Skill from './component/skill/Skill';
import Gallery from './component/gallery/Gallery';
import Review from './component/review/Review';
import Contact from './component/contact/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';

const Store = () => {
    return (
        <>
            <Navbar/>

        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/skill" component={Skill}></Route>
            <Route exact path="/gallery" component={Gallery}></Route>
            <Route exact path="/review" component={Review}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route to="/" Redirect></Route>
        </Switch>
        </>
    )
}
export default Store;