import React from 'react';

class User extends React.Component {
    constructor(name, surname, avatarUrl, degree) {
        super();
        this.name = name;
        this.surname = surname;
        this.avatarUrl = avatarUrl;
        this.degree = degree;
    }
}

export default User;