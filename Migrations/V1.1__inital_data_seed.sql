INSERT INTO public.EventTypes (name)
VALUES ('Team racing');
INSERT INTO public.EventTypes (name)
VALUES ('Fleet Race');

INSERT INTO public.Clubs (name)
VALUES ('East Down Yacht Club');
INSERT INTO public.Clubs (name)
VALUES  ('Ballyholme YC');
INSERT INTO public.Clubs (name)
VALUES  ('East Antrim Boat Club');
INSERT INTO public.Clubs (name)
VALUES  ('Killyleagh YC');

INSERT INTO public.Members (firstName ,lastName, email, password)
VALUES ('Conor', 'Walters', 'cwalters01@Qub.ac.uk', 'password');
INSERT INTO public.Members (firstName ,lastName, email, password)
VALUES ('Tom', 'Purdon', 'tpurdon21@Qub.ac.uk', 'password');
INSERT INTO public.Members (firstName ,lastName, email, password)
VALUES ('Mark', 'Brown', 'mBrown01@Qub.ac.uk', 'password');
INSERT INTO public.Members (firstName ,lastName, email, password)
VALUES ('Sarah', 'Jennings', 'sjennings789@Qub.ac.uk', 'password');

INSERT INTO public.Club_Member (clubId, memberId)
VALUES (1, 1);
INSERT INTO public.Club_Member (clubId, memberId)
VALUES  (2, 2);
INSERT INTO public.Club_Member (clubId, memberId)
VALUES  (3, 3);
INSERT INTO public.Club_Member (clubId, memberId)
VALUES  (4, 4);

INSERT INTO public.Events (eventTypeId, startTime, endDate, name, clubId , description)
VALUES (1, '2021-11-19 12:00:00', '2021-11-21 19:45:00', 'Wexford Uni team racing event', 1, 'This is a university sailing event');
INSERT INTO public.Events (eventTypeId, startTime, endDate,  name, clubId , description)
VALUES (2, '2021-11-19 18:45:00', '2021-11-19 21:00:00', 'EDYC Wednesday night club racing', 2, 'Normal wednesday night fleet raing for all classes participating');

INSERT INTO public.Teams (name)
VALUES ('QUB');
INSERT INTO public.Teams (name)
VALUES ('TUD');
INSERT INTO public.Teams (name)
VALUES ('NUIG');
INSERT INTO public.Teams (name)
VALUES ('DIT');    

INSERT INTO public.TeamMembers (memberId, teamId)
VALUES (1, 3);
INSERT INTO public.TeamMembers (memberId, teamId)
VALUES (2, 3);
INSERT INTO public.TeamMembers (memberId, teamId)
VALUES (3, 3);
INSERT INTO public.TeamMembers (memberId, teamId)
VALUES (4, 3);
INSERT INTO public.TeamMembers (memberId, teamId)
VALUES (2, 4);

INSERT INTO public.Class (name)
VALUES ('IRC');
INSERT INTO public.Class (name)
VALUES ('NHC1');
INSERT INTO public.Class (name)
VALUES ('NHC2');
INSERT INTO public.Class (name)
VALUES ('Firefly');

INSERT INTO public.Boats ( classId, clubId, teamId, name, sailNo)
VALUES (1 , 2 , 2, 'Lizante', 'GBR 1967');
INSERT INTO public.Boats ( classId, clubId, teamId, name, sailNo)
VALUES (2 , 1 , 2, 'Ker 40', 'GBR 1872');
INSERT INTO public.Boats ( classId, clubId, teamId, name, sailNo)
VALUES (4 , 1 , 1, 'Firefly 1', 'GBR 1292');
INSERT INTO public.Boats ( classId, clubId, teamId, name, sailNo)
VALUES (4 , 2 , 1, 'Firefly 2', 'GBR 2131');
INSERT INTO public.Boats ( classId, clubId, teamId, name, sailNo)
VALUES (4 , 3 , 1, 'Firefly 3', 'GBR 324234');
INSERT INTO public.Boats ( classId, clubId, teamId, name, sailNo)
VALUES (4 , 2 , 1, 'Firefly 4', 'GBR 123123');
INSERT INTO public.Boats ( classId, clubId, teamId, name, sailNo)
VALUES (4 , 4 , 1, 'Firefly 5', 'GBR 1234');
INSERT INTO public.Boats ( classId, clubId, teamId, name, sailNo)
VALUES (4 , 4 , 1, 'Firefly 6', 'GBR 12938');

INSERT INTO public.Races (eventId, startTime, classId)
VALUES (1, '2021-11-19 12:00:00' , 4);
INSERT INTO public.Races (eventId, startTime, classId)
VALUES (1, '2021-11-19 12:15:00' , 4);
INSERT INTO public.Races (eventId, startTime, classId)
VALUES (1, '2021-11-19 12:30:00' , 4);
INSERT INTO public.Races (eventId, startTime, classId)
VALUES (2, '2021-11-19 18:30:00' , 2);

INSERT INTO public.RaceBoats (raceId, boatId,  startTime, finishTime, position)
VALUES (4, 1 , '2021-11-19 18:30:12', '2021-11-19 19:46:17',1); 
INSERT INTO public.RaceBoats (raceId, boatId, startTime, finishTime, position)
VALUES (4, 2 , '2021-11-19 18:30:07', '2021-11-19 19:52:34',2);
INSERT INTO public.RaceBoats (raceId, boatId,startTime, finishTime, position)
VALUES (1, 3, '2021-11-19 12:00:12', '2021-11-19 12:12:32',1);
INSERT INTO public.RaceBoats (raceId, boatId, startTime, finishTime, position)
VALUES (1, 5, '2021-11-19 12:00:05', '2021-11-19 12:12:40',2);
INSERT INTO public.RaceBoats (raceId, boatId, startTime, finishTime, position)
VALUES (1, 4, '2021-11-19 12:00:01', '2021-11-19 12:12:55',3);
INSERT INTO public.RaceBoats (raceId, boatId, startTime, finishTime, position)
VALUES (1, 6, '2021-11-19 12:00:02', '2021-11-19 12:13:20',4);
INSERT INTO public.RaceBoats (raceId, boatId, startTime, finishTime, position)
VALUES (1, 8, '2021-11-19 12:00:04', '2021-11-19 12:13:32',5);
INSERT INTO public.RaceBoats (raceId, boatId, startTime, finishTime, position)
VALUES (1, 7, '2021-11-19 12:00:22', '2021-11-19 12:13:45',6);