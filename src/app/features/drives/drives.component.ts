import { Component, OnInit } from '@angular/core';
import { DistributionReport, RationFlourReport, ZakatDonationReport } from './models/drive.model';
import { DriveDataService } from './services/drive-data.service';

@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.css']
})
export class DrivesComponent implements OnInit{
  zakatDonationReport2024: ZakatDonationReport[] = [];
  distributionReport2024: DistributionReport[] = [];
  rationFlourReport2024: RationFlourReport[] = [];
  zakatDonationReport2025: ZakatDonationReport[] = [];
  rationFlourReport2025: DistributionReport[] = [];
  iftarDriveCollectionReport2025: ZakatDonationReport[] = [];

  constructor(private driveDataService: DriveDataService) {}

  ngOnInit(): void {
    this.zakatDonationReport2024 = this.driveDataService.getZakatDonationReport2024();
    this.distributionReport2024 = this.driveDataService.getDistributionReport2024();
    this.rationFlourReport2024 = this.driveDataService.getRationFlourReport2024();
    this.zakatDonationReport2025 = this.driveDataService.getZakatDonationReport2025();
    this.rationFlourReport2025 = this.driveDataService.getRationFlourReport2025();
    this.iftarDriveCollectionReport2025 = this.driveDataService.getIftarDriveCollectionReport2025();
  }

  isColspan(quantity: number | string): boolean {
    return typeof quantity === 'string';
  }
}
