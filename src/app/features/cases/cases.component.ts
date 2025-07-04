import { Component, OnInit } from '@angular/core';
import { CaseDataService } from './case-data.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: any[] = [];

  constructor (private caseDataService: CaseDataService) { }

  ngOnInit(): void {
    this.cases = this.caseDataService.getCases();
  }
}
