import { of } from 'rxjs';

// Create observable that emits three Car Make string values
export const carObservable = of("Ford", "Toyota", "Audi");

// Create observer object
export const carObserver = {
  next: (x: string) => console.log('Observer got a next car: ' + x),
  error: (err: Error) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

// Execute with the observer object
carObservable.subscribe(carObserver);
