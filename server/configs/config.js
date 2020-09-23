
const defaultConfig = {
    env: {
        NODE_ENV: '"development'
    },
    port: 3060,
    db: {
        config: {
            connectionLimit: 1,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'eutopia'
        }
    }
}

module.exports = {
    development: {
        ...defaultConfig,
    },
    qa: {
        ...defaultConfig,
        env: {
            NODE_ENV: '"qa"'
        },
        db: {
            config: {
                connectionLimit: 1,
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'eutopia'
            }
        }
    },
    pp: {
        ...defaultConfig,
        env: {
            NODE_ENV: '"pp"'
        },
        db: {
            config: {
                connectionLimit: 10,
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'eutopia'
            }
        }
    },
    prod: {
        ...defaultConfig,
        env: {
            NODE_ENV: '"prod"'
        },
        db: {
            config: {
                connectionLimit: 10,
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'eutopia'
            }
        }
    }
}