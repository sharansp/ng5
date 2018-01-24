import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {

    //document.getElementById("wisdom").focus();
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      // Provide your Pool Id here
      IdentityPoolId: 'us-east-1:34f76e48-a9d5-43c0-9a8c-1098702510d7',
    });
    }
}

