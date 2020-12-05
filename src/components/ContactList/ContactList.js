import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactList extends Component{
    constructor(props){
        super(props);
    }

    

    render(){
        const { filter, contacts, removeContactId } = this.props;

        return(
                <ul>
                    {
                        contacts.filter(contact => {
                            return contact.name.toLowerCase().startsWith(filter.toLowerCase());
                        }).map(({id, name, phone}) => (
                            <li key={id}><span> {name}: {phone} </span><button onClick={()=>{removeContactId(id)}}>Delete</button> </li>
                        ))
                    }
                </ul>
        )
    }
}