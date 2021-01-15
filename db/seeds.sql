INSERT INTO
  peer_2_paws.Animals (
    TypeName,
    OwnerName,
    OwnerEmail,
    AnimalName,
    Age,
    About,
    ImageLink,
    createdAt,
    updatedAt
  )
VALUES
  (
    "Dog",
    "John Smith",
    "jsmith@gmail.com",
    "Rex",
    4,
    "Rex is a pure-bred Great Dane with a calm demeanor.",
    NULL,
    CURDATE(),
    CURDATE()
  ),
  (
    "Cat",
    "Fluffy",
    "Adam Bryant",
    "abryant@yahoo.com",
    3,
    "Fluffy is a Maine Coon that can be aggressive toward strangers",
    NULL,
    CURDATE(),
    CURDATE()
  ),
  (
    "Dog",
    "Max",
    "Carole Carter",
    "carolec@protonmail.com",
    12,
    "Max is a German Shephard with a heart of gold.",
    NULL,
    CURDATE(),
    CURDATE()
  ),
  (
    "Rodent",
    "Squeeler",
    "David Jones",
    "david.jones@corporate.com",
    1,
    "Sqeeler is a gerbil that likes to party all night.",
    NULL,
    CURDATE(),
    CURDATE()
  ),
  (
    "Bird",
    "Polly",
    "Frank Moore",
    "fm5280@gmail.com",
    26,
    "Polly is a dove that makes little sound but is great company.",
    NULL,
    CURDATE(),
    CURDATE()
  ),
  (
    "Reptile",
    "Slimy",
    "April Johnson",
    "apple123@yahoo.com",
    8,
    "Slimy is a ball python that likes being held.",
    NULL,
    CURDATE(),
    CURDATE()
  ),
  (
    "Dog",
    "Charlie",
    "John Wessex",
    "jwessex@p2p.com",
    3,
    "Charlie is a lab mix that loves chasing balls.",
    NULL,
    CURDATE(),
    CURDATE()
  ),
  (
    "Cat",
    "Prince",
    "Adam Smith",
    "asmith@ecomm.edu",
    19,
    "Prince is a senior Hemmingway cat with 8 more lives ahead.",
    NULL,
    CURDATE(),
    CURDATE()
  )
INSERT INTO
  EmailRecepients (RecName, RecEmail, createdAt, updatedAt)
VALUES
  (
    "John Smith",
    "jsmith@email.com",
    CURDATE(),
    CURDATE()
  ),
  (
    "Adam Appleseed",
    "aapple@email.com",
    CURDATE(),
    CURDATE()
  ),
  (
    "Bob Barker",
    "bbarker@email.com",
    CURDATE(),
    CURDATE()
  ),
  (
    "Caroline Carter",
    "ccarter@email.com",
    CURDATE(),
    CURDATE()
  ),
  (
    "Don Davidson",
    "ddavidson@email.com",
    CURDATE(),
    CURDATE()
  ),
  (
    "Eric Frank",
    "efrank@email.com",
    CURDATE(),
    CURDATE()
  )