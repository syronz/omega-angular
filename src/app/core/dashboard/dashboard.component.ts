import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('snav', { static: true }) snav;
  mobileQuery: MediaQueryList;
  currentSideStatus = true;

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
  }


}
