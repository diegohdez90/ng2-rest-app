import { Component, OnInit } from '@angular/core';
import { Widget, WidgetsService } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {


	selectedWidget;
	widgets: Widget[];
  constructor(private widgetsService : WidgetsService) { }

  ngOnInit() {
  	this.widgets = this.widgetsService.widgets;
  	console.log("Widgets Loaded");
  }

	selectItem(widget){
		this.selectedWidget = widget;
	}
}
