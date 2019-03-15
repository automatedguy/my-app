import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  @Input() personData:any = { nickname: '', first_name: '', last_name:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getPerson(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.personData = data;
    });
  }

  updatePerson() {
    this.rest.updatePerson(this.route.snapshot.params['id'], this.personData).subscribe((result) => {
      this.router.navigate(['/person-details'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }


}
