import { Injectable } from '@angular/core';
import { Case } from '../models/case.model';
import { CASES } from 'src/app/shared/data/datastore';

@Injectable({
  providedIn: 'root',
})
export class CaseDataService {
  constructor() {}

  getCases(): Case[] {
    return CASES;
  }
}
