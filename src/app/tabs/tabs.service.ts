import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private _changeTab$ = new ReplaySubject<string>(1);
  changeTab$ = this._changeTab$.asObservable();


  private _selectedTab$ = new ReplaySubject<string>(1);
  selectedTab$ = this._selectedTab$.asObservable();

  private _tabsShowing$ = new BehaviorSubject(true);
  tabsShowing$ = this._tabsShowing$.asObservable();

  constructor() { }
  setSelectedTab(tab: string) {
    this._selectedTab$.next(tab);
  }

  changeTab(tab: string) {
    this._changeTab$.next(tab);
  }

  showTabs() {
    this._tabsShowing$.next(true);
  }

  hideTabs() {
    this._tabsShowing$.next(false);
  }
}
