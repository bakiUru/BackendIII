import 'dotenv/config'

export const envData = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_DB,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
    JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN || '1h',
    SECRET_COOKIE: process.env.SECRET_COOKIE,
    HASH_USER: process.env.HASH_USER,
    LOG_LEVEL: process.env.LOG_LEVEL
    
}

