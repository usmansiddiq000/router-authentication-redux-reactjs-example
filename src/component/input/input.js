
import React from 'react';


const Input = (props) => {
    let input;
    let notify = '';
    let valid = '';
    if(!props.isvalid && props.touched) {
      valid = (<p>{props.label} is invalid</p>)
    }
    if(props.wrong) {
        notify = (<p>{props.label} is wrong</p>)
    }      
    switch(props.type){
        case 'text':
        return (
        input = ( 
       <div class="form-group">
            <label>{props.label}</label>
            <input type="text" class="form-control" name={props.name} onChange = {props.change}/>
            {notify}
            {valid}
        </div>
        )
        )
        case 'password':
        return (
            input = ( 
           <div class="form-group">
                <label>{props.label}</label>
                <input type="password" class="form-control" name={props.name} onChange = {props.change} />
                {notify}
                {valid}
            </div>)
        )
        
    }
    return(
        
        {input}
    )
}

export default Input;