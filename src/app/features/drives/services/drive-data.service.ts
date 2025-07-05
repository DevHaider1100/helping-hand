import { Injectable } from '@angular/core';
import { DistributionReport, RationFlourReport, ZakatDonationReport } from '../models/drive.model';

@Injectable({
  providedIn: 'root'
})
export class DriveDataService {

  constructor() { }

  // Fetch the zakat donation report data of 2024
  getZakatDonationReport(): ZakatDonationReport[] {
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
  getDistributionReport(): DistributionReport[] {
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
  getRationFlourReport(): RationFlourReport[] {
    return [
      { sr: 1, name: 'Ali Hasnain', item: 'One ration box & 5kg flour', quantity: 29 },
      { sr: 2, name: 'Haider Ejaz', item: 'One ration box & 5kg flour', quantity: 13 },
      { sr: 3, name: 'Shaheer Khan', item: 'One ration box & 5kg flour', quantity: 0 },
      { sr: 4, name: 'Aamir Sohail', item: 'One ration box & 5kg flour', quantity: 0 },
      { sr: 5, name: 'Shahzaib Ali', item: 'One ration box & 5kg flour', quantity: 10 },
      { sr: 6, name: 'Hassan Maqbool', item: 'One ration box & 5kg flour', quantity: 4 },
    ];
  }
}
