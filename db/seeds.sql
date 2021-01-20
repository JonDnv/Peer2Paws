INSERT INTO
  peer_2_paws.Animals (
    ImageLink,
    TypeName,
    OwnerName,
    OwnerEmail,
    AnimalName,
    Age,
    About,
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
    "https://res.cloudinary.com/dnyfzhvqh/image/upload/c_scale,w_300/v1610904726/Peer2Paws/Rex_daoq3k.jpg",
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
    "https://res.cloudinary.com/dnyfzhvqh/image/upload/c_scale,w_300/v1610904726/Peer2Paws/Fluffy_yuooou.jpg",
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
    "https://res.cloudinary.com/dnyfzhvqh/image/upload/c_scale,w_300/v1610904726/Peer2Paws/Max_vk2ck7.jpg",
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
    "https://res.cloudinary.com/dnyfzhvqh/image/upload/c_scale,w_300/v1610904727/Peer2Paws/Squeeler_cpnpgz.jpg",
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
    "https://res.cloudinary.com/dnyfzhvqh/image/upload/c_scale,w_300/v1610904726/Peer2Paws/Polly_tdxz83.jpg",
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
    "https://res.cloudinary.com/dnyfzhvqh/image/upload/c_scale,w_300/v1610904726/Peer2Paws/Slimy_qam1ak.jpg",
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
    "https://res.cloudinary.com/dnyfzhvqh/image/upload/c_scale,w_300/v1611091768/Peer2Paws/IMG_20191211_182411_891_ngwbvs.jpg",
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
    "https://res.cloudinary.com/dnyfzhvqh/image/upload/c_scale,w_300/v1610904726/Peer2Paws/Prince_mqt95i.jpg",
    CURDATE(),
    CURDATE()
  )
INSERT INTO 
  peer_2_paws.EmailRecepients (RecName, RecEmail, createdAt, updatedAt)
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