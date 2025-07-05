import { Injectable } from '@angular/core';
import { DistributionReport, RationFlourReport, ZakatDonationReport } from '../models/drive.model';

@Injectable({
  providedIn: 'root'
})
export class DriveDataService {

  constructor() { }

  // Fetch the zakat donation report data of 2024
  getZakatDonationReport2024(): ZakatDonationReport[] {
    return [
      { sr: 1, name: 'Ali Hasnain', type: 'Zakat', date: 'March 16, 2024', amount: 92000 },
      { sr: 2, name: 'Haider Ejaz', type: 'Zakat', date: 'March 16, 2024', amount: 37000 },
      { sr: 3, name: 'Shaheer Khan', type: 'Zakat', date: 'March 16, 2024', amount: 23000 },
      { sr: 4, name: 'Aamir Sohai', type: 'Zakat', date: 'March 16, 2024', amount: 5000 },
      { sr: 5, name: 'Shahzaib Ali', type: 'Zakat', date: 'March 16, 2024', amount: 28000 },
      { sr: 6, name: 'Hassan Maqbool', type: 'Zakat', date: 'March 16, 2024', amount: 10000 },
      { sr: 7, name: 'Haider Ejaz', type: 'Zakat', date: 'March 18, 2024', amount: 5000 },
      { sr: 8, name: 'Haider Ejaz', type: 'Zakat', date: 'March 18, 2024', amount: 7000 },
      { sr: 9, name: 'Shahzaib Ali', type: 'Donations', date: 'March 20, 2024', amount: 1000 },
      { sr: 10, name: 'Shahzaib Ali', type: 'Zakat', date: 'March 20, 2024', amount: 1000 },
      { sr: 11, name: 'Haider Ejaz', type: 'Zakat', date: 'March 20, 2024', amount: 5000 },
      { sr: 12, name: 'Shaheer Khan', type: 'Donations', date: 'March 21, 2024', amount: 10000 },
      { sr: 13, name: 'Shaheer Khan', type: 'Zakat', date: 'March 21, 2024', amount: 10000 },
      { sr: 14, name: 'Ali Hasnain', type: 'Donations', date: 'March 22, 2024', amount: 500 },
      { sr: 15, name: 'Shahzaib Ali', type: 'Donations', date: 'March 22, 2024', amount: 2500 },
      { sr: 16, name: 'Shahzaib Ali (For Ration)', type: 'Zakat', date: 'March 23, 2024', amount: 2500 },
      { sr: 17, name: 'Haider Ejaz', type: 'Zakat', date: 'March 23, 2024', amount: 5000 },
      { sr: 18, name: 'Haider, Shaheer, Ali, Shahzaib, Hassan, Amir', type: 'Zakat', date: 'March 23, 2024', amount: 1800 },
      { sr: 19, name: 'Ali Hasnain', type: 'Donations', date: 'March 26, 2024', amount: 5000 },
      { sr: 20, name: 'Haider Ejaz', type: 'Donations', date: 'March 26, 2024', amount: 8000 },
      { sr: 21, name: 'Shaheer Khan', type: 'Donations', date: 'April 4, 2024', amount: 20000 },
      { sr: 22, name: 'Shaheer Khan', type: 'Donations', date: 'April 5, 2024', amount: 7200 },
      { sr: 23, name: 'Ali Hasnain', type: 'Donations', date: 'April 7, 2024', amount: 6000 },
      { sr: 24, name: 'Ali Hasnain', type: 'Donations', date: 'April 7, 2024', amount: 500 },
      { sr: 25, name: 'Ali Hasnain', type: 'Donations', date: 'April 8, 2024', amount: 5000 },
      { sr: 26, name: 'Shaheer Khan', type: 'Donations', date: 'April 8, 2024', amount: 7500 },
    ];
  }

  // Fetch the Distribution report data of 2024
  getDistributionReport2024(): DistributionReport[] {
    return [
      { sr: 1, name: 'Metro', purpose: 'Ration Boxes', quantity: 56, priceMU: 1734, discount: 0, type: 'Zakat', notes: '', amount: 97106 },
      { sr: 2, name: 'Metro', purpose: 'Ration Boxes', quantity: 1, priceMU: 1734, discount: 1198, type: 'Zakat', notes: 'Loyalty points Discount (1198) LOST - COMPENSATED', amount: 536 },
      { sr: 3, name: 'Flour', purpose: 'Flour Bags', quantity: 56, priceMU: 740, discount: 0, type: 'Zakat', notes: '', amount: 41440 },
      { sr: 4, name: 'Money', purpose: 'Transferred to Aamir', quantity: 10, priceMU: 2474, discount: 0, type: 'Zakat', notes: 'Money instead of ration bags - Settlement details not mentioned', amount: 24740 },
      { sr: 5, name: 'Money', purpose: 'Transferred to Shaheer', quantity: 4, priceMU: 2474, discount: 0, type: 'Zakat', notes: 'Money instead of ration bags - Settlement details not mentioned', amount: 9896 },
      { sr: 6, name: 'Money', purpose: 'Transferred to Haider', quantity: 2, priceMU: 2474, discount: 0, type: 'Zakat', notes: 'Needed payment instead of ration bags', amount: 4948 },
      { sr: 7, name: 'Money', purpose: 'For the case of Masjid Imam who needed money for books', quantity: 'This was fully covered by Helping Hand team', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed total: 13000 / by Ali', amount: 13000 },
      { sr: 8, name: 'Money', purpose: 'For the case of Food panda driver', quantity: '', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed ration: unknown / By Shaheer', amount: 2474 },
      { sr: 9, name: 'Money', purpose: 'For the case of Food panda driver', quantity: '', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed ration: unknown / By Shaheer', amount: 2500 },
      { sr: 10, name: 'Money', purpose: 'For the case of Shahzaib\'s Friend Family', quantity: '', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed ration: unknown / By Shahzaib', amount: 4700 },
      { sr: 11, name: 'Money', purpose: 'For the case of Swat Family', quantity: '', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed ration: unknown / By Shahzaib', amount: 12000 },
      { sr: 12, name: 'Money', purpose: 'For the case of Fsd Family', quantity: '', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed ration: unknown / By Haider', amount: 6000 },
      { sr: 13, name: 'Money', purpose: 'For the case of gym guard and another family', quantity: '', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed ration: unknown / By Shaheer', amount: 5000 },
      { sr: 14, name: 'Money', purpose: 'For the case of workers in mill', quantity: '', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed ration: unknown / By Haider', amount: 6000 },
      { sr: 15, name: 'Money', purpose: 'For Ramadan Iftar Drive', quantity: '', priceMU: 0, discount: 0, type: 'Donations', notes: 'Collaborated with Silent Steps', amount: 19000 },
      { sr: 16, name: 'Money', purpose: 'For the case of Shahzaib\'s Friend Family', quantity: '', priceMU: 0, discount: 0, type: 'Zakat', notes: 'Needed ration: unknown / By Shahzaib', amount: 1960 },
      { sr: 17, name: 'Money', purpose: 'For Ramadan Iftar Drive', quantity: 'This was fully covered by Helping Hand Team', priceMU: 0, discount: 0, type: 'Donations', notes: 'At usmania Masjid (Fruits: 5400), (Khajoor + Rooh Afza + Sugar = 2880), (Daig: 14000), (Rent: 700), (Crockery: 1276 )', amount: 24256 },
      { sr: 18, name: 'Money', purpose: 'For Ramadan Iftar Drive', quantity: 'This was fully covered by Helping Hand Team', priceMU: 0, discount: 0, type: 'Donations', notes: 'At usmania Masjid (Daig: 14000), (Rent: 700)', amount: 14700 },
      { sr: 19, name: 'Money', purpose: 'For Ramadan Iftar Drive', quantity: 'This was fully covered by Helping Hand Team', priceMU: 0, discount: 0, type: 'Donations', notes: '(Boxes: 9700), (Rent: 300)', amount: 10000 },
      { sr: 20, name: 'Money', purpose: 'For Ramadan Iftar Drive', quantity: 'This was fully covered by Helping Hand Team', priceMU: 0, discount: 0, type: 'Donations', notes: 'Juices', amount: 5244 },
    ];
  }

  // Fetch the Ration Bags & Flour distribution report data of 2024
  getRationFlourReport2024(): RationFlourReport[] {
    return [
      { sr: 1, name: 'Ali Hasnain', item: 'One ration box & 5kg flour', quantity: 29 },
      { sr: 2, name: 'Haider Ejaz', item: 'One ration box & 5kg flour', quantity: 13 },
      { sr: 3, name: 'Shaheer Khan', item: 'One ration box & 5kg flour', quantity: 0 },
      { sr: 4, name: 'Aamir Sohail', item: 'One ration box & 5kg flour', quantity: 0 },
      { sr: 5, name: 'Shahzaib Ali', item: 'One ration box & 5kg flour', quantity: 10 },
      { sr: 6, name: 'Hassan Maqbool', item: 'One ration box & 5kg flour', quantity: 4 },
    ];
  }

  // Fetch the zakat donation report data of 2025
  getZakatDonationReport2025(): ZakatDonationReport[] {
    return [
      { sr: 1, name: 'Shahzaib', type: 'unknown', date: 'Feb 19, 2025', amount: 3000 },
      { sr: 2, name: 'Haider', type: 'unknown', date: 'Feb 19, 2025', amount: 1500 },
      { sr: 3, name: 'Shaheer', type: 'unknown', date: 'Feb 19, 2025', amount: 10000 },
      { sr: 4, name: 'Shaheer', type: 'unknown', date: 'Feb 20, 2025', amount: 10000 },
      { sr: 5, name: 'Haider', type: 'unknown', date: 'Feb 20, 2025', amount: 5000 },
      { sr: 6, name: 'Haider', type: 'Zakat', date: 'Feb 21, 2025', amount: 30000 },
      { sr: 7, name: 'Haider', type: 'Zakat', date: 'Feb 21, 2025', amount: 10000 },
      { sr: 8, name: 'Haider', type: 'Zakat', date: 'Feb 21, 2025', amount: 20000 },
      { sr: 9, name: 'Haider', type: 'Zakat', date: 'Feb 21, 2025', amount: 15000 },
      { sr: 10, name: 'Ali', type: 'Zakat', date: 'Feb 20, 2025', amount: 3000 },
      { sr: 11, name: 'Haider', type: 'unknown', date: 'Feb 23, 2025', amount: 20000 },
      { sr: 12, name: 'Shahzaib', type: 'unknown', date: 'Feb 24, 2025', amount: 3000 },
      { sr: 13, name: 'Haider', type: 'unknown', date: 'Feb 24, 2025', amount: 3000 },
      { sr: 14, name: 'Shaheer', type: 'unknown', date: 'Feb 24, 2025', amount: 60000 },
      { sr: 15, name: 'Haider', type: 'Zakat', date: 'Feb 27, 2025', amount: 20000 },
      { sr: 16, name: 'Haider', type: 'Zakat', date: 'Feb 27, 2025', amount: 500 },
      { sr: 17, name: 'Haider', type: 'unknown', date: 'Feb 27, 2025', amount: 3000 },
      { sr: 18, name: 'Shaheer', type: 'unknown', date: 'Feb 27, 2025', amount: 3000 },
      { sr: 19, name: 'Shahzaib', type: 'unknown', date: 'Feb 27, 2025', amount: 3000 },
      { sr: 20, name: 'Shahzaib', type: 'unknown', date: 'Feb 28, 2025', amount: 1000 },
      { sr: 21, name: 'Haider', type: 'unknown', date: 'Feb 27, 2025', amount: 1500 },
      { sr: 22, name: 'Haider', type: 'unknown', date: 'Feb 27, 2025', amount: 6000 },
      { sr: 23, name: 'Haider', type: 'Zakat', date: 'Feb 27, 2025', amount: 15000 },
      { sr: 24, name: 'Shahzaib', type: 'Zakat', date: 'Feb 28, 2025', amount: 15000 },
      { sr: 25, name: 'Shaheer', type: 'Zakat', date: 'Mar 1, 2025', amount: 19101 },
      { sr: 26, name: 'Shahzaib', type: 'unknown', date: 'Mar 1, 2025', amount: 5000 },
      { sr: 27, name: 'Haider', type: 'unknown', date: 'Mar 1, 2025', amount: 3000 },
      { sr: 28, name: 'Haider', type: 'Zakat', date: 'Mar 1, 2025', amount: 20000 },
      { sr: 29, name: 'Haider', type: 'Zakat', date: 'Mar 1, 2025', amount: 17000 },
      { sr: 30, name: 'Ali', type: 'Zakat', date: 'Feb 25, 2025', amount: 1000 },
      { sr: 31, name: 'Ali', type: 'Zakat', date: 'Mar 2, 2025', amount: 25000 },
      { sr: 32, name: 'Ali', type: 'Zakat', date: 'Mar 2, 2025', amount: 25000 },
      { sr: 33, name: 'Shahzaib', type: 'unknown', date: 'Mar 2, 2025', amount: 3000 },
      { sr: 34, name: 'Shaheer', type: 'unknown', date: 'Mar 2, 2025', amount: 16142 },
      { sr: 35, name: 'Shaheer', type: 'unknown', date: 'Mar 2, 2025', amount: 5000 },
      { sr: 36, name: 'Shaheer', type: 'unknown', date: 'Mar 2, 2025', amount: 10000 },
      { sr: 37, name: 'Haider', type: 'Zakat', date: 'Mar 2, 2025', amount: 3000 },
      { sr: 38, name: 'Shahzaib', type: 'unknown', date: 'Mar 2, 2025', amount: 3000 },
      { sr: 39, name: 'Shahzaib', type: 'Sadqa', date: 'Mar 2, 2025', amount: 4500 },
      { sr: 40, name: 'Shahzaib', type: 'unknown', date: 'Mar 2, 2025', amount: 100 },
      { sr: 41, name: 'Haider', type: 'Zakat', date: 'Mar 2, 2025', amount: 100000 },
      { sr: 42, name: 'Haider', type: 'unknown', date: 'Mar 2, 2025', amount: 10000 },
      { sr: 43, name: 'Shahzaib', type: 'unknown', date: 'Mar 2, 2025', amount: 1500 },
      { sr: 44, name: 'Shaheer', type: 'unknown', date: 'Mar 2, 2025', amount: 7 },
      { sr: 45, name: 'Ali', type: 'Zakat', date: 'Mar 3, 2025', amount: 5000 },
      { sr: 46, name: 'Haider', type: 'Zakat', date: 'Mar 3, 2025', amount: 10000 },
      { sr: 47, name: 'Haider', type: 'Sadqa', date: 'Mar 3, 2025', amount: 5000 },
      { sr: 48, name: 'Haider', type: 'unknown', date: 'Mar 3, 2025', amount: 5000 },
      { sr: 49, name: 'Shahzaib', type: 'unknown', date: 'Mar 3, 2025', amount: 3000 },
      { sr: 50, name: 'Haider', type: 'unknown', date: 'Mar 3, 2025', amount: 3000 },
      { sr: 51, name: 'Shaheer', type: 'unknown', date: 'Mar 4, 2025', amount: 20000 },
      { sr: 52, name: 'Shahzaib', type: 'Zakat', date: 'Mar 5, 2025', amount: 35000 },
      { sr: 53, name: 'Shahzaib', type: 'Sadqa', date: 'Mar 5, 2025', amount: 10000 },
      { sr: 54, name: 'Shahzaib', type: 'unknown', date: 'Mar 5, 2025', amount: 3000 },
      { sr: 55, name: 'Shahzaib', type: 'unknown', date: 'Mar 5, 2025', amount: 10000 },
      { sr: 56, name: 'Shahzaib', type: 'unknown', date: 'Mar 5, 2025', amount: 3000 },
      { sr: 57, name: 'Shahzaib', type: 'unknown', date: 'Mar 6, 2025', amount: 5000 },
      { sr: 58, name: 'Shahzaib', type: 'Sadqa', date: 'Mar 6, 2025', amount: 150 },
      { sr: 59, name: 'Haider', type: 'unknown', date: 'Mar 6, 2025', amount: 6000 },
      { sr: 60, name: 'Haider', type: 'unknown', date: 'Mar 6, 2025', amount: 3000 },
      { sr: 61, name: 'Shaheer', type: 'unknown', date: 'Mar 7, 2025', amount: 150 },
      { sr: 62, name: 'Haider', type: 'unknown', date: 'Mar 7, 2025', amount: 3000 },
      { sr: 63, name: 'Haider', type: 'unknown', date: 'Mar 7, 2025', amount: 50000 },
      { sr: 64, name: 'Haider', type: 'unknown', date: 'Mar 7, 2025', amount: 3000 },
      { sr: 65, name: 'Shaheer', type: 'unknown', date: 'Mar 7, 2025', amount: 5000 },
      { sr: 66, name: 'Haider', type: 'unknown', date: 'Mar 8, 2025', amount: 1500 },
      { sr: 67, name: 'Haider', type: 'unknown', date: 'Mar 9, 2025', amount: 3000 },
    ];
  }
}
