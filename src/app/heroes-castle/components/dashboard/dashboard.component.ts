import { Component } from '@angular/core';
import { ParseUtil } from '../../../shared/utils/parse-util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // TODO: work in progress

  private collapsed = false;

  collapsedSwitch() {
    this.collapsed = !this.collapsed;
  }

  private getParamsSearchString(params: boolean, values: any): string {
    return params ? ParseUtil.objectNotNullPropsToString(values) : 'Heroes search';
  }


}
