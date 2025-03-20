import { Request, Response } from "express";

export const test = async (req: Request, res: Response): Promise<any> => {
  return res.status(200).json({ message: "Test Auth API" });
};

export const login = async (req: Request, res: Response): Promise<any> => {
  return res.status(200).json({ message: "User successfully logged in" });
};

export const signup = async (req: Request, res: Response): Promise<any> => {
  return res.status(200).json({ message: "User successfully signed up" });
};

export const signout = async (req: Request, res: Response): Promise<any> => {
  return res.status(200).json({ message: "User successfully signed out" });
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  return res.status(200).json({ message: "User account successfully deleted" });
};
