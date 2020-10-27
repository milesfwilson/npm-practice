import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'

class HouseService {
  async edit(id, body) {
    return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
  }
  async getOne(id) {
    return await dbContext.Houses.findById(id)
  }
  async delete(id) {
    return await dbContext.Houses.findByIdAndDelete(id)
  }
  async create(body) {
    return await dbContext.Houses.create(body)
  }
  async getAll(query) {
    let data = await dbContext.Houses.find(query = {})
    return data
  }

}

export const houseService = new HouseService()