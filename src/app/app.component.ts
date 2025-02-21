import { Component } from '@angular/core';

import { COMMON_NAMES } from './common-names';
import { COMMON_TAGS } from './common-tags'

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: string[] = COMMON_NAMES;
  tagsItems: string[] = COMMON_TAGS;
}
