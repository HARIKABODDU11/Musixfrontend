import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Result } from './modals/Result';
import { Observable } from 'rxjs';
import { Track } from './modals/Track';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MuzixService {

  constructor(private httpclient: HttpClient) { }

  public results: Result;
  public trackList: Track[];
  public url = "http://localhost:8091/track";

  getLastFmTracks(searchString: string): Observable<Result> {
    let params = new HttpParams();
    params = params.append('track', searchString);
    var url = 'http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=bfea52f7dab3095dcf8e862d3ce2229b&format=json'
    return this.httpclient.get<Result>(url, { params: params });
    // return this.results;
  }
  getTrack(): Observable<Track[]> {
    var getUrl = "http://localhost:8091/track";
    //this.httpclient.get<Track[]>(getUrl).subscribe((data) => {this.trackList = data});
    return this.httpclient.get<Track[]>(getUrl);
  }
  saveTrack(track: Track): Observable<Track> {
    var postUrl = "http://localhost:8091/track";
    return this.httpclient.post<Track>(postUrl, track, httpOptions);
  }
  getPlayList(): Observable<Track[]> {
    var getUrl = "http://localhost:8091/track";
    // this.httpclient.get<Track[]>(getUrl).subscribe((data) => {this.trackList = data});
    return this.httpclient.get<Track[]>(getUrl);
  }



  removeTrack(track: Track): Observable<Track> {
    console.log(track);
    return this.httpclient.delete<Track>(this.url + "/" + track.id);
  }
  editTrack(id: number, track: Track) {
    return this.httpclient.put<Track>(this.url + "/" + track.id, track, httpOptions);
  }

}




