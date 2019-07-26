import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fectch-operator',
  templateUrl: './fectch-operator.component.html',
  styleUrls: ['./fectch-operator.component.css']
})
export class FectchOperatorComponent implements OnInit {
@Input() srchCity: string;
@Output() operator: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  send()
  {
    console.log('send method fired');
    if(this.srchCity==='chennai')
    {
      this.operator.emit('Ramesh 8056266304');
    }
  
  else{
    this.operator.emit('Suresh 7092826093');
  }
}

}
