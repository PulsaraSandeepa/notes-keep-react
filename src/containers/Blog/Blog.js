import React, {Component} from 'react';
// import axios from 'axios';
import {BrowserRouter as Router, Route, NavLink,Switch,Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
class Blog extends Component {
    state ={
        auth:false
    }
    render() {
        return (
            <Router>
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink
                                             activeClassName="my-active"
                                             activeStyle={{
                                                 color: 'green',
                                                 textDecoration: 'underline'
                                             }}
                                             to='/posts/'>Posts</NavLink></li>
                                <li><NavLink to={{
                                    pathname:'newpost',
                                    hash:'#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
<Switch>
    {this.state.auth ? <Route path="/posts/newpost" component={NewPost}/> : null}
    <Route path="/posts" component={Posts}/>
    <Route render ={()=> <h1>OOPs....Not found</h1>}/>
    {/*<Redirect from ="/" to ="/posts"/>*/}


</Switch>
                    {/*<Switch>*/}
                    {/*    <Route path="/" exact component={Posts} />*/}
                    {/*    <Route path="/new-post" component={NewPost} />*/}
                    {/*</Switch>*/}

                </div>
            </Router>
        );

    }
}

export default Blog;
