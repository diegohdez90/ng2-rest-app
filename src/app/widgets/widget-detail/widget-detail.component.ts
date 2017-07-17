import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
	selector: 'app-widget-detail',
	templateUrl : 'widget-detail.component.html',
	styleUrls : ['widget-detail.component.css']
})

export class WidgetDetailComponent {
originalName: String;
widgetSelected: Widget;
@Output() save = new EventEmitter();
@Output() cancel = new EventEmitter();

@Input() set widget(w:Widget){
	console.log(w);
	if (w) {
		this.originalName = w.name;
	}
	this.widgetSelected = Object.assign({},w)
}

}