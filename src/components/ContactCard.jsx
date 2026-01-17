import React from 'react'
import user from '../images/user1.png'


function ContactCard(props) {
    const {id, name, email} = props.contact
  return (
    <div className='item'>
        <img className='ui avatar image' src={user} alt="" />
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                    <i className='trash alternate outline icon right floated'
                    style={{color:"red", marginTop:"7px"}}
                    onClick={()=>props.clickHandler(id)}
                    ></i>
                </div>
            </div>
  )
}

export default ContactCard