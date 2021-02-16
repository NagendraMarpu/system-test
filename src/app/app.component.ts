import { Component, OnInit } from '@angular/core';
import { PaginationService } from './services/pagination.service';
import { UserService } from './services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'system-test';
  searchText :string;

  constructor(private user: UserService, private paginationService: PaginationService) {
    //this.formGroup = formBuilder.group({ filter: [''] });
   }

    private allItems: any;
    pager: any = {};
    pagedItems: any[];

   



    ngOnInit() {
        this.user.getJSON().subscribe(response => {
          for(let i=0;i<response.length;i++){
           response[i].timestamp = this.formatTimestamp(response[i].timestamp);
          }
          this.allItems = response;
          this.setPage(1);
        });


    }

    formatTimestamp(data){
      var ts_ms = data * 1000;
      var date_ob = new Date(ts_ms);
      var year = date_ob.getFullYear();
      var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      var date = ("0" + date_ob.getDate()).slice(-2);
      var hours = ("0" + date_ob.getHours()).slice(-2);
      var minutes = ("0" + date_ob.getMinutes()).slice(-2);
      var seconds = ("0" + date_ob.getSeconds()).slice(-2);
     // alert(minutes);
      return (date+'-'+ month +'-'+ year +' & '+ hours + ":" + minutes + ":" + seconds);
    }


    setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this.paginationService.getPager(this.allItems.length, page);

      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  
  
}
