import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private activeViewSource = new BehaviorSubject<number>(1);
  activeView = this.activeViewSource.asObservable();

  changeView(opcion: number): void {
    let currentView = this.activeViewSource.getValue();
    currentView += opcion;
    this.activeViewSource.next(currentView);
  }
}
