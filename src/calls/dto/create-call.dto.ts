export class CreateCallDto {
  phoneNumber: string;
  direction: 'INBOUND' | 'OUTBOUND';
}