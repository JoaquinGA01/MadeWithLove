import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private viewChangeSource = new BehaviorSubject<number>(0);
  viewChange$ = this.viewChangeSource.asObservable();

  changeView(opcion: number) {
    this.viewChangeSource.next(opcion);
  }
}
