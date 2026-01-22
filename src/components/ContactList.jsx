import React , {useRef} from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom';

function ContactList(props) {
    const inputEl = useRef("");
    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }
   
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard 
            contact={contact} 
            clickHandler = {deleteContactHandler}>
            </ContactCard>
        )
    })
    const getSearchTerm = ()=>{
        props.searchKeyword(inputEl.current.value)
        
    }
  return (
    <div className='main' style={{ marginTop: "80px" }}>
        <div className='link'>
        <h2>Contact List</h2>
        <Link to="/add"><button className='ui button blue '>Go to Add contact</button>
        </Link>
        </div>
        <div className='ui search'>
            <div className='ui icon input'>
                <input 
                ref={inputEl}
                type='text'
                placeholder='Search Contacts'
                className='prompt'
                value={props.term}
                onChange={getSearchTerm}/>
                <i className='search icon'></i>
            </div>
        </div>
        <div className='ui celled list'>
            {renderContactList.length > 0 ? renderContactList : "No Contacts exist" }
        </div>
    </div>
    
  )
}

export default ContactList