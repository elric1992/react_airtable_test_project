import React from 'react'

const Goal = ({goal, updates}) => {
    return (
        <div>
            <label>
                <input type='checkbox' defaultChecked={goal.fields.complete} disabled/>
            </label>
            <h2>{goal.fields.title}</h2>
            <h3>Details</h3>
            <p>{goal.fields.details}</p>
            <h3>Updates</h3>
            {updates.map((update, index) => (
                <p key={index}>{update.fields.update}</p>
            ))}
        </div>
    )
}

export default Goal
