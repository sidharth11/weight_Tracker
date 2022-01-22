"use strict";

const Inert = require( 'inert' );
const Vision = require( 'vision' );
const ejs = require( 'ejs' );

const auth = require( "./auth" );
const sql = require( "./sql" );


module.exports = {
  register: async server => {
    await server.register( [ Inert, Vision, auth, sql ] );

    // configure view templates
    server.views( {
      engines: { ejs },
      relativeTo: __dirname,
      path: "../templates",
      layout: true
    } );
  }
};

// sudo /etc/init.d/postgresql restart
// sudo chmod 666 /var/run/docker.sock
// lsof -i :5432
// sudo ss -lptn 'sport = :5432'
// docker start measurements

// docker container ls
// docker start weighttracker 

// https://stackoverflow.com/questions/10845998/i-forgot-the-password-i-entered-during-postgres-installation
// https://stackoverflow.com/questions/38249434/docker-postgres-failed-to-bind-tcp-0-0-0-05432-address-already-in-use
// https://stackoverflow.com/questions/46176584/docker-bind-for-0-0-0-04000-failed-port-is-already-allocated
// https://www.w3resource.com/PostgreSQL/connect-to-postgresql-database.php