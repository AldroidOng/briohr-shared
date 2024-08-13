import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        NOTIFICATION_MICROSERVICE_HOST: Joi.string().default('localhost'),
        NOTIFICATION_MICROSERVICE_PORT: Joi.number().default(3001),
        PROFILE_MICROSERVICE_HOST: Joi.string().default('localhost'),
        PROFILE_MICROSERVICE_PORT: Joi.number().default(3002),
        // Add other environment variables and their validation rules here
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [NestConfigModule, ConfigService], // Ensure both are exported
})
export class ConfigModule {}
