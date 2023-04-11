import { Component, OnInit, Injectable } from '@angular/core';
import {
	NgbCalendar,
	NgbDateAdapter,
	NgbDateParserFormatter,
	NgbDatepickerModule,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
	imports: [NgbDatepickerModule, FormsModule, JsonPipe],
   templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {

	model: NgbDateStruct;
	date: { day: number; year: number; month: number };

  ngOnInit() {
    console.log(this.model)
  }

	constructor(private calendar: NgbCalendar) {}

	selectToday() {
		this.model = this.calendar.getToday();
	}
}
