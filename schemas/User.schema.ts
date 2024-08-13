import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './UserSettings.schema';
import { Notifications } from './Notifications.schema';
import { Companies } from './Companies.schema';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
  settings: UserSettings;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
  })
  notifications?: Notifications[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Companies' })
  company: Companies;
}

export const UserSchema = SchemaFactory.createForClass(User);
