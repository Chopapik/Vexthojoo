import { Request, Response } from "express";
import db from "../../mysqlConnection";

const chatAiResponse = async (req: Request, res: Response) => {
  try {
    const query = await db.query("SELECT * FROM chatresponses");

    const [responseData] = query;

    const numberOfResponses: number = responseData.length;

    const rand = Math.floor(Math.random() * numberOfResponses);

    const randResponse = responseData[rand];

    console.log(responseData[rand]);

    res.status(200).json(randResponse);
  } catch (error) {
    res.status(500).json({ message: "Wewnętrzny bład serwera" });
  }
};

export default chatAiResponse;
