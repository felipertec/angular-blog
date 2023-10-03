import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AD72115B9CDAE873B2234BD0908CEF7B45A2D9AD9C66C699239B46E582F70A8B/scale?width=1200&aspectRatio=1.78&format=jpeg'
  contentTitle: string = 'NOTICIA EXEMPLO'
  contentDescription: string = 'Blabla bla'

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))

    )
  }

}
