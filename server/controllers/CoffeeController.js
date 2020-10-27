import BaseController from "../utils/BaseController.js"
import { coffeeService } from "../services/CoffeeService.js"
export class CoffeeController extends BaseController {
  constructor() {
    super('api/coffees')
    this.router
      .get('', this.getAll)
      .delete('/:id', this.delete)
      .post('', this.create)
      .put('/:id', this.put)
  }

  put(req, res, next) {
    try {



      res.send({ message: "Modified Coffee!" })
    } catch (error) {
      next(error)
    }
  }
  getAll(req, res, next) {
    try {
      let coffees = coffeeService.getAll()
      res.send({ data: coffees, message: "Got the coffees" })
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      let rawCoffee = req.body
      coffeeService.create(rawCoffee)
      res.send({ data: rawCoffee, message: "Created coffee" })
    } catch (error) {
      next(error)
    }
  }
  delete(req, res, next) {
    try {
      let id = req.params.coffeeId
      coffeeService.delete(id)
      res.send({ message: "Deleted coffee!" })
    } catch (error) {
      next(error)
    }

  }

}