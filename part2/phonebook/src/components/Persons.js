import React from 'react';

const Persons = ({ newFilter, renderPeople, filterPeople, persons}) => {

    return (
        <div>
            {newFilter ?  renderPeople(filterPeople) : renderPeople(persons)}
        </div>
    )
}

export default Persons;