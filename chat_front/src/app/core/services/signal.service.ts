import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  constructor(private socket: Socket) { }

  getMessages(): Observable<any> {
    return this.socket.fromEvent('message');
  }

  sendMessage(payload): void {
    this.socket.emit('send-message', payload);
  }
  senderOffer(payload: any, to: string): void {
    this.socket.emit('offer', payload, to);
  }

  sendAnswer(payload: any, to: string): void {
    this.socket.emit('answer', payload, to);
  }

  sendCandidate(payload: any, to: any) {
    this.socket.emit('ice-candidate', payload, to);
  }

  endCall(to) {
    this.socket.emit('end-call', to);
  }
}
