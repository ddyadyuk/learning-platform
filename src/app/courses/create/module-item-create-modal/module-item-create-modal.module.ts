import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ModuleItemCreateModalPageRoutingModule} from './module-item-create-modal-routing.module';

import {ModuleItemCreateModalPage} from './module-item-create-modal.page';

import {QuillModule} from "ngx-quill"

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        ModuleItemCreateModalPageRoutingModule,
        QuillModule.forRoot()
    ],
    declarations: [ModuleItemCreateModalPage]
})
export class ModuleItemCreateModalPageModule {
}
