import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
 async generateResponse(input:string){
  return `AI response for: ${input}`;
 }
}