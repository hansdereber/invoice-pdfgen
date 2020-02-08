import {Component, OnInit} from '@angular/core';
import {faDownload, faFileDownload, faFilePdf, faFillDrip, faTrash, faUpload} from '@fortawesome/free-solid-svg-icons';
import {FakturaService} from "../../faktura.service";
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  faDownload = faDownload;
  faUpload = faUpload;
  faTrash = faTrash;
  faFilePdf = faFilePdf;
  faFileDownload = faFileDownload;
  faFillDrip = faFillDrip;

  constructor(private fakturaService: FakturaService) {
  }

  ngOnInit() {
  }

  saveForm() {

  }

  loadForm() {

  }

  resetForm() {

  }

  openPdf() {
    this.fakturaService.generatePdf().subscribe(response => {
      let blob: Blob = new Blob([response], {type: 'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      console.log(url);
      window.open(url);
    });
  }

  savePdf() {
    this.fakturaService.generatePdf().subscribe(response => {
      saveAs(response);
    });
  }

  preFillForm() {
    this.fakturaService.company.next("Accelerantoronics");

    this.fakturaService.street.next("Marienplatz 42");
    this.fakturaService.city.next("82917 München");
    this.fakturaService.phone.next("+49 123 4556 3445");
    this.fakturaService.email.next("neuman@example.com");

    this.fakturaService.recName.next("Ada Lovelace");
    this.fakturaService.recCompany.next("Impactful Things");
    this.fakturaService.recStreet.next("Squared Circle 13");
    this.fakturaService.recCity.next("A1 9CD London");

    this.fakturaService.invNumber.next("1062");
    this.fakturaService.invDate.next("31.9.2020");
    this.fakturaService.salutation.next("Sehr geehrtes Impactful Things Team");
    this.fakturaService.preamble.next("für den Monat Januar 2020 erlaube ich mir die folgenden Leistungen in Rechnung zu stellen:");
    this.fakturaService.closing.next("Gemäß §19 UStG ist in dem ausgewiesenen Betrag auf dieser Rechnung keine Umsatzsteuer enthalten. Ich bitte um Überweisung innerhalb der nächsten 30 Tage auf das unten genannte Konto.");

    this.fakturaService.taxId.next("102/9384/756");
    this.fakturaService.bankName.next("GLS Bank Bochum");
    this.fakturaService.iban.next("DE50 4376 5342 6452 6543 00");
    this.fakturaService.bic.next("GENODEM1GLS");
  }
}
