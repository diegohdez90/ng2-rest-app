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
  	this.widgetsService.loadWidgets()
    .subscribe(result => this.widgets = result);
  }

	selectWidget(widget){
		this.selectedWidget = widget;
	}

  saveWidget(widget){
    this.widgetsService.saveWidget(widget)
                        .subscribe(responseWidget => {
                          if(widget.id){
                            this.replaceWidget(widget);
                          }else{
                            this.pushWidget(widget);
                          }
                          console.log(responseWidget);
                        });
    this.resetWidget();
  }

  pushWidget(widget:Widget){
    this.widgets.push(widget);
  }

  replaceWidget(widget:Widget){
    this.widgets = this.widgets.map(w => {
      return w.id === widget.id ? widget : w;
    })
  }

  deleteWidget(widget){
    this.widgetsService.deleteWidget(widget)
    .subscribe(() => 
      this.widgets.splice(this.widgets.indexOf(widget),1)
    );
    
  }


  resetWidget(){
    let emptyForm = { id:null, name:'', description:''};
    this.selectedWidget=emptyForm;
  }
}
