import { Router } from "express";
import { generateUsersMock } from "../mocks/user.mock.js";
import { UserServices } from "../services/user.services.js";
import { generatePetsMock } from "../mocks/pets.mock.js";
import { PetServices } from "../services/pet.services.js";

const userServices = new UserServices();
const petsServices = new PetServices();
const router = Router();
const MOCKER_NUMBER = 50;


router.get("/mockingpets", async (req, res) => {
  const pets = await generatePetsMock(100);
  console.log(pets)
  const response = await petsServices.createMany(pets);
  res.status(201).json({ status: "ok", payload: response });
});

router.get("/mockingusers", async (req, res) => {
  const users = await generateUsersMock(MOCKER_NUMBER);
  const response = await userServices.createMany(users);

  res.status(201).json({ status: "ok", payload: response });
});

router.get("/generateData/:cu/:cp", async (req, res) => {
  const { cu, cp } = req.params;
  const users = await generateUsersMock(Number(cu));
  const pets =  await generatePetsMock(Number(cp));
  const usersResponse = await userServices.createMany(users);
  const petsResponse = await petsServices.createMany(pets);

  res
    .status(201)
    .json({ status: "ok", message: `We autoGenerate [${cu}] USERs [${cp}] PETSs `,payload: { usersResponse, petsResponse } });
});

export default router;
