import jwt, { Secret, SignOptions } from "jsonwebtoken";

const generateToken = (
  payload: { email: string; role: string },
  secret: Secret,
  expiresIn: string
): string => {
  const signOptions: SignOptions = {
    algorithm: "HS256",
    expiresIn: expiresIn as SignOptions['expiresIn'],
  };

  const token = jwt.sign(payload, secret, signOptions);
  return token;
};

export default generateToken;
