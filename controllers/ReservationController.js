const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Reservation = require('../models/Reservation')

class ReservationController extends Controller {
  constructor () {
    super(Reservation, process.env)
  }

  async get (params) {
    const reservations = await Reservation.find(params, Controller.parseFilters(params))
    return Reservation.convertToJson(reservations)
  }

  async getById (id) {
    const reservation = await Reservation.findById(id)
    if (reservation == null) {
      throw new Error(`${Reservation.resourceName} ${id} not found.`)
    }

    return reservation.summary()
  }

  async post (body) {
    const reservation = await Reservation.create(body)
    return reservation.summary()
  }

  async put (id, params) {
    const reservation = await Reservation.findByIdAndUpdate(id, params, { new: true })
    return reservation.summary()
  }

  async delete (id) {
    const reservation = await Reservation.findByIdAndRemove(id)
    return reservation
  }
}

module.exports = new ReservationController()

