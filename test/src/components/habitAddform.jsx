import React, { memo } from 'react';

const HabitAddform = memo((props) => {

    //const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputRef.current.value);
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //formRef.current.reset();
        inputRef.current.value = '';
        console.log('habitAddform');
    };
    console.log('habitAddform');
    return (
        <form /*ref={formRef}*/ className="add-form" onSubmit={onSubmit}>
            <input 
            ref={inputRef}
            type="text" 
            className="add-input" 
            placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    );
}); 

export default HabitAddform;