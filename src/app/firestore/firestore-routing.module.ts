import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {DesignCourseTutorialComponent} from './design-course-tutorial/design-course-tutorial.component';
import {TraversyMediaComponent} from './traversy-media/traversy-media.component';
import {FirebaseAuthTutorialComponent} from './firebase-auth-tutorial/firebase-auth-tutorial.component';

const routes: Routes = [
  {path: 'firestore/design-course', component: DesignCourseTutorialComponent},
  {path: 'firestore/traversy-media', component: TraversyMediaComponent},
  {path: 'firestore/auth-tutorial', component: FirebaseAuthTutorialComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class FirestoreRoutingModule {}

