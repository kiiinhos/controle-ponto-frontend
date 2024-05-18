import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const users = [{ userCode: "4SXXFMF" }, { userCode: "3SXYFGF" }];

  res.status(200).json(users);
};

export default handler;
