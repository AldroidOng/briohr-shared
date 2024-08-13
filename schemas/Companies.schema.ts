import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Companies {
  @Prop({ unique: true, required: true })
  companyName: string;
}

export const CompaniesSchema = SchemaFactory.createForClass(Companies);
