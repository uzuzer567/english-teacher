import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mode } from '../enums/mode';

@Injectable({
  providedIn: 'root',
})
export class CardBoardService {
  activeMode$ = new BehaviorSubject<Mode>(Mode.training);
}
