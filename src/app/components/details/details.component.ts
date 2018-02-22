import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client, MEMBERSHIPS } from '../../Models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string;
  client: Client;
  memberships: string[];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getMember(this.id).subscribe(client => {
    this.client = client;
    });
  }

}
