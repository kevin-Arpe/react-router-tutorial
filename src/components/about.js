import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, useParams } from 'react-router-dom';

const contents = [
    {id: 1, title: 'HTML', description: 'HTML is ...'},
    {id: 2, title: 'CSS', description: 'CSS is ...'},
    {id: 3, title: 'Javascript', description: 'Javascript is ...'}
];

function Topic() {
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {
        title: "Sorry",
        description: "Not found"
    };

    for (let i=0; i<contents.length; i++) {
        if(contents[i].id === Number(topic_id)) {
            selected_topic = contents[i];
            break;
        }
    }

    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    );
}

const About = () => {
    let lis = [];
    for (let i=0; i<contents.length; i++) {
    lis.push(<li key={contents[i].id}><NavLink to={"/about/"+contents[i].id}>{contents[i].title}</NavLink></li>)
    }

    return (
        <div>
            <h2>About Page</h2>
            <ul>
                {lis}
            </ul>
            <Switch>
                <Route path="/about/:topic_id">
                    <Topic></Topic>
                </Route>
            </Switch>
        </div>
    )
}

export default About;