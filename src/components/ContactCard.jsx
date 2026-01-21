import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import user from '../images/user1.png'



function ContactCard(props) {
    const {id, name, email} = props.contact
    const navigate = useNavigate()
  return (
    <div className='item'>
        <img className='ui avatar image' src={user} alt="" />
                <div className='content' >
                    <Link to={`contact/${id}`}>
                        <div className='header'>{name}</div>
                    <div>{email}</div>
                    </Link>
                    <i className='trash alternate outline icon right floated'
                    style={{color:"red", marginTop:"7px"}}
                    onClick={()=>props.clickHandler(id)}
                    ></i>
                    <i className='edit alternate outline icon right floated'
                    style={{color:"blue", marginTop:"7px"}}
                    onClick={()=>navigate(`edit/${id}`)}
                    ></i>
                </div>
            </div>
  )
}

export default ContactCard