import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CallsModule } from './calls/calls.module';
import { AiModule } from './ai/ai.module';
import { TwilioModule } from './twilio/twilio.module';
import { SpeechModule } from './speech/speech.module';

@Module({
 imports:[PrismaModule,UsersModule,CallsModule,AiModule,TwilioModule,SpeechModule],
})
export class AppModule {}