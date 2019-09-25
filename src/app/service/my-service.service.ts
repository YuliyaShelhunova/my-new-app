import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  public data = [
    {
      "title": "Europe",
      "nodes": [
        {
          "title": "UK",
          "nodes": []
        },
        {
          "title": "Austria",
          "nodes": [{
            "title": "S.Austria",
            "nodes": [{
              "title": "test",
              "nodes": []
            }, {
              "title": "test2",
              "nodes": []
            }
            ]
          }, {
            "title": "N.Austria",
            "nodes": []
          }]
        },
        {
          "title": "Belarus",
          "nodes": []
        }
      ]
    },
    {
      "title": "America",
      "nodes": [
        {
          "title": "Canada",
          "nodes": []
        },
        {
          "title": "USA",
          "nodes": []
        }
      ]
    },
    {
      "title": "Australia",
      "nodes": []
    }
  ];

  constructor() { }

  public getData(): any {
    return this.data;
  }
}
