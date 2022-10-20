import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCADz9fwHhcOw6zR2WJor8306OIM7zczOw',
  authDomain: 'karinelefort-7efc5.firebaseapp.com',
  projectId: 'karinelefort-7efc5',
  storageBucket: 'karinelefort-7efc5.appspot.com',
  messagingSenderId: '481574262224',
  appId: '1:481574262224:web:fe6513ffa4a37e835055d5',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
