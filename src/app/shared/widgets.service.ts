import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Widget } from './widget.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3000/widgets/';
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {
	selectedWidget: Widget;
	widgets: Widget[] = [];
  constructor(private http:Http) {}
  loadWidgets(){
    return this.http.get(`${BASE_URL}`)
            .map(res => res.json())
            .map(widgets => 
                  widgets.map(
                      widget => Object.assign(
                        {}, 
                        widget, 
                        {
                           img: `${IMG_URL}${widget.img}`
                        }
                       )
                     )
                 );
  }

  saveWidget(widget){
    return (widget.id) ? this.updateWidget(widget) : this.createWidget(widget);
  }

  updateWidget(widget){
    return this.http.patch(`${BASE_URL}${widget.id}`,JSON.stringify(widget),HEADER)
                    .map(res =>  res.json())
                    .map(i => Object.assign({},i,{img:`${IMG_URL}${i.img}`}));
  }

  createWidget(widget:Widget){
    return this.http.post(`${BASE_URL}`,JSON.stringify(widget),HEADER)
                    .map(res =>  res.json);
  }

  deleteWidget(widget){
    return this.http.delete(`${BASE_URL}${widget.id}`)
    .map(res => res.json());
  }

}