import { customError, CustomError } from "../errors/custom.error.js";
import { UserServices } from "../services/user.services.js";

export class UserControllers {
  constructor() {
    this.userServices = new UserServices();
  }

  createNewUser = async (req,res,next)=>{
    try {
      const {first_name,
      last_name,
      email,
      password,
      role = ''
      } = req.body

      const newUser = await this.userServices.create({first_name,last_name,email,password,role})
      res.status(201).json({status: "success",  message: "User created", payload: newUser})
  }catch(error){
    next(error)
  }}
  createUserMock = async (req, res) => {
    const users = await this.userServices.createMocks();

    res.status(201).json({ status: "success", users });
  };

  getAllUsers = async (req, res, next) => {
    try {
      const users = await this.userServices.getAll();
      res.send({ status: "success", payload: users });
    } catch (error) {
      next(error);
    }
  };

  getUser = async (req, res, next) => {
    try {
      const userId = req.params.uid;

      const user = await this.userServices.getById(userId);

      res.send({ status: "success", payload: user });
    } catch (error) {
      console.log(`Error: ${error.message}`);
      next(error);
    }
  };

  updateUser = async (req, res) => {
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await this.userServices.getById(userId);
    if (!user)
      return res.status(404).send({ status: "error", error: "User not found" });

    const result = await this.userServices.update(userId, updateBody);
    res.send({ status: "success", message: "User updated", payload:result });
  };

  deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const result = await this.userServices.remove(userId);
    res.send({ status: "success", message: "User deleted",payload:result });
  };
}
  