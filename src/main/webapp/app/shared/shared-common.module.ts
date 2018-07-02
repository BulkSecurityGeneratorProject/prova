import { NgModule } from '@angular/core';

import { ProvaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProvaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProvaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProvaSharedCommonModule {}
