import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakturaService {

  company = new BehaviorSubject<string>("Accelerantoronics");

  street = new BehaviorSubject<string>("Marienplatz 42");
  city = new BehaviorSubject<string>("82917 München");
  phone = new BehaviorSubject<string>("+49 123 4556 3445");
  email = new BehaviorSubject<string>("neuman@example.com");

  recName = new BehaviorSubject<string>("Ada Lovelace");
  recCompany = new BehaviorSubject<string>("Impactful Things");
  recStreet = new BehaviorSubject<string>("Squared Circle 13");
  recCity = new BehaviorSubject<string>("A1 9CD London");

  invNumber = new BehaviorSubject<string>("1062");
  invDate = new BehaviorSubject<string>("31.9.2020");
  salutation = new BehaviorSubject<string>("Sehr geehrtes Impactful Things Team");
  preamble = new BehaviorSubject<string>("für den Monat Januar 2020 erlaube ich mir die folgenden Leistungen in Rechnung zu stellen:");
  closing = new BehaviorSubject<string>("Gemäß §19 UStG ist in dem ausgewiesenen Betrag auf dieser Rechnung keine Umsatzsteuer enthalten. Ich bitte um Überweisung innerhalb der nächsten 30 Tage auf das unten genannte Konto.");

  taxId = new BehaviorSubject<string>("102/9384/756");
  bankName = new BehaviorSubject<string>("GLS Bank Bochum");
  iban = new BehaviorSubject<string>("DE50 4376 5342 6452 6543 00");
  bic = new BehaviorSubject<string>("GENODEM1GLS");

  private serviceUrl: string = '/api/';

  constructor(private httpClient: HttpClient) {
  }

  generatePdf() {
    const formData = new FormData();
    formData.append('company_name', this.company.value);
    formData.append('sender_name', this.company.value);
    formData.append('sender_street', this.street.value);
    formData.append('sender_city', this.city.value);
    formData.append('sender_tele', this.phone.value);
    formData.append('sender_email', this.email.value);
    formData.append('rec_name', this.recName.value);
    formData.append('rec_company', this.recCompany.value);
    formData.append('rec_street', this.recStreet.value);
    formData.append('rec_city', this.recCity.value);
    formData.append('inv_id', this.invNumber.value);
    formData.append('inv_date', this.invDate.value);
    formData.append('txt_salutation', this.salutation.value);
    formData.append('txt_preamble', this.preamble.value);
    formData.append('txt_closing', this.closing.value);
    formData.append('tax_id', this.taxId.value);
    formData.append('bank_name', this.bankName.value);
    formData.append('bank_iban', this.iban.value);
    formData.append('bank_bic', this.bic.value);

    this.httpClient.post<any>(this.serviceUrl, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
