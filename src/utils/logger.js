import {transports,format,createLogger} from 'winston'

const {combine, timestamp, printf, colorize,json} = format

const customOptions = {
level:{
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5

    },
color:{
    error: 'red',
    warn: 'yellow',
    info: 'green',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'magenta',
    }
}
const customFormat = printf(({level,message,timestamp})=>{
    return `${timestamp} [${level}]>> ${message} ` 
})

export const logger =  createLogger({
    levels: customOptions.level,
    format:combine(
        colorize({all:true}),
        timestamp({format: 'YYYY-MM-DD hh:mm:ss.SSS A'}),
        customFormat
        ),
    transports: [
        new transports.Console(
            ()=> {
                switch (process.env.LOG_LEVEL)
                {
                    case 'dev': 
                        return 'error'
                    case 'prod':
                        return 'warn'
                    default:
                        return 'info'
                }}),
        new transports.File({
            filename: 'errorLOG',
            
        })
    ]
})

