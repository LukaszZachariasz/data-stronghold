# data-stronghold
Simple training app provides data management

# Mock data provided by json-server

json-server --watch data.json



#TODO description


- uzycie gotowego projektu (np. tour of heours)
- autoryzacja i autentyfikacja z uzyciem https://github.com/manfredsteyer/angular-oauth2-oidc
- do mockowania danych - json-server
- heroues powinien miec tez maila, typ  worker / manager / boss, czas umowy
- input:email (walidacja BE czy email istnieje)
  widok search z tabelą (design w paincie)
- dropdown z listą [worker, manager, boss]
- autocomplete pobiera listę osób przypisnych jako worker / manager / boss
- datepicker od, datepicker do pojawiaja sie tylko jak wybierzemy ‘workera’ (czas umowy)
- zwijany komponent, jesli bedzie zwiniety w formularzu, to wyswietlic wybrane dane z formularza na pasku
- details otworzy strone ze szczegolami danego uzytkownika
- remove otworzy okno modalne (czy na pewno chcesz usunac), jesli tak, to usuwamy
- jesli nie ma dodany uzytkownikow (Tour of Heroes) to nie mozemy otworzyc ekranu do wyszukiwania uzytkownikow
- przepisać wszystko na ngrx/store
- użyć też ngrx/entity

