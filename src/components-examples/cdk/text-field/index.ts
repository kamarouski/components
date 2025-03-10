import {TextFieldModule} from '@angular/cdk/text-field';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatLegacyInputModule} from '@angular/material/legacy-input';
import {MatLegacySelectModule} from '@angular/material/legacy-select';
import {TextFieldAutofillDirectiveExample} from './text-field-autofill-directive/text-field-autofill-directive-example';
import {TextFieldAutofillMonitorExample} from './text-field-autofill-monitor/text-field-autofill-monitor-example';
import {TextFieldAutosizeTextareaExample} from './text-field-autosize-textarea/text-field-autosize-textarea-example';

export {
  TextFieldAutofillDirectiveExample,
  TextFieldAutofillMonitorExample,
  TextFieldAutosizeTextareaExample,
};

const EXAMPLES = [
  TextFieldAutofillDirectiveExample,
  TextFieldAutofillMonitorExample,
  TextFieldAutosizeTextareaExample,
];

@NgModule({
  imports: [
    CommonModule,
    TextFieldModule,
    MatButtonModule,
    MatLegacyInputModule,
    MatLegacySelectModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class CdkTextFieldExamplesModule {}
