import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditorEnumComponent } from './components/editor-enum/editor-enum.component';
import { EditorTextComponent } from './components/editor-text/editor-text.component';
import { MultilineTextComponent } from './components/multiline-text/multiline-text.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		EditorEnumComponent,
		EditorTextComponent,
		MultilineTextComponent
	],
	exports: [
		EditorEnumComponent,
		EditorTextComponent,
		MultilineTextComponent
	]
})

export class AppCommonModule {

}