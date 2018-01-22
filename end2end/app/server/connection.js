import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../../knexfile'

export const kx =  knex(config) 

const orm = bookshelf(kx)
orm.plugin('pagination')
export default orm 