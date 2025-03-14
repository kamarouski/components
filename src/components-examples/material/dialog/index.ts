import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatLegacyDialogModule} from '@angular/material/legacy-dialog';
import {MatLegacyInputModule} from '@angular/material/legacy-input';
import {MatMenuModule} from '@angular/material/menu';
import {
  DialogContentExample,
  DialogContentExampleDialog,
} from './dialog-content/dialog-content-example';
import {DialogDataExample, DialogDataExampleDialog} from './dialog-data/dialog-data-example';
import {
  DialogElementsExample,
  DialogElementsExampleDialog,
} from './dialog-elements/dialog-elements-example';
import {
  DialogOverviewExample,
  DialogOverviewExampleDialog,
} from './dialog-overview/dialog-overview-example';
import {
  DialogFromMenuExample,
  DialogFromMenuExampleDialog,
} from './dialog-from-menu/dialog-from-menu-example';
import {DialogHarnessExample} from './dialog-harness/dialog-harness-example';
import {
  DialogAnimationsExample,
  DialogAnimationsExampleDialog,
} from './dialog-animations/dialog-animations-example';

export {
  DialogContentExample,
  DialogContentExampleDialog,
  DialogDataExample,
  DialogDataExampleDialog,
  DialogElementsExample,
  DialogElementsExampleDialog,
  DialogFromMenuExample,
  DialogFromMenuExampleDialog,
  DialogHarnessExample,
  DialogOverviewExample,
  DialogOverviewExampleDialog,
  DialogAnimationsExample,
  DialogAnimationsExampleDialog,
};

const EXAMPLES = [
  DialogContentExample,
  DialogContentExampleDialog,
  DialogDataExample,
  DialogDataExampleDialog,
  DialogElementsExample,
  DialogElementsExampleDialog,
  DialogFromMenuExample,
  DialogFromMenuExampleDialog,
  DialogHarnessExample,
  DialogOverviewExample,
  DialogOverviewExampleDialog,
  DialogAnimationsExample,
  DialogAnimationsExampleDialog,
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatLegacyDialogModule,
    MatLegacyInputModule,
    MatMenuModule,
    FormsModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class DialogExamplesModule {}
