import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs:Array<any>;

  constructor() {

    this.songs = [{
      artist: 'Metallica',
      name: 'Nothing else matters',
      url: 'https://www.last.fm/music/Nirvana/_/Smells+Like+Teen+Spirit'
    },{
      artist: 'Eric Clapton',
      name: 'Nobody knows when you are down and out',
      url: 'https://www.last.fm/music/Nirvana/_/Smells+Like+Teen+Spirit'
    }];

  }

  ngOnInit() {
  }

}
