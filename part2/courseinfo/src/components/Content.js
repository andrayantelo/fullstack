import React from 'react'
import Part from './Part';

const Content = ( { parts }) => {
    const renderParts = parts.map( (part) => {
        return <Part name={part.name} exercises={part.exercises} key={part.id} />
    })
    return (
        <div>
            {renderParts}
        </div>
    )
}

export default Content;