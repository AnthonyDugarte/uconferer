import { NextApiRequest, NextApiResponse } from "next";
import auth0 from "../../lib/auth0";

export default async function session(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await auth0.getSession(req, res);

    res.status(200).json({ accessToken: session?.idToken });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
