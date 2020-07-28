const clone = require('clone')
const config = require('./config')

const db = {};

const defaultData = {
    contacts: [
        {
            id: 'martin',
            name: 'Martin Molinares Araujo',
            email: 'memolinares27@hotmail.com',
            avatarURL: config.origin + '/image.jpg'
        },
        {
            id: 'martin1',
            name: 'Martin1 Molinares Araujo',
            email: 'memolinares27@hotmail.com',
            avatarURL: config.origin + '/image.jpg'
        },
        {
            id: 'martin2',
            name: 'Martin2 Molinares Araujo',
            email: 'memolinares27@hotmail.com',
            avatarURL: config.origin + '/image.jpg'
        },
        {
            id: 'martin3',
            name: 'Martin3 Molinares Araujo',
            email: 'memolinares27@hotmail.com',
            avatarURL: config.origin + '/image.jpg'
        }
    ]
}

const get = (token) => {
    let data = db[token];

    if (data == null) data = db[token] = clone(defaultData);

    return data;
}

const create = (token, contact) => {
    if(!contact.id) {
        contact.id = Math.random().toString(36).substr(-8);
    }

    get(token).contacts.push(contact);

    return contact;
}

const remove = (token, id) => {
    const data = get(token)
    const contact = data.contacts.find(c => c.id === id)
  
    if (contact) {
      data.contacts = data.contacts.filter(c => c !== contact)
    }
  
    return { contact }
}

module.exports = {
    get,
    create,
    remove
}