import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalaService } from './sala.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDJee8qliYkcYVMIG57-w8mHHO7Vv1fvUM",
  authDomain: "chat-16432.firebaseapp.com",
  databaseURL: "https://ccp3anmca-deswebmob-chat.firebaseio.com",
  projectId: "chat-16432",
  storageBucket: "chat-16432.appspot.com",
  messagingSenderId: "104458173944",
  appId: "1:104458173944:web:35edf63bbe9d2af7"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SalaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
