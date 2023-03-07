import { Injectable } from '@angular/core';
import { AbteilungDataService } from './abteilung-data.service';
import { Mitarbeiter } from './mitarbeiter';

@Injectable()
export class MitarbeiterDataService {
mitarbeiter: Mitarbeiter[] = [];

constructor(private abteilungDataService: AbteilungDataService) {
  this.mitarbeiter.push(new Mitarbeiter(1, "Andreas", "Gesswein", 3, 5300, abteilungDataService.getAbteilungById(1), "andreas.gesswein@example.com", "1234567890", new Date("1980-05-12"), "männlich"));
  this.mitarbeiter.push(new Mitarbeiter(2, "Max", "Mustermann", 1, 4000, abteilungDataService.getAbteilungById(3), "max.mustermann@example.com", "0987654321", new Date("1995-01-23"), "männlich"));
  this.mitarbeiter.push(new Mitarbeiter(3, "Olaf", "Schmidt", 2, 3300, abteilungDataService.getAbteilungById(2), "olaf.schmidt@example.com", "4567890123", new Date("1987-11-05"), "männlich"));
  this.mitarbeiter.push(new Mitarbeiter(4, "Lisa", "Ernst", 2, 3900, abteilungDataService.getAbteilungById(4), "lisa.ernst@example.com", "7890123456", new Date("1992-09-19"), "weiblich"));



    setInterval(() => this.changeNumber(), 500)
  }
  save(mitarbeiter: Mitarbeiter){
    this.mitarbeiter.push(mitarbeiter);
  }

  delete(mitarbeiter: Mitarbeiter){
    this.mitarbeiter = this.mitarbeiter.filter(i => i !== mitarbeiter);
  }

  getMitarbeiterById(id: number): Mitarbeiter {
    for(let i=0; i<this.mitarbeiter.length; i++){
      if(this.mitarbeiter[i].id == id){
        return this.mitarbeiter[i];
      }
    }return null;
  }

  changeNumber(){
    for(let i=0; i<this.mitarbeiter.length; i++){
     let rndm= Math.random();
     if(rndm < 0.5 && this.mitarbeiter[i].gehalt >0){
     this.mitarbeiter[i].gehalt --;
     }else if(rndm >= 0.5){
      this.mitarbeiter[i].gehalt ++;
    }

    }
  }
}
