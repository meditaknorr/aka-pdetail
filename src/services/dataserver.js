import BaseURL from './axioszo';

export default function Dataserver(country, LoadingOff, Datacaptcher) {
  BaseURL.get(`${country}?fields=name;capital;region;subregion;population;area;timezones;nativeName;flag;`)
    .then(res => {
      if(res.data && res.data.status) {
        Datacaptcher(null);
        LoadingOff();
      } else {
        Datacaptcher(res.data);
        LoadingOff();
      }
    })
    .catch(err => {
        console.log(err)
    })
}
