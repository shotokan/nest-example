import { EntitySchema } from 'typeorm';
import { User } from '../user.model';

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
      id: {
        type: String,
        primary: true,
        generated: 'uuid',
      },
      name: {
        type: String,
      },
      username: {
        type: String,
      },
    },
  });