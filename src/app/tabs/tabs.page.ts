import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { TabsService } from './tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterViewInit {

  @ViewChild('testTabs') testTabs: IonTabs;
  constructor(
    private tabsService: TabsService,
  ) {

  }

  ngAfterViewInit() {
    this.listenToTabs();

    this.tabsService.changeTab$.subscribe(tab => {
      this.testTabs.select(tab);
    });

  }


  private listenToTabs() {
    this.testTabs.ionTabsDidChange.subscribe(event => {
      console.log("ionTabsDidChange", event);
      this.tabsService.setSelectedTab(event.tab);
    });

    this.testTabs.ionTabsWillChange.subscribe(event => {
      console.log("ionTabsWillChange", event);
    });
  }

}
