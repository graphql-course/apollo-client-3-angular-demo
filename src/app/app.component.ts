import { Apollo } from 'apollo-angular';
import { Component } from '@angular/core';
import { gql } from '@apollo/client/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'strangle-game';
  constructor(private apollo: Apollo) {
    this.apollo.query({
      query: gql`
        query {
          users {
            id
            name
            lastname
            email
            registerDate
          }
        }
      `,
    }).subscribe((result) => console.log('Usuarios registrados', (result.data as any).users));
  }
}
