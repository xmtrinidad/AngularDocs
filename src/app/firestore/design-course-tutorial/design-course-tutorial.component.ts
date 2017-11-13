import {Component, OnInit} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import {Observable} from 'rxjs/Observable';

interface Post {
  title: string;
  content: string;
}

// interface PostId extends Post {
//   id: string;
// }

@Component({
  selector: 'app-design-course-tutorial',
  templateUrl: './design-course-tutorial.component.html',
  styleUrls: ['./design-course-tutorial.component.scss']
})
export class DesignCourseTutorialComponent implements OnInit {
  title: string;
  content: string;

  postsCollection: AngularFirestoreCollection<Post>;
  posts: any;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  // Dependency injection reference to AngularFirestore import
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    /**
     * Retrieve Collection Example
     *
     **/
    this.postsCollection = this.afs.collection('posts');
    // this.posts = this.postsCollection.valueChanges();

    /** Getting document ID **/
    this.posts = this.postsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, data};
        });
      });

  }

  /**
   * Add post to collection
   */
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});

    /** Example of setting a custom ID **/
    // this.afs.collection('posts')
    //   .doc('my-custom-id')
    //   .set({'title': this.title, 'content': this.content});

    this.title = undefined;
    this.content = undefined;
  }

  /**
   * Get post based on ID
   * @param postId
   */
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  /**
   * Delete post based on ID
   * @param postId
   */
  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }

}
