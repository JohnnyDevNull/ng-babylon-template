import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { EngineComponent } from './engine/engine.component';
import { UiComponent } from './ui/ui.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        EngineComponent,
        UiComponent,
    ]
})
export class AppComponent {}
