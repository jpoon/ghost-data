// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost run in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config,
    PUBLIC_URL = process.env.PUBLIC_URL || 'http://my-ghost-blog.com',
    PORT = process.env.PORT || '2368',
    GHOST_CONTENT = process.env.GHOST_CONTENT

console.log('GHOST_CONTENT:', GHOST_CONTENT)    //  /var/lib/ghost

config = {
    // ### Production
    production: {
        url: PUBLIC_URL,
        paths: {
            contentPath: GHOST_CONTENT
        },
        mail: {
            transport: 'SMTP',
             options: {
                 service: process.env.emailService,
                 auth: {
                     user: process.env.emailUsername, // mailgun username
                     pass: process.env.emailPassword  // mailgun password
                 }
             }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(GHOST_CONTENT, '/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: PORT,
        }
    },

    // ### Development 
    development: {
        url: 'http://localhost:' + PORT,
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(GHOST_CONTENT, '/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: PORT,
        },
        paths: {
            contentPath: path.join(GHOST_CONTENT, '/')
        }
    }
};

module.exports = config;
