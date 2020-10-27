import { fakeDB } from "../db/fakeDB"
import { BadRequest } from "../utils/Errors"

class CoffeeService {
  put(id) {
    let index = fakeDB.coffees.findIndex(c => c.id == id)
    if (index > 0) {
      throw new BadRequest("No coffee with that ID")
    }
    fakeDB.coffees
  }
  delete(id) {
    let index = fakeDB.coffees.findIndex(c => c.id == id)
    if (index > 0) {
      throw new BadRequest("No coffee with that ID")
    }
    fakeDB.coffees.splice(index, 1)
  }

  create(rawCoffee) {
    if (!rawCoffee.hasOwnProperty('origin') || !rawCoffee.hasOwnProperty('notes')) {
      throw new BadRequest("Coffee needs a name or color.")
    }
    rawCoffee.id = fakeDB.coffees.length
    fakeDB.coffees.push(rawCoffee)
  }

  getAll() {
    return fakeDB.coffees
  }

}

export const coffeeService = new CoffeeService()