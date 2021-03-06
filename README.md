# Projekt je kreiran pomoću create-react-app sa kojim sam kreirao cijelu postavku React aplikacije.

Npm package koji je korišten u izradi Google Maps-a u Reactu jeste "google-maps-react" te "react-bootstrap"

```bash
create-react-app google-map-project
npm install google-maps-react
npm install react-bootstrap
```
INFO (Radi određenih problema koji sa sobom nose skoro sve npm biblioteke za google maps u Reactu predlažem da se u projekt ne instalira najnovija verzija React-a, jer React v16 nije baš kompaktibilan sa npm paketom)
U package.json postavite vaš react na:
```bash
{
"react": "^15.6.2",
}
```
Nakon toga ponovo pozovete:

`npm install`

Unutar GoogleMapsContainer komponente kreirani su Markeri, InfoWindow koji će nam prikazivati određeni dio mape koja se inicijalno odredila.


Projekt je kreiran u cilju ispunjavanja poslovnih obaveza te daljnjeg usavršavanja u React-u.

Osim kreiranja komponenti u React-u, kreiran je i NodeJS Api za "fetch" API koji će nam ispisivati "response" u našem markeru koji se nalazi u našem Reactu. Ako postoji response ispisat će se "lat", "lon" i ime date lokacije a ako ne postoji dobit ćemo false.

Povezivanjem NodeJs aplikacije sa React-om je završen glavni dio projekta, nakon toga je trebalo da se testira kako React tako i NodeJS aplikacija. Pri testiranju Node aplikacije korišteno je "mocha" i "chai" dok sam se prilikom testiranja React aplikacije koristio Jest-om.

Osnovna vizija projekta jeste da se inicijalizuje određeni broj markera, koji će se manuelno otvarati klikom te će u tom trenutku da se aktivira NodeJS aplikacija pomoću koje pozivamo API.

## Kako koristiti date fajlove?

Projekt se sastoji od dva dijela: React komponenti i NodeJs API aplikacije.

#REACT

Unutar React komponente pozivamo `npm install` kako bi instalirali dodatne "dependencies" koje će nam biti potrebni u ovom projektu
Nakon toga pozivamo `npm start` sa kojim pokrećemo naš React projekt
Tada dobijate pristup vašem localhost-u `http://localhost:3000`.


#NODEJS

Nakon pokretanja client side programa sad je na red došao server side

Potrebno instaliranje package-json fajla pomoću `npm init`
nakon toga pomoću `touch` opcije kreiramo novi js-fajl u programu u kojem ćemo "fetch-ati" naš API
pristupamo našoj NodeJs aplikaciji pomoću `node server.js`
Tada dobijate pristup vašem localhost-u `http://localhost:8080`




