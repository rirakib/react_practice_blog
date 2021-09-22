import React from 'react'
import { Switch , Route, Redirect } from 'react-router-dom';
import Home from './component/Home/Home'
import About from './component/about/About'
import Skill from './component/skill/Skill'
import Gallery from './component/gallery/Gallery'
import Review from './component/review/Review'
import Contact from './component/contact/Contact'
import Navbar from './component/navbar/Navbar';


const App = () => {
    return (
        <>
         <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skill" component={Skill} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/review" component={Review} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
                
            </Switch>
        </>
    )
}
export default App;