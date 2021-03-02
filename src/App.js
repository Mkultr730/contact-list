import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import * as ContactsAPI from './API/contactAPI';

import List from './components/List';
import CreateContact from './components/CreateContact';

function App() {
// Un comentario
// Otro comentario
  const [contacts, setContacts] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createContact = async (contact) => {
    await ContactsAPI.create(contact);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await ContactsAPI.getAll();
      setContacts(response.data.contacts);
    }
    fetchData();
    
  }, [createContact]);

  const removeContact = (contact) => {
    setContacts(contacts.filter(con => con.id !== contact.id));

    ContactsAPI.remove(contact);
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
