import { Component, OnInit, ViewChild } from '@angular/core';
import { Client, MEMBERSHIPS } from '../../Models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})

export class AddClientComponent implements OnInit {
 client: Client ={
   memberName: '',
   guardianName:'',
   email: '',
   phone: 0,
   membership: '',
   }

   @ViewChild('clientForm') form: any;
   memberships: string[];

  constructor(
    private flashmessages: FlashMessagesService,
    private clientServices: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.memberships = MEMBERSHIPS;
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    
    if(!valid) {
      this.flashmessages.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 2000
      });
    } else {
      this.clientServices.newMember(value);
      this.flashmessages.show('New Member added successfully!', {
        cssClass: 'alert-success', timeout: 2000
      });
      this.router.navigate(['/'])
    }

  }

}
