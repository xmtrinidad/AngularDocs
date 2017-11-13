import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {FirestoreRoutingModule} from './firestore-routing.module';

import { ItemService } from './traversy-media/item.service';
import { AuthService } from './auth.service';

import { environment } from '../../environments/environment';

import {DesignCourseTutorialComponent} from './design-course-tutorial/design-course-tutorial.component';
import { TraversyMediaComponent } from './traversy-media/traversy-media.component';
import { FirebaseAuthTutorialComponent } from './firebase-auth-tutorial/firebase-auth-tutorial.component';
import { AuthComponent } from './firebase-auth-tutorial/auth/auth.component';

const traversy = {
  apiKey: 'AIzaSyBk4i17TqWY8N26HLnXUss-278VtrRs5gc',
  authDomain: 'travery-media-tut.firebaseapp.com',
  databaseURL: 'https://travery-media-tut.firebaseio.com',
  projectId: 'travery-media-tut',
  storageBucket: 'travery-media-tut.appspot.com',
  messagingSenderId: '660004503302'
};
const firstauth = {
  apiKey: 'AIzaSyC-AhmIvOmGBPaETj6Tbjpr2dL4gXU2k48',
  authDomain: 'first-auth-67807.firebaseapp.com',
  databaseURL: 'https://first-auth-67807.firebaseio.com',
  projectId: 'first-auth-67807',
  storageBucket: '',
  messagingSenderId: '1011448685282'
};



@NgModule({
  declarations: [DesignCourseTutorialComponent, TraversyMediaComponent, FirebaseAuthTutorialComponent, AuthComponent],
  imports: [
    CommonModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireModule.initializeApp(traversy),
    AngularFireModule.initializeApp(firstauth),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    FirestoreRoutingModule
  ],
  exports: [
    DesignCourseTutorialComponent,
    TraversyMediaComponent,
    FirebaseAuthTutorialComponent
  ],
  providers: [ItemService, AuthService]
})

export class FirestoreModule { }
