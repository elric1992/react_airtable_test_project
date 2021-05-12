import "./App.css";
import React, {useEffect, useState} from "react";
import Airtable from "airtable";
import Goal from "./components/Goal";
import styled from "styled-components";
import {GlobalStyle} from "./styles/Global.style";

const base = new Airtable({apiKey: 'keywA4x9xhEgtoNkW'}).base('appU0nUcYFOrwdLhi');

function App() {

    const [goals, setGoals] = useState([])
    const [updates, setUpdates] = useState([])

    useEffect(() => {
        base('goals')
            .select({view: 'Grid view'})
            .eachPage((records, fetchNextPage) => {
                setGoals(records);
                fetchNextPage();
            });
        base('updates')
            .select({view: 'Grid view'})
            .eachPage((records, fetchNextPage) => {
                setUpdates(records);
                fetchNextPage();
            });
    }, [])

    return (
        <div className="App">
            <GlobalStyle/>
            <h1>My goals</h1>
            {goals.map(goal => (
                <Goal
                    key={goal.id}
                    goal={goal}
                    updates={updates.filter(update => update.fields.goal_id[0] === goal.id)}
                />
            ))}
        </div>
    );
}

export default App;
