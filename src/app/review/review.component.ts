import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit{
	title = "Angular CLI Course";
	name = "Diego Arturo Hernandez Fuentes";
	reviews = [{
		id: 1,
		name : "Angular Review",
		description : "This is a review of the Angular CLI course"
	},{
		id: 2,
		name : "Modules",
		description : "Organization angular application"		
	},{
		id: 3,
		name : "Components",
		description : "Dinamic organization of data from a service"
	},{
		id: 4,
		name : "Services",
		description : "Class to consume and share data to component"
	}];

	constructor(){}

	ngOnInit(){

	}

}
