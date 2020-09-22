
const defaultConfig = {
    env: {
        NODE_ENV: '"development'
    },
    port: 3060
}

module.exports = {
    development: {
        ...defaultConfig,
    },
    qa: {
        ...defaultConfig,
        env: {
            NODE_ENV: '"qa"'
        }
    },
    pp: {
        ...defaultConfig,
        env: {
            NODE_ENV: '"pp"'
        }
    },
    prod: {
        ...defaultConfig,
        env: {
            NODE_ENV: '"prod"'
        }
    }
}