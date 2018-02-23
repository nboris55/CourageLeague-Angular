import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client, MEMBERSHIPS } from '../../Models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client: Client ={
    memberName: '',
    guardianName:'',
    guardianPhone: '',
    email: '',
    phone: '',
    membership: '',
    }
    memberships:string[];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.memberships = MEMBERSHIPS;
    this.id = this.route.snapshot.params['id'];
    this.clientService.getMember(this.id).subscribe(client => {
    this.client = client;
    });
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {  
    if(!valid) {
      this.flashMessages.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 2000
      });
    } else {
      value.id = this.id;
      this.clientService.updateMember(value);
      this.flashMessages.show('Client updated successfully!', {
        cssClass: 'alert-success', timeout: 2000
      });
      this.router.navigate(['/client/'+this.id]);
    }
  }


}
