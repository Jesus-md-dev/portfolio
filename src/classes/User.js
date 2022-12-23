import React from 'react';

class User extends React.Component {
    constructor(name, surname, avatarUrl) {
        super();
        this.name = name;
        this.surname = surname;
        this.avatarUrl = avatarUrl;
    }
}

export default User;