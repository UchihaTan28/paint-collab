import { Injectable } from '@angular/core';
    declare const Pusher: any;
    @Injectable()
    export class PusherService {
      constructor() {
        const pusher = new Pusher('PUSHER_KEY', {
          cluster: 'eu',
        });
        this.channel = pusher.subscribe('painting');
      }
      channel;
      public init() {
        return this.channel;
      }
    }