import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ISpecieDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-specie-detail',
	templateUrl: './page-specie-detail.component.html',
	styleUrls: ['./page-specie-detail.component.less']
})

export class PageSpecieDetailComponent implements OnInit {
	private _data: ISpecieDto = null;

	@Input()
	set data(x: ISpecieDto) {
		this._data = x;
		this.dataChange.emit(this.data);
	}

	@Output()
		dataChange = new EventEmitter<ISpecieDto>();

	constructor(
	) {
	}

	ngOnInit() {
	}

	get data(): ISpecieDto {
		return this._data;
	}
}
