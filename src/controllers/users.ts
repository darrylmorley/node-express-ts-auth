import express from "express";

import { deleteUserById, getUsers } from "../db/users";

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    if (!users) return res.sendStatus(400);

    return res.status(200).json(users).end();
  } catch (error) {
    console.log("[GET_ALL_USERS__USERS_CONTROLLER]", error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    if (!deletedUser) return res.sendStatus(400);

    return res.status(200).json(deletedUser).end();
  } catch (error) {
    console.log("[DELETE_USER__USERS_CONTROLLER]", error);
    res.sendStatus(400);
  }
};
