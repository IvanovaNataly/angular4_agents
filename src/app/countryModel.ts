export default class CountryModel {
  _numbIsolated: number;

  constructor(private _name: string) {
    this._numbIsolated = 1;
  }

  numbIsolated() {
    this._numbIsolated += 1 ;
  }
}
