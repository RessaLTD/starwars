import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IFilmDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-film-detail',
	templateUrl: './page-film-detail.component.html',
	styleUrls: ['./page-film-detail.component.less']
})

export class PageFilmDetailComponent implements OnInit {
	private _data: IFilmDto = null;

	@Input()
	set data(x: IFilmDto) {
		this._data = x;
		this.dataChange.emit(this.data);
	}

	@Output()
	dataChange = new EventEmitter<IFilmDto>();

	constructor(
	) {
	}

	ngOnInit() {
	}

	get data(): IFilmDto {
		return this._data;
	}
}