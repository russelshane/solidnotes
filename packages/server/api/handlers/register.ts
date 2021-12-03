import { hash } from 'argon2';
import { Request, Response } from 'express';
import { User } from '../../entity/User';
import logger from '../../util/logger';

interface RegisterInputs {
  username: string;
  password: string;
  email: string;
}

async function register(req: Request, res: Response) {
  const { username, password, email }: RegisterInputs = req.body;

  // Hash password and make username input lowercase
  const hashedPassword = await hash(password, { hashLength: 12 });
  const filteredUsername = await username.toLowerCase();

  // Persist new user to database
  await User.insert({
    username: filteredUsername,
    password: hashedPassword,
    email,
  }).catch((err) => {
    logger.error(`Error while creating user. Details: ${err}`);
    return res.status(500).json({ errors: 'Error while creating account. Try again.' });
  });

  // Check for user
  const user = await User.findOne({ where: { username } }).catch((err) => {
    logger.error(`Error while fetching new user. Details: ${err}`);
    return res.status(500).json({ errors: 'Error while creating account. Try again.' });
  });

  // @ts-ignore
  req.session.user = await user.username;

  return res.status(200).json({ user: user });
}

export { register };
