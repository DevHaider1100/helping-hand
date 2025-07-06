import { Injectable } from '@angular/core';
import { DistributionReport, RamadanDriveCard, RationFlourReport, ZakatDonationReport } from '../models/drive.model';
import { AMOUNT_SPENDING_REPORT_2025, DISTRIBUTION_REPORT_2024, IFTAR_DRIVE_COLLECTION_REPORT_2025, RAMADAN_DRIVE_CARD_2024, RAMADAN_DRIVE_CARD_2025, RATION_FLOUR_REPORT_2024, RATION_FLOUR_REPORT_2025, ZAKAT_DONATION_REPORT_2024, ZAKAT_DONATION_REPORT_2025 } from 'src/app/shared/data/datastore';

@Injectable({
  providedIn: 'root'
})
export class DriveDataService {

  constructor() { }

  // Fetch the ramadan drive cards data of 2024
  getRamadanDriveCardData2024(): RamadanDriveCard[] {
    return RAMADAN_DRIVE_CARD_2024;
  }

  // Fetch the zakat donation report data of 2024
  getZakatDonationReport2024(): ZakatDonationReport[] {
    return ZAKAT_DONATION_REPORT_2024;
  }

  // Fetch the Distribution report data of 2024
  getDistributionReport2024(): DistributionReport[] {
    return DISTRIBUTION_REPORT_2024;
  }

  // Fetch the Ration Bags & Flour distribution report data of 2024
  getRationFlourReport2024(): RationFlourReport[] {
    return RATION_FLOUR_REPORT_2024;
  }

  // Fetch the ramadan drive cards data of 2025
  getRamadanDriveCardData2025(): RamadanDriveCard[] {
    return RAMADAN_DRIVE_CARD_2025;
  }

  // Fetch the zakat donation report data of 2025
  getZakatDonationReport2025(): ZakatDonationReport[] {
    return ZAKAT_DONATION_REPORT_2025;
  }

  // Fetch the ration distribution report data of 2025
  getRationFlourReport2025(): DistributionReport[] {
    return RATION_FLOUR_REPORT_2025;
  }

  // Fetch the iftar drive collection report data of 2025
  getIftarDriveCollectionReport2025(): ZakatDonationReport[] {
    return IFTAR_DRIVE_COLLECTION_REPORT_2025;
  }

  // Fetch the amount spendings report data of 2025
  getAmountSpendingsReport2025(): DistributionReport[] {
    return AMOUNT_SPENDING_REPORT_2025;
  }
}
