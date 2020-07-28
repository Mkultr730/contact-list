import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import * as ContactsAPI from './API/contactAPI';

import List from './components/List';
import CreateContact from './components/CreateContact';

function App() {


  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await ContactsAPI.getAll();
      setContacts(response.data.contacts);
    }
    fetchData();
    
  }, []);

  const removeContact = (contact) => {
    setContacts(contacts.filter(con => con.id !== contact.id));

    ContactsAPI.remove(contact);
  }

  const createContact = (contact) => {
    console.log(contact);
    ContactsAPI.create(contact).then(contact => {
      setContacts([
        ...contacts,
        contact
      ]);
    })
  }

  return (
    <BrowserRouter>
      <Fragment>
        <div className="container">
          <Switch>
            <Redirect from="/" to="/contacts" exact />
            <Route path="/contacts">
              <List 
                contacts={contacts}
                removeContact={removeContact}
              />
            </Route>
            <Route path="/createContact">
              <CreateContact 
                createContact={createContact}
              />
            </Route>
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
