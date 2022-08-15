import { Request, Response } from 'express'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    // const users = await User.find()
    // return res.json(users)

    return res.json([])
  }

  public async store (req: Request, res: Response): Promise<Response> {
    // const user = await User.create(req.body)
    // return res.json(user)

    return res.json({ id: 1, name: 'luca' })
  }
}

export default new UserController()
