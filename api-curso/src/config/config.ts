import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
export const configSistema={
    dbRelacional:{
        hostname: process.env.DB_HOSTs || 'localhost',
    },
    dbMongo:{},
    jwt:{
        expireTime: '60s',
        secret: process.env.SECRET_JWT
    }
}