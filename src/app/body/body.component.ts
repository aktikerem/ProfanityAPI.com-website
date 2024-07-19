import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  result: string = ''; // Property to hold the result

  constructor(private http: HttpClient) {}

  onSubmit(data: any) {
    console.warn(data);

    const dataString = typeof data === 'object' ? JSON.stringify(data) : data.toString();
    const url = `https://api.profanityapi.com/${encodeURIComponent(dataString)}`;
    this.http.get(url, { responseType: 'text' })
      .subscribe((result) => {
        console.warn("result", result);
        this.result = result; // Assign the result to the property
      });
  }
}
