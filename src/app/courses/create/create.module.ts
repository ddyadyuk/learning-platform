import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CreatePageRoutingModule} from './create-routing.module';

import {CreatePage} from './create.page';
import {ModuleCreateModalPageModule} from "./module-create-modal/module-create-modal.module";
import {ModuleItemCreateModalPageModule} from "./module-item-create-modal/module-item-create-modal.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        CreatePageRoutingModule,
        ModuleCreateModalPageModule,
        ModuleItemCreateModalPageModule,
        FormsModule
    ],
    declarations: [CreatePage]
})
export class CreatePageModule {
}
