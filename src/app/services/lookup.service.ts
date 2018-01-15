import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LookupService {
  private baseUrl = "http://localhost:3000/3.0";
  constructor(private _http: Http, private _httpClient: HttpClient) {

  }
  // get table frame_colors
  getFrameColor(brand) {
    brand = brand + "_dev";
    const _path: string = (this.baseUrl + '/lookup/frame_colors?key=' + brand)
    return this._httpClient.get(_path)
    .map((res: any) => {
      return res;
    });
  }

// create frame table
  createFrameColor(brand, framedata) {
    brand = brand + "_dev";
    let body: any = JSON.stringify(framedata)
    const _path: string = (this.baseUrl + '/lookup/frame_colors?key=' + brand)
    return this._httpClient.post(_path, body)
    .map((res: any) => {
      return res;
    });
  }

// update frame table
  updateFrameColor(brand, editedFramedata, frameId) {
    brand = brand + "_dev";
    let body: any = JSON.stringify(editedFramedata)
    console.log("body in updated>>>>>>>>............",body)
    const _path: string = (this.baseUrl + '/lookup/frame_colors/' + frameId + '?key=' + brand)
    return this._httpClient.put(_path, body)
    .map((res: any) => {
      return res;
    });
  }

  //get data from table style
  getStyle(brand) {
    brand = brand + "_dev";
    const _path: string = (this.baseUrl + '/lookup/style?key=' + brand)
    return this._httpClient.get(_path)
    .map((res: any) => {
      return res;
    });
  }

}