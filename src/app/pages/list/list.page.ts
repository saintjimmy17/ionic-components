import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private dataService: DataService) { }

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  favorite(user: any){
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user: any){
     console.log('share', user)
     this.ionList.closeSlidingItems();
  }

  unread(user: any){
    console.log('user', user);
    this.ionList.closeSlidingItems();
  }

}
