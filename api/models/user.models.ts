import db from "../db/mysqlConnection";
import { UserFormDataType, UserType } from "../../types/user/user.types";
import handleError from "../utils/handleError";
import bcrypt from "bcrypt";

class User {
  public id: number;
  public name: string;
  public passwordHash: string;
  public avatarPath?: string | null;
  public createdAt: Date;
  public lastLogged: Date;
  public email?: string;

  public constructor({
    id,
    name,
    passwordHash,
    avatarPath,
    createdAt,
    lastLogged,
    email,
  }: UserType) {
    this.id = id;
    this.name = name;
    this.passwordHash = passwordHash;
    this.avatarPath = avatarPath;
    this.createdAt = createdAt;
    this.lastLogged = lastLogged;
    this.email = email;
  }

  static async create({
    name,
    passwordHash,
    email,
  }: UserType): Promise<User | void> {
    try {
      const [result] = await db.query(
        "INSERT INTO users (name, password, email) VALUES (?, ?, ?)",
        [name, passwordHash, email]
      );

      const user = new User({
        id: result.insertId,
        name: name,
        passwordHash: passwordHash,
        createdAt: new Date(),
        lastLogged: new Date(),
      });
      return user;
    } catch (error) {
      handleError(error as Error);
    }
  }

  static async delete(id: number): Promise<void> {
    try {
      await db.query("DELETE FROM users WHERE id = ?", [id]);
    } catch (error) {
      handleError(error as Error);
    }
  }

  static async update(id: number, userData: UserFormDataType): Promise<void> {
    const { name, password, avatarFile } = userData;
    try {
      await db.query(
        "UPDATE users SET username = ?, password = ?, avatarPath = ? WHERE id = ?",
        [name, password, avatarFile, id]
      );
    } catch (error) {
      handleError(error as Error);
    }
  }

  static async findById(id: number): Promise<User | void> {
    try {
      const [result] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
      if (result.length === 0) {
        throw new Error(`Nie znaleziono użytkownika o ID ${id}`);
      }

      return new User(result[0]);
    } catch (error) {
      handleError(error as Error);
    }
  }

  async verifyPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.passwordHash);
  }
}

export default User;
