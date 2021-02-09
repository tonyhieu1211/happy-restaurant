const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  name: {type: String, default: '', display: true},
  email: {type: String, default: ''},
  phone: {type: String, default: ''},
  date: {type: Date, default: new Date()},
  time: {type: String, default: ''},
  person: {type: Number, default: 0},
  schema: { type: String, default: 'reservation', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Reservation extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Reservation
