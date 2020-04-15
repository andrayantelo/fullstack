import React from 'react';

const Languages = ({languages}) => {
console.log(languages)
const renderLanguages = languages.map(language => {
    return <li key={language.name}>{language.name}</li>
});

    return (
        <div>
            <h3>Languages</h3>
            <ul>
                {renderLanguages}
            </ul>
        </div>
    )
}

export default Languages;