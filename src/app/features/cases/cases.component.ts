import { Component, OnInit } from '@angular/core';
import { CaseDataService } from './services/case-data.service';
import { Case } from './models/case.model';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: Case[] = [];

  constructor (private caseDataService: CaseDataService) { }

  ngOnInit(): void {
    this.cases = this.caseDataService.getCases();
  }
}
