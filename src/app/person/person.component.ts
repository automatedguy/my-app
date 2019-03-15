import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {


  persons = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPersons();
  
  }

  getPersons() {
    this.persons = [];
    this.rest.getPersons().subscribe((data: {}) => {
      console.log(Object.keys(data["results"]));
      this.persons = Object(data);
    });
  }

  add() {
    this.router.navigate(['/person-add']);
  }

  delete(id) {
    this.rest.deletePerson(id)
      .subscribe(res => {
          this.getPersons();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
