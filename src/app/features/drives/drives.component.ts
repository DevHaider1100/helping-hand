import { Component, OnInit } from '@angular/core';
import { DistributionReport, RationFlourReport, ZakatDonationReport } from './models/drive.model';
import { DriveDataService } from './services/drive-data.service';

@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.css']
})
export class DrivesComponent implements OnInit{
  zakatDonationReport: ZakatDonationReport[] = [];
  distributionReport: DistributionReport[] = [];
  rationFlourReport: RationFlourReport[] = [];

  constructor(private driveDataService: DriveDataService) {}

  ngOnInit(): void {
    this.zakatDonationReport = this.driveDataService.getZakatDonationReport();
    this.distributionReport = this.driveDataService.getDistributionReport();
    this.rationFlourReport = this.driveDataService.getRationFlourReport();
  }

  isColspan(quantity: number | string): boolean {
    return typeof quantity === 'string';
  }
}
