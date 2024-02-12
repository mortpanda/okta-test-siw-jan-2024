import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }


  async oktaApiCall(method,url,token,content?) {
    const thisFetch = fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json; okta-version=1.0.0',
      },
      body: JSON.stringify(content),
    })
      .then(response => response.json())
    let responseJson = await thisFetch;
    return responseJson
  }

}


