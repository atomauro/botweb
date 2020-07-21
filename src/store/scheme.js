import uuid from 'uuid/v1';

let studio = {
    studioname: "Marvel Studios",
    emailstudio: "marvel@juanbustos.com",
    models: [ userid ]
}

export default [
  {
    id: uuid(),
    accestoken: uuid(),
    firstname: 'Juan',
    lastname: 'Butos',
    country: 'Colombia',
    region: 'Antioquia',
    email: 'juanbustos.com@gmail.com',
    password: 'password',
    avatarurl: 'url',
    emailverified: false,
    hasstudio: true,
    studio: studio,
  },
];

/*Note: If has studio then can't have studio */