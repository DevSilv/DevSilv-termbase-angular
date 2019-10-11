import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() groupContent: object;

  @Input() termContent: object;

  @Input() sources: [];

  termExperienceOptions = [{
    "key": 0,
    "value": "(no experience)"
  }, {
    "key": 1,
    "value": "Only read about"
  }, {
    "key": 2,
    "value": "Used once"
  }, {
    "key": 3,
    "value": "Used many times"
  }];

  termIsToLearnPropertyOptions = [{
    "key": true,
    "value": "YES"
  }, {
    "key": false,
    "value": "No"
  }];

  termIsProjectDonePropertyOptions = [{
    "key": true,
    "value": "YES"
  }, {
    "key": false,
    "value": "No"
  }];

  isNumber = function (data) {
    return !isNaN(data);
  }

  findTermSource = function (sourceID) {
    return this.sources.find(x => x["id"] === sourceID);
  };

  getInitialSelectedIndex = function (array, value) {
    return array.findIndex(
      x => x.key === value
    );
  };

  alignElementToRight = function (element) {
    const elementClientRects = element.getClientRects()[0];
    if (elementClientRects) {
      // For why this condition has to be true, see
      //  https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects#Return_value
      const bodyElementClientRects
        = document.getElementsByTagName("body")[0].getClientRects()[0];
      if (
        Math.floor(elementClientRects.right) - 20
        > Math.floor(bodyElementClientRects.width)
      ) {
        element.style.left = `${
          -(elementClientRects.right - bodyElementClientRects.width - 20)
          }px`;
      }
    }
  };

  alignElementToLeft = function (element) {
    const elementClientRects = element.getClientRects()[0];
    if (elementClientRects.left < 0) {
      element.style.right = `${
        !element.style.right
          ? elementClientRects.left - 20
          : element.style.right - elementClientRects.left - 20
        }px`;
    }
  };
}
