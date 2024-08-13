import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './User.schema';

// Define the subdocument schema
@Schema()
class Content {
  @Prop({ required: false })
  subject?: string;

  @Prop({ required: true })
  content: string;
}

// Create the Content schema (not exported)
const ContentSchema = SchemaFactory.createForClass(Content);

@Schema({ timestamps: true })
export class Notifications {
  @Prop({ required: true })
  channel: string;

  @Prop({ type: ContentSchema, required: true })
  contents: Content;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
