# Projekt je kreiran pomoću create-react-app sa kojim sam kreirao cijelu postavku React aplikacije.

Npm package koji je korišten u izradi Google Maps-a u Reactu jeste "google-maps-react" te "react-bootstrap"

```bash
create-react-app google-map-project
npm install google-maps-react
npm install react-bootstrap
```

Unutar GoogleMapsContainer komponente kreirani su Markeri, InfoWindow koji će nam prikazivati određeni dio mape koja se inicijalno odredila.


Projekt je kreiran u cilju ispunjavanja poslovnih obaveza te daljnjeg usavršavanja u React-u.

Osim kreiranja komponenti u React-u, kreiran je i NodeJS Api za "fetch" API koji će nam biti povezani sa React-om te će  se unutar InfoWindow-a  ispisivati osnovni podaci.

Povezivanjem NodeJs aplikacije sa React-om je završen glavni dio projekta, nakon toga je trebalo da se testira kako React tako i NodeJS aplikacija. Pri testiranju Node aplikacije korišteno je "mocha" i "chai" dok sam se prilikom testiranja React aplikacije koristio Jest-om.

Osnovna vizija projekta jeste da se inicijalizuje određeni broj markera, koji će se manuelno otvarati klikom te će u tom trenutku da se aktivira NodeJS aplikacija pomoću koje pozivamo API.

