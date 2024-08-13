import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NotificationChannel } from '../types/notification.types';

@Schema()
export class UserSettings {
  @Prop({ type: [String], required: true })
  channel: NotificationChannel[];
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings);
