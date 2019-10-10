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
}
