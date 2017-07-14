import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Widget } from './widget.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WidgetsService {
	selectedWidget: Widget;
	widgets: Widget[] = [
	{
    'id': 1,
    'img': 'assets/img/one.png',
    'name': 'Widget 1',
    'description': 'This is a description'
  },
  {
    'id': 2,
    'img': 'assets/img/two.png',
    'name': 'Widget 2',
    'description': 'This is a description!'
  },
  {
    'id': 3,
    'img': 'assets/img/three.png',
    'name': 'Widget 3',
    'description': 'This is a lovely widget'
  }
	];
  constructor() {}

  setSelectedWidget(w:Widget){
  	this.selectedWidget = w;
  }


  }