# MMQQ App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## German Version:

Bevor man aber die Anwendung lokal nutzen kann, müssen noch einige Schritte im Voraus getan werden. 
Als erstes muss node.js auf dem Rechner installiert sein, damit man diverse npm-Services nutzen kann. 
Die aktuellste Version findet man online unter https://nodejs.org/en/.

Danach benötigt man die Angular CLI. Mit dieser lassen sich Projekte kreieren, Anwendungs- oder Library-Code 
generieren oder man verwendet diese einfach nur zum Testen und zum Ausführen von Code. Um die CLI zu installieren, 
muss folgende Zeile in die Windows Eingabeaufforderung eingegeben werden:


npm install -g @angular/cli


Wurde diese erfolgreich installiert, muss nun die Datenbank eingerichtet werden. Hierbei lädt man den MongoDB-Client von 
deren Website herunter und installiert diesen im Anschluss. Eine passende exe-Datei befindet sich auch auf der DVD im Anhang.
 Wichtig ist hierbei, dass der data- und der log-Ordner sich im selben Verzeichnis wie MongoDB befinden. 
Zum Ausführen des MongoDB-Service wird von nun an die im bin-Ordner enthaltene exe-Datei mongod verwendet. 
Beim Start des Service geht ein Konsolen-Fenster auf, wo am Ende stehen sollte:


I NETWORK  [initandlisten] waiting for connections on port 27017


Der Service wartet nun auf eine Verbindung. Diese stellt man über einen weiteren Befehl in der Eingabeaufforderung her. 
Zunächst navigiert man zum Ordner der Applikation. Dieses Verzeichnis sollte aufgrund der Einfachheit im Standard Benutzer-
Ordner in Windows sein, sprich in C:\Users\[aktueller Nutzer]. Denn so muss man nur noch folgende zwei Befehle in die Konsole eingeben:


cd test (bzw. anstatt test den Namen der Anwendung, sprich hier: mmqqapp)

node server


Nach dem Ausführen dieser beiden Befehle sollte am Ende Database is connected stehen. Ist dies nicht der Fall, muss der 
MongoDB-Service noch deaktiviert sein. Dies kann man unter Dienste nachschauen. Sind nun alle Services korrekt ausgeführt 
worden, ist es an der Zeit die Anwendung zu kompilieren. Dies geschieht wieder über einen Konsolen-befehl:


cd test1

ng s -o


Durch letzteren Befehl öffnet sich im Standard-Browser des Systems ein Fenster mit localhost/4200 in der URL-Zeile. 
Da Chrome oder Firefox kein lokales Hosting unterstützen, muss die eben genannte URL im Edge-browser, sprich dem Standard 
Windows 10 Browser, geöffnet werden. Hier sollte man zunächst die MMQQ-View sehen.

Um die Daten in der Datenbank zu kontrollieren empfehle ich Robo3T, diesesn einfach mit localhost:27017 verbinden und dann 
kann man die Daten in einer übersichtlichen Öberfläche nachvollziehen.

*Anmerkung: Es kann sein, dass MongoDB eine gewisse Zeit brauch, um vollständig nutzbar sein zu können.
Am besten immer 5 Minuten vor Anwendungsstart die Datenbank starten, um Verzögerungen zu vermeiden.


