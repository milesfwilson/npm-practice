import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'
class JobService {
  async getAll(query) {
    let data = await dbContext.Jobs.find(query = {})
    return data
  }
  async getOne(id) {
    return await dbContext.Jobs.find(id)
  }
  async create(body) {
    return await dbContext.Jobs.create(body)
  }
  async edit(id, body) {
    return await dbContext.Jobs.findByIdAndUpdate(id, body)
  }
  async delete(id) {
    return await dbContext.Jobs.findByIdAndDelete(id)
  }

}

export const jobService = new JobService()