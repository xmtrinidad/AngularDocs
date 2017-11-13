# Angular Docs

* For practicing and learning new concepts related to Angular



## Creating a new section
1.  Generate the component
2.  Navigate to the app.data.ts file
3.  Add the following object to the array of docs
    ```typescript
    {
      title: '',
      subtitle: '',
      link: '/'
    }
    ```
4.  Enter info about the doc into the object
5.  Update app-routing.module with the link added to the array of docs and new component
    ```typescript
    const routes: Routes = [
      ...
      { path: 'section', component: NewSectionComponent} 
    ]
    ```



## Creating sub-sections

1.  Inside the component, use the following HTML template:
    ```HTML
    <h1 class="display-4 text-center">Cloud Firestore</h1>
    <app-resources [resources]="resources"></app-resources>
    <hr>
    <div class="container">
      <app-example-card-info [examples]="examples"></app-example-card-info>
    </div>
    ```
2.  In the components typescript file use the following template to generate resource info and cards:
    ```typescript
    import { Resource } from '../models/resource';
    import { Example } from '../models/example';
    ```
    * Inside the class insert:
    ```typescript
    resources: Resource[] = [ {title: '',link: ''} ];
    examples: Example[] = [ { description: '', skills: [''], link: '/SECTION/' }];
    ```
3.  Populate any data related to the resources used in the section.
4.  Create a new section module and routing module
5.  Generate any new subsection components and add its information to the array of examples data in the main section component.
6.  Add routing to the subsection components in the section routing module
