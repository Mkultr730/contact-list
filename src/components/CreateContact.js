import React from 'react';
import { Link } from 'react-router-dom'
import searlizeForm from 'form-serialize'

const CreateContact = ({createContact}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const val = searlizeForm(e.target, { hash: true });
        createContact(val);
    }


    return ( 
        <div>
        <Link to='/' className='close-create-contact'>Close</Link>
        <form 
            onSubmit={handleSubmit} 
            className='create-contact-form'
        >
          <div className='create-contact-details'>
            <input type='text' placeholder='Name' name='name' />
            <input type='text' placeholder='Email' name='email' />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
     );
}
 
export default CreateContact;