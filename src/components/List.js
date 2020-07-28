import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const List = ({contacts, removeContact}) => {
    return ( 
        <Fragment>
            <div className='list-contacts'>
                <h3 className='page-title'>Contacts Directory</h3>

                <div className='list-contacts-top'>
                  <input
                    className='search-contacts'
                    type='text'
                    placeholder='Search contacts..'/>
                    <Link to='/createContact'
                      className='add-contact'>
                      Add Contact</Link>
                </div>

                <ol className='contact-list'>
                  {contacts.map( contact => (
                    <li key={contact.id} className='contact-list-item'>
                      <div className='contact-avatar' style={{
                        backgroundImage: `url(${contact.avatarURL})`
                      }}> </div>
                      <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                      </div>
                      <button className='contact-remove' onClick={() => removeContact(contact)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ol>
            </div>
        </Fragment>
     );
}
 
export default List;