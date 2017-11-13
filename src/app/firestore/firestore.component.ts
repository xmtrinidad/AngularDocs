import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource';
import { Example } from '../models/example';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss']
})
export class FirestoreComponent implements OnInit {
  resources: Resource[] = [
    {
      title: 'Installation and Setup',
      link: 'https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md'
    },
    {
      title: 'Design Course Firestore Tutorial',
      link: 'https://www.youtube.com/watch?v=0Nah3foeyCM&t'
    },
    {
      title: 'Traversy Media Tutorial',
      link: 'https://www.youtube.com/watch?v=gUmItHaVL2w'
    },
    {
      title: 'Firebase Authentication',
      link: 'https://alligator.io/angular/firebase-authentication-angularfire2/'
    }
  ];

  examples: Example[] = [
    {
      description: 'Design Course Tutorial',
      skills: [
        'Installation & Setup',
        'Retrieve Collection',
        'Add Document',
        'Get Document ID',
        'Find/filter with where() method'
      ],
      link: '/firestore/design-course'
    },
    {
      description: 'Traversy Media Firestore App',
      skills: [
        'Make models folder for interface definitions',
        'Use service for Angular FS imports and related functions',
        'CRUD examples',
        'dblclick event'
      ],
      link: '/firestore/traversy-media'
    },
    {
      description: 'Authentication Tutorial from Aligator.io',
      skills: [],
      link: '/firestore/auth-tutorial'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
