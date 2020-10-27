import { dbContext } from '../db/DbContext.js'
import { BadRequest } from "../utils/Errors"

class CarService {
  async getOne(id) {
    return await dbContext.Cars.findById(id)
  }
  async getAll(query = {}) {
    let data = await dbContext.Cars.find(query)
    return data
  }
  async create(body) {
    return await dbContext.Cars.create(body)
  }
  async edit(id, body) {
    return await dbContext.Cars.findByIdAndUpdate(id, body, { new: true })
  }
  async delete(id) {
    let car = await dbContext.Cars.findByIdAndDelete(id)
    if (!car) {
      throw new BadRequest("There is no car with that ID!")
    }
    return car
  }
}

export const carService = new CarService()