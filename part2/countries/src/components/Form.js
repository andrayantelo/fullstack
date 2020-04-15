import React from 'react';

const Form = (props) => {
    return (
        <form>
            <div>
                <input
                    value={props.query}
                    onChange={props.handleQueryChange}
                />
            </div>
        </form>
    )
}

export default Form;