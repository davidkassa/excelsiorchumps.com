import { ChumpType } from '../chump-type.enum';
import * as firebase from 'firebase';

export interface IChump {
  $key?: string;
  type: ChumpType;
  createdAt: number;
  note: string;
}

export class Chump implements IChump {
  type: ChumpType;
  createdAt: number = firebase.database.ServerValue.TIMESTAMP as number;
  note: string;

  constructor(type: ChumpType, note: string) {
    this.type = type;
    this.note = note;
  }
}