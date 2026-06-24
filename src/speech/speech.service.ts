import { Injectable } from '@nestjs/common';

@Injectable()
export class SpeechService {
 async textToSpeech(text:string){
  return text;
 }

 async speechToText(audio:Buffer){
  return '';
 }
}