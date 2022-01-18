INSERT INTO [Bioskop].[dbo].[Bioskopi]([Naziv])
VALUES ('Cine Grand');

INSERT INTO [Bioskop].[dbo].[Bioskopi]([Naziv])
VALUES ('Cineplexx');

INSERT INTO [Bioskop].[dbo].[Sale]]([Naziv], [BrojRedova], [BrojSedista], [BioskopID])
VALUES ('Experience', 11, 12, 1);

INSERT INTO [Bioskop].[dbo].[Sale]]([Naziv], [BrojRedova], [BrojSedista], [BioskopID])
VALUES ('Pahulja', 6, 8, 1);

INSERT INTO [Bioskop].[dbo].[Sale]]([Naziv], [BrojRedova], [BrojSedista], [BioskopID])
VALUES ('Pčela', 9, 10, 1);

INSERT INTO [Bioskop].[dbo].[Sale]]([Naziv], [BrojRedova], [BrojSedista], [BioskopID])
VALUES ('Mačka', 9, 10, 2);

INSERT INTO [Bioskop].[dbo].[Sale]]([Naziv], [BrojRedova], [BrojSedista], [BioskopID])
VALUES ('Bambus', 7, 8, 2);

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('House Of Gucci', 2021, 'Drama, Krimi, Triler', 'Ridley Scott', 'Lady Gaga, Adam Driver, Jared Leto', '158min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Wonder Woman 1984', 2020, 'Akcija, Fantastika', 'Patty Jenkins', 'Gal Gadot, Chris Pine', '151min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Tenet', 2020, 'Akcija, Fantastika', 'Christopher Nolan', 'Elizabeth Debicki, Robert Pattinson', '150min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('The Old Guard', 2020, 'Akcija, Fantastika', 'Gina Prince-Bythewood', 'Charlize Theron, Harry Melling', '125min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Free Guy', 2021, 'Akcija, Avantura', 'Shawn Levy', 'Ryan Reynolds, Jodie Comer', '115min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Cruella', 2021, 'Komedija, Krimi', 'Craig Gillespie', 'Emma Stone', '134min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Black Widow', 2021, 'Akcija, Avantura', 'Kate Shortland', 'Scarlett Johansson', '133min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('No Time To Die', 2021, 'Akcija, Avantura', 'Cary Fukunaga', 'Daniel Craig, Rami Malek', '163min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Dune', 2021, 'Fantastika, Avantura', 'Denis Villeneuve', 'Zendaya, Rebecca Ferguson, Jason Momoa, Oscar Isaac', '155min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Bad Boys For Life', 2020, 'Akcija', 'Bilall Fallah, Adil El Arbi', 'Will Smith, Vanessa Hudgens', '124min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Soul', 2020, 'Deciji, Komedija', 'Pete Docter, Kemp Powers', 'Jamie Foxx', '100min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('The Suicide Squad', 2021, 'Akcija, Avantura', 'James Gunn', 'Margot Robbie, John Cena', '132min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Space Jam: A New Legacy', 2021, 'Deciji, Komedija', 'Malcolm D. Lee', 'Lebron James', '115min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Mulan', 2020, 'Akcija, Avantura', 'Niki Caro', 'Liu Yifei, Jet Li', '115min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Spider-Man: No Way Home', 2021, 'Akcija, Avantura', 'Jon Watts', 'Tom Holland, Tobey Maguire, Andrew Garfield', '148min');

INSERT INTO [Bioskop].[dbo].[Filmovi]]([Naziv], [Godina], [Zanr], [Reziser], [GlavneUloge], [DuzinaTrajanja])
VALUES ('Wonder Woman 1984', 2020, 'Akcija, Fantastika', 'Patty Jenkins', 'Gal Gadot, Chris Pine', '151min');

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-01-03T12:00:00', 1, 11);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-01-03T16:00:00', 1, 7);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-01-03T16:30:00', 2, 3);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-01-03T21:00:00', 3, 10);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-03-10T12:30:00', 4, 11);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-03-10T17:30:00', 4, 2);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-03-10T18:30:00', 5, 14);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-03-10T22:00:00', 5, 4);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-04-25T13:00:00', 1, 2);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-04-25T13:00:00', 2, 4);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-04-25T17:30:00', 2, 14);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-04-25T20:00:00', 3, 10);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-04-25T17:00:00', 4, 7);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-04-25T18:00:00', 5, 11);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-04-25T21:45:00', 5, 3);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-08-15T12:30:00', 1, 1);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-08-15T12:30:00', 2, 5);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-08-15T17:00:00', 3, 12);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-09-21T13:00:00', 4, 6);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-09-21T14:00:00', 5, 15);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-09-21T17:00:00', 1, 15);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-09-21T19:00:00', 1, 13);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-09-21T21:30:00', 2, 12);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-10-10T12:30:00', 2, 8);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-10-10T15:00:00', 2, 9);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-10-10T17:30:00', 3, 1);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-10-10T18:00:00', 3, 6);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-10-10T19:00:00', 4, 5);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-10-10T13:00:00', 5, 9);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-10-10T16:45:00', 5, 8);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-10-17T13:00:00', 4, 1);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2020-10-28T18:00:00', 4, 10);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-11-01T14:00:00', 5, 12);

INSERT INTO [Bioskop].[dbo].[Projekcije]([Datum], [SalaID], [FilmID])
VALUES ('2021-11-03T17:30:00', 5, 13);