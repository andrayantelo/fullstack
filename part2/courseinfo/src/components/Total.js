import React from 'react'

const Total = ( { parts }) => {
    const exercisesSum = parts.reduce((acc, curr) => {
        return acc + curr.exercises;
    }, 0)
    return (
        <h4>Total of {exercisesSum} exercises</h4>
    )
}

export default Total;