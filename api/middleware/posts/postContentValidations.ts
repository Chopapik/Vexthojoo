import { Request, Response, NextFunction } from "express";

export const checkStringLength = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text, ascii } = req.body;

  if (text && text.length > 1024) {
    res.status(409).json({ message: "Text jest za długi" });
    return;
  }

  if (ascii && ascii.length > 1024) {
    res.status(409).json({ message: "Ascii jest za długie" });
    return;
  }
  next();
};

export const checkIsPostEmpty = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text, ascii, ytVideoLink } = req.body;

  if (!text && !ascii && !ytVideoLink && !req.file) {
    res.status(409).json({ message: "Post jest pusty" });
    return;
  }

  next();
};

export const checkLink = (req: Request, res: Response, next: NextFunction) => {
  const { ytVideoLink } = req.body;

  if (ytVideoLink) {
    const youtubeRegExp =
      /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/;
    if (!youtubeRegExp.test(ytVideoLink)) {
      res.status(409).json({ message: "Niepoprawny link" });
      return;
    }
  }
  next();
};

export const checkTextWordsLength = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text } = req.body;

  if (text) {
    const splitString = text.split(" ");
    const isStringToLong = splitString.some((word: string) => word.length > 49);

    if (isStringToLong) {
      res.status(409).json({
        message: "Jedno ze słów jest za długie. Limit znaków bez spacji to 49.",
      });
      return;
    }
  }

  next();
};
