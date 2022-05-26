const reasonDict = ["sleep", "transit", "other", "total"];

const data =
[
{
  "date": "04_13_22",
  "reason": [
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
  ],
  "students": [
    {
      "uid": "BLgGEAAAAQ==",
      "student": "Amiyr Ahmad",
      "time": "10:18:21.651318",
      "reason": "transit",
    },
    {
      "uid": "BLAGEAAAAQ==",
      "student": "Anara Magavi",
      "time": "09:43:13.017994",
      "reason": "transit",
    },
    {
      "uid": "BC4AEAAAAQ==",
      "student": "Aveen Nagpal",
      "time": "10:14:58.727969",
      "reason": "other"
    },
    {
      "uid": "BO3/DwAAAQ==",
      "student": "Beckett Munson",
      "time": "10:05:06.878382",
      "reason": "other"
    },
    {
      "uid": "BHIGEAAAAQ==",
      "student": "Benjamin Sanchez",
      "time": "09:33:59.039514",
      "reason": "sleep"
    },
    {
      "uid": "BDYAEAAAAQ==",
      "student": "Coffy Lessig",
      "time": "10:16:06.647078",
      "reason": "sleep"
    },
    {
      "uid": "BP3/DwAAAQ==",
      "student": "Cole Krivak",
      "time": "10:06:40.697016",
      "reason": "sleep"
    },
    {
      "uid": "BIIGEAAAAQ==",
      "student": "Evan Johnston",
      "time": "10:18:34.193389",
      "reason": "sleep"
    },
    {
      "uid": "BPX/DwAAAQ==",
      "student": "Finn Mayeux",
      "time": "10:06:55.201303",
      "reason": "sleep"
    },
    {
      "uid": "BJAGEAAAAQ==",
      "student": "Hide",
      "time": "08:36:42.869079",
      "reason": "sleep"
    },
    {
      "uid": "BHoGEAAAAQ==",
      "student": "Hunter Stillwell",
      "time": "14:00:41.970080",
      "reason": "sleep"
    },
    {
      "uid": "BBYBEAAAAQ==",
      "student": "Isa Murray",
      "time": "10:20:07.172435",
      "reason": "sleep"
    },
    {
      "uid": "BFoGEAAAAQ==",
      "student": "Jack Vincent",
      "time": "10:06:45.328243",
      "reason": "sleep"
    },
    {
      "uid": "BAUAEAAAAQ==",
      "student": "Jere Nierenberg",
      "time": "10:07:33.666914",
      "reason": "sleep"
    },
    {
      "uid": "BGIGEAAAAQ==",
      "student": "Kody White",
      "time": "11:44:10.537941",
      "reason": "sleep"
    },
    {
      "uid": "BC4BEAAAAQ==",
      "student": "Kunal Botla",
      "time": "10:08:26.833788",
      "reason": "sleep"
    },
    {
      "uid": "BDYBEAAAAQ==",
      "student": "Lalita Bellach",
      "time": "10:07:58.010278",
      "reason": "sleep"
    },
    {
      "uid": "BCYBEAAAAQ==",
      "student": "Max Berbeco",
      "time": "10:09:26.525978",
      "reason": "sleep"
    },
    {
      "uid": "BB4BEAAAAQ==",
      "student": "Mercy Schmidt",
      "time": "10:18:46.207527",
      "reason": "sleep"
    },
    {
      "uid": "BN3/DwAAAQ==",
      "student": "Nate Besthoff",
      "time": "10:03:22.932800",
      "reason": "sleep"
    },
    {
      "uid": "BEYAEAAAAQ==",
      "student": "Nick Thorn",
      "time": "11:47:52.330223",
      "reason": "sleep"
    },
    {
      "uid": "BA0AEAAAAQ==",
      "student": "Noelle Aminoff",
      "time": "10:10:37.943523",
      "reason": "sleep"
    },
    {
      "uid": "BBQAEAAAAQ==",
      "student": "Sasha Hill",
      "time": "11:43:54.775023",
      "reason": "sleep"
    },
    {
      "uid": "BJgGEAAAAQ==",
      "student": "Schuyler Johnson",
      "time": "10:42:06.311603",
      "reason": "sleep"
    },
    {
      "uid": "BKAGEAAAAQ==",
      "student": "Siena Jekel",
      "time": "09:46:29.132310",
      "reason": "sleep"
    },
    {
      "uid": "BIkGEAAAAQ==",
      "student": "Steven Stants",
      "time": "14:11:29.444661",
      "reason": "sleep"
    },
    {
      "uid": "BOX/DwAAAQ==",
      "student": "Teo Sadoswski",
      "time": "10:18:16.334406",
      "reason": "sleep"
    },
    {
      "uid": "BB4AEAAAAQ==",
      "student": "Trevor McDonald",
      "time": "10:12:24.529404",
      "reason": "sleep"
    },
    {
      "uid": "BKgGEAAAAQ==",
      "student": "William Fosnot",
      "time": "10:42:17.302813",
      "reason": "sleep"
    }
  ]
},
{
  "date": "04_13_22",
  "reason": [
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
  ],
  "students": [
    {
      "uid": "BLgGEAAAAQ==",
      "student": "Amiyr Ahmad",
      "time": "10:18:21.651318",
      "reason": "transit"
    },
    {
      "uid": "BLAGEAAAAQ==",
      "student": "Anara Magavi",
      "time": "09:43:13.017994",
      "reason": "other"
    },
    {
      "uid": "BC4AEAAAAQ==",
      "student": "Aveen Nagpal",
      "time": "10:14:58.727969",
      "reason": "sleep"
    },
    {
      "uid": "BO3/DwAAAQ==",
      "student": "Beckett Munson",
      "time": "10:05:06.878382",
      "reason": "sleep"
    },
    {
      "uid": "BHIGEAAAAQ==",
      "student": "Benjamin Sanchez",
      "time": "09:33:59.039514",
      "reason": "sleep"
    },
    {
      "uid": "BDYAEAAAAQ==",
      "student": "Coffy Lessig",
      "time": "10:16:06.647078",
      "reason": "sleep"
    },
    {
      "uid": "BP3/DwAAAQ==",
      "student": "Cole Krivak",
      "time": "10:06:40.697016",
      "reason": "sleep"
    },
    {
      "uid": "BIIGEAAAAQ==",
      "student": "Evan Johnston",
      "time": "10:18:34.193389",
      "reason": "sleep"
    },
    {
      "uid": "BPX/DwAAAQ==",
      "student": "Finn Mayeux",
      "time": "10:06:55.201303",
      "reason": "sleep"
    },
    {
      "uid": "BJAGEAAAAQ==",
      "student": "Hide",
      "time": "08:36:42.869079",
      "reason": "sleep"
    },
    {
      "uid": "BHoGEAAAAQ==",
      "student": "Hunter Stillwell",
      "time": "14:00:41.970080",
      "reason": "sleep"
    },
    {
      "uid": "BBYBEAAAAQ==",
      "student": "Isa Murray",
      "time": "10:20:07.172435",
      "reason": "sleep"
    },
    {
      "uid": "BFoGEAAAAQ==",
      "student": "Jack Vincent",
      "time": "10:06:45.328243",
      "reason": "sleep"
    },
    {
      "uid": "BAUAEAAAAQ==",
      "student": "Jere Nierenberg",
      "time": "10:07:33.666914",
      "reason": "sleep"
    },
    {
      "uid": "BGIGEAAAAQ==",
      "student": "Kody White",
      "time": "11:44:10.537941",
      "reason": "sleep"
    },
    {
      "uid": "BC4BEAAAAQ==",
      "student": "Kunal Botla",
      "time": "10:08:26.833788",
      "reason": "sleep"
    },
    {
      "uid": "BDYBEAAAAQ==",
      "student": "Lalita Bellach",
      "time": "10:07:58.010278",
      "reason": "sleep"
    },
    {
      "uid": "BCYBEAAAAQ==",
      "student": "Max Berbeco",
      "time": "10:09:26.525978",
      "reason": "sleep"
    },
    {
      "uid": "BB4BEAAAAQ==",
      "student": "Mercy Schmidt",
      "time": "10:18:46.207527",
      "reason": "sleep"
    },
    {
      "uid": "BN3/DwAAAQ==",
      "student": "Nate Besthoff",
      "time": "10:03:22.932800",
      "reason": "sleep"
    },
    {
      "uid": "BEYAEAAAAQ==",
      "student": "Nick Thorn",
      "time": "11:47:52.330223",
      "reason": "sleep"
    },
    {
      "uid": "BA0AEAAAAQ==",
      "student": "Noelle Aminoff",
      "time": "10:10:37.943523",
      "reason": "sleep"
    },
    {
      "uid": "BBQAEAAAAQ==",
      "student": "Sasha Hill",
      "time": "11:43:54.775023",
      "reason": "sleep"
    },
    {
      "uid": "BJgGEAAAAQ==",
      "student": "Schuyler Johnson",
      "time": "10:42:06.311603",
      "reason": "sleep"
    },
    {
      "uid": "BKAGEAAAAQ==",
      "student": "Siena Jekel",
      "time": "09:46:29.132310",
      "reason": "sleep"
    },
    {
      "uid": "BIkGEAAAAQ==",
      "student": "Steven Stants",
      "time": "14:11:29.444661",
      "reason": "sleep"
    },
    {
      "uid": "BOX/DwAAAQ==",
      "student": "Teo Sadoswski",
      "time": "10:18:16.334406",
      "reason": "sleep"
    },
    {
      "uid": "BB4AEAAAAQ==",
      "student": "Trevor McDonald",
      "time": "10:12:24.529404",
      "reason": "sleep"
    },
    {
      "uid": "BKgGEAAAAQ==",
      "student": "William Fosnot",
      "time": "10:42:17.302813",
      "reason": "sleep"
    }
  ]
},
{
  "date": "04_13_22",
  "reason": [
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
  ],
  "students": [
    {
      "uid": "BLgGEAAAAQ==",
      "student": "Amiyr Ahmad",
      "time": "10:18:21.651318",
      "reason": "transit"
    },
    {
      "uid": "BLAGEAAAAQ==",
      "student": "Anara Magavi",
      "time": "09:43:13.017994",
      "reason": "other"
    },
    {
      "uid": "BC4AEAAAAQ==",
      "student": "Aveen Nagpal",
      "time": "10:14:58.727969",
      "reason": "sleep"
    },
    {
      "uid": "BO3/DwAAAQ==",
      "student": "Beckett Munson",
      "time": "10:05:06.878382",
      "reason": "sleep"
    },
    {
      "uid": "BHIGEAAAAQ==",
      "student": "Benjamin Sanchez",
      "time": "09:33:59.039514",
      "reason": "sleep"
    },
    {
      "uid": "BDYAEAAAAQ==",
      "student": "Coffy Lessig",
      "time": "10:16:06.647078",
      "reason": "sleep"
    },
    {
      "uid": "BP3/DwAAAQ==",
      "student": "Cole Krivak",
      "time": "10:06:40.697016",
      "reason": "sleep"
    },
    {
      "uid": "BIIGEAAAAQ==",
      "student": "Evan Johnston",
      "time": "10:18:34.193389",
      "reason": "sleep"
    },
    {
      "uid": "BPX/DwAAAQ==",
      "student": "Finn Mayeux",
      "time": "10:06:55.201303",
      "reason": "sleep"
    },
    {
      "uid": "BJAGEAAAAQ==",
      "student": "Hide",
      "time": "08:36:42.869079",
      "reason": "sleep"
    },
    {
      "uid": "BHoGEAAAAQ==",
      "student": "Hunter Stillwell",
      "time": "14:00:41.970080",
      "reason": "sleep"
    },
    {
      "uid": "BBYBEAAAAQ==",
      "student": "Isa Murray",
      "time": "10:20:07.172435",
      "reason": "sleep"
    },
    {
      "uid": "BFoGEAAAAQ==",
      "student": "Jack Vincent",
      "time": "10:06:45.328243",
      "reason": "sleep"
    },
    {
      "uid": "BAUAEAAAAQ==",
      "student": "Jere Nierenberg",
      "time": "10:07:33.666914",
      "reason": "sleep"
    },
    {
      "uid": "BGIGEAAAAQ==",
      "student": "Kody White",
      "time": "11:44:10.537941",
      "reason": "sleep"
    },
    {
      "uid": "BC4BEAAAAQ==",
      "student": "Kunal Botla",
      "time": "10:08:26.833788",
      "reason": "sleep"
    },
    {
      "uid": "BDYBEAAAAQ==",
      "student": "Lalita Bellach",
      "time": "10:07:58.010278",
      "reason": "sleep"
    },
    {
      "uid": "BCYBEAAAAQ==",
      "student": "Max Berbeco",
      "time": "10:09:26.525978",
      "reason": "sleep"
    },
    {
      "uid": "BB4BEAAAAQ==",
      "student": "Mercy Schmidt",
      "time": "10:18:46.207527",
      "reason": "sleep"
    },
    {
      "uid": "BN3/DwAAAQ==",
      "student": "Nate Besthoff",
      "time": "10:03:22.932800",
      "reason": "sleep"
    },
    {
      "uid": "BEYAEAAAAQ==",
      "student": "Nick Thorn",
      "time": "11:47:52.330223",
      "reason": "sleep"
    },
    {
      "uid": "BA0AEAAAAQ==",
      "student": "Noelle Aminoff",
      "time": "10:10:37.943523",
      "reason": "sleep"
    },
    {
      "uid": "BBQAEAAAAQ==",
      "student": "Sasha Hill",
      "time": "11:43:54.775023",
      "reason": "sleep"
    },
    {
      "uid": "BJgGEAAAAQ==",
      "student": "Schuyler Johnson",
      "time": "10:42:06.311603",
      "reason": "sleep"
    },
    {
      "uid": "BKAGEAAAAQ==",
      "student": "Siena Jekel",
      "time": "09:46:29.132310",
      "reason": "sleep"
    },
    {
      "uid": "BIkGEAAAAQ==",
      "student": "Steven Stants",
      "time": "14:11:29.444661",
      "reason": "sleep"
    },
    {
      "uid": "BOX/DwAAAQ==",
      "student": "Teo Sadoswski",
      "time": "10:18:16.334406",
      "reason": "sleep"
    },
    {
      "uid": "BB4AEAAAAQ==",
      "student": "Trevor McDonald",
      "time": "10:12:24.529404",
      "reason": "sleep"
    },
    {
      "uid": "BKgGEAAAAQ==",
      "student": "William Fosnot",
      "time": "10:42:17.302813",
      "reason": "sleep"
    }
  ]
},
{
  "date": "04_13_22",
  "reason": [
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
  ],
  "students": [
    {
      "uid": "BLgGEAAAAQ==",
      "student": "Amiyr Ahmad",
      "time": "10:18:21.651318",
      "reason": "transit"
    },
    {
      "uid": "BLAGEAAAAQ==",
      "student": "Anara Magavi",
      "time": "09:43:13.017994",
      "reason": "other"
    },
    {
      "uid": "BC4AEAAAAQ==",
      "student": "Aveen Nagpal",
      "time": "10:14:58.727969",
      "reason": "sleep"
    },
    {
      "uid": "BO3/DwAAAQ==",
      "student": "Beckett Munson",
      "time": "10:05:06.878382",
      "reason": "sleep"
    },
    {
      "uid": "BHIGEAAAAQ==",
      "student": "Benjamin Sanchez",
      "time": "09:33:59.039514",
      "reason": "sleep"
    },
    {
      "uid": "BDYAEAAAAQ==",
      "student": "Coffy Lessig",
      "time": "10:16:06.647078",
      "reason": "sleep"
    },
    {
      "uid": "BP3/DwAAAQ==",
      "student": "Cole Krivak",
      "time": "10:06:40.697016",
      "reason": "sleep"
    },
    {
      "uid": "BIIGEAAAAQ==",
      "student": "Evan Johnston",
      "time": "10:18:34.193389",
      "reason": "sleep"
    },
    {
      "uid": "BPX/DwAAAQ==",
      "student": "Finn Mayeux",
      "time": "10:06:55.201303",
      "reason": "sleep"
    },
    {
      "uid": "BJAGEAAAAQ==",
      "student": "Hide",
      "time": "08:36:42.869079",
      "reason": "sleep"
    },
    {
      "uid": "BHoGEAAAAQ==",
      "student": "Hunter Stillwell",
      "time": "14:00:41.970080",
      "reason": "sleep"
    },
    {
      "uid": "BBYBEAAAAQ==",
      "student": "Isa Murray",
      "time": "10:20:07.172435",
      "reason": "sleep"
    },
    {
      "uid": "BFoGEAAAAQ==",
      "student": "Jack Vincent",
      "time": "10:06:45.328243",
      "reason": "sleep"
    },
    {
      "uid": "BAUAEAAAAQ==",
      "student": "Jere Nierenberg",
      "time": "10:07:33.666914",
      "reason": "sleep"
    },
    {
      "uid": "BGIGEAAAAQ==",
      "student": "Kody White",
      "time": "11:44:10.537941",
      "reason": "sleep"
    },
    {
      "uid": "BC4BEAAAAQ==",
      "student": "Kunal Botla",
      "time": "10:08:26.833788",
      "reason": "sleep"
    },
    {
      "uid": "BDYBEAAAAQ==",
      "student": "Lalita Bellach",
      "time": "10:07:58.010278",
      "reason": "sleep"
    },
    {
      "uid": "BCYBEAAAAQ==",
      "student": "Max Berbeco",
      "time": "10:09:26.525978",
      "reason": "sleep"
    },
    {
      "uid": "BB4BEAAAAQ==",
      "student": "Mercy Schmidt",
      "time": "10:18:46.207527",
      "reason": "sleep"
    },
    {
      "uid": "BN3/DwAAAQ==",
      "student": "Nate Besthoff",
      "time": "10:03:22.932800",
      "reason": "sleep"
    },
    {
      "uid": "BEYAEAAAAQ==",
      "student": "Nick Thorn",
      "time": "11:47:52.330223",
      "reason": "sleep"
    },
    {
      "uid": "BA0AEAAAAQ==",
      "student": "Noelle Aminoff",
      "time": "10:10:37.943523",
      "reason": "sleep"
    },
    {
      "uid": "BBQAEAAAAQ==",
      "student": "Sasha Hill",
      "time": "11:43:54.775023",
      "reason": "sleep"
    },
    {
      "uid": "BJgGEAAAAQ==",
      "student": "Schuyler Johnson",
      "time": "10:42:06.311603",
      "reason": "sleep"
    },
    {
      "uid": "BKAGEAAAAQ==",
      "student": "Siena Jekel",
      "time": "09:46:29.132310",
      "reason": "sleep"
    },
    {
      "uid": "BIkGEAAAAQ==",
      "student": "Steven Stants",
      "time": "14:11:29.444661",
      "reason": "sleep"
    },
    {
      "uid": "BOX/DwAAAQ==",
      "student": "Teo Sadoswski",
      "time": "10:18:16.334406",
      "reason": "sleep"
    },
    {
      "uid": "BB4AEAAAAQ==",
      "student": "Trevor McDonald",
      "time": "10:12:24.529404",
      "reason": "sleep"
    },
    {
      "uid": "BKgGEAAAAQ==",
      "student": "William Fosnot",
      "time": "10:42:17.302813",
      "reason": "sleep"
    }
  ]
},
{
  "date": "04_13_22",
  "reason": [
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
    {"count": 0, "percent": 0},
  ],
  "students": [
    {
      "uid": "BLgGEAAAAQ==",
      "student": "Amiyr Ahmad",
      "time": "10:18:21.651318",
      "reason": "transit"
    },
    {
      "uid": "BLAGEAAAAQ==",
      "student": "Anara Magavi",
      "time": "09:43:13.017994",
      "reason": "other"
    },
    {
      "uid": "BC4AEAAAAQ==",
      "student": "Aveen Nagpal",
      "time": "10:14:58.727969",
      "reason": "sleep"
    },
    {
      "uid": "BO3/DwAAAQ==",
      "student": "Beckett Munson",
      "time": "10:05:06.878382",
      "reason": "sleep"
    },
    {
      "uid": "BHIGEAAAAQ==",
      "student": "Benjamin Sanchez",
      "time": "09:33:59.039514",
      "reason": "sleep"
    },
    {
      "uid": "BDYAEAAAAQ==",
      "student": "Coffy Lessig",
      "time": "10:16:06.647078",
      "reason": "sleep"
    },
    {
      "uid": "BP3/DwAAAQ==",
      "student": "Cole Krivak",
      "time": "10:06:40.697016",
      "reason": "sleep"
    },
    {
      "uid": "BIIGEAAAAQ==",
      "student": "Evan Johnston",
      "time": "10:18:34.193389",
      "reason": "sleep"
    },
    {
      "uid": "BPX/DwAAAQ==",
      "student": "Finn Mayeux",
      "time": "10:06:55.201303",
      "reason": "sleep"
    },
    {
      "uid": "BJAGEAAAAQ==",
      "student": "Hide",
      "time": "08:36:42.869079",
      "reason": "sleep"
    },
    {
      "uid": "BHoGEAAAAQ==",
      "student": "Hunter Stillwell",
      "time": "14:00:41.970080",
      "reason": "sleep"
    },
    {
      "uid": "BBYBEAAAAQ==",
      "student": "Isa Murray",
      "time": "10:20:07.172435",
      "reason": "sleep"
    },
    {
      "uid": "BFoGEAAAAQ==",
      "student": "Jack Vincent",
      "time": "10:06:45.328243",
      "reason": "sleep"
    },
    {
      "uid": "BAUAEAAAAQ==",
      "student": "Jere Nierenberg",
      "time": "10:07:33.666914",
      "reason": "sleep"
    },
    {
      "uid": "BGIGEAAAAQ==",
      "student": "Kody White",
      "time": "11:44:10.537941",
      "reason": "sleep"
    },
    {
      "uid": "BC4BEAAAAQ==",
      "student": "Kunal Botla",
      "time": "10:08:26.833788",
      "reason": "sleep"
    },
    {
      "uid": "BDYBEAAAAQ==",
      "student": "Lalita Bellach",
      "time": "10:07:58.010278",
      "reason": "sleep"
    },
    {
      "uid": "BCYBEAAAAQ==",
      "student": "Max Berbeco",
      "time": "10:09:26.525978",
      "reason": "sleep"
    },
    {
      "uid": "BB4BEAAAAQ==",
      "student": "Mercy Schmidt",
      "time": "10:18:46.207527",
      "reason": "sleep"
    },
    {
      "uid": "BN3/DwAAAQ==",
      "student": "Nate Besthoff",
      "time": "10:03:22.932800",
      "reason": "sleep"
    },
    {
      "uid": "BEYAEAAAAQ==",
      "student": "Nick Thorn",
      "time": "11:47:52.330223",
      "reason": "sleep"
    },
    {
      "uid": "BA0AEAAAAQ==",
      "student": "Noelle Aminoff",
      "time": "10:10:37.943523",
      "reason": "sleep"
    },
    {
      "uid": "BBQAEAAAAQ==",
      "student": "Sasha Hill",
      "time": "11:43:54.775023",
      "reason": "sleep"
    },
    {
      "uid": "BJgGEAAAAQ==",
      "student": "Schuyler Johnson",
      "time": "10:42:06.311603",
      "reason": "sleep"
    },
    {
      "uid": "BKAGEAAAAQ==",
      "student": "Siena Jekel",
      "time": "09:46:29.132310",
      "reason": "sleep"
    },
    {
      "uid": "BIkGEAAAAQ==",
      "student": "Steven Stants",
      "time": "14:11:29.444661",
      "reason": "sleep"
    },
    {
      "uid": "BOX/DwAAAQ==",
      "student": "Teo Sadoswski",
      "time": "10:18:16.334406",
      "reason": "sleep"
    },
    {
      "uid": "BB4AEAAAAQ==",
      "student": "Trevor McDonald",
      "time": "10:12:24.529404",
      "reason": "sleep"
    },
    {
      "uid": "BKgGEAAAAQ==",
      "student": "William Fosnot",
      "time": "10:42:17.302813",
      "reason": "sleep"
    }
  ]
}
]