const membersData = [
  {
    name: "Amit Sharma",
    membershipType: "Regular",
    joinDate: new Date("2023-01-15"),
  },
  {
    name: "Priya Verma",
    membershipType: "Premium",
    joinDate: new Date("2022-11-20"),
  },
  {
    name: "Rohit Gupta",
    membershipType: "Regular",
    joinDate: new Date("2023-05-10"),
  },
  {
    name: "Sneha Kapoor",
    membershipType: "Premium",
    joinDate: new Date("2021-08-05"),
  },
  {
    name: "Vikas Mehta",
    membershipType: "Regular",
    joinDate: new Date("2022-03-12"),
  },
  {
    name: "Neha Malhotra",
    membershipType: "Premium",
    joinDate: new Date("2022-12-25"),
  },
  {
    name: "Kunal Bansal",
    membershipType: "Regular",
    joinDate: new Date("2023-07-14"),
  },
  {
    name: "Swati Joshi",
    membershipType: "Premium",
    joinDate: new Date("2021-09-30"),
  },
  {
    name: "Arjun Khanna",
    membershipType: "Regular",
    joinDate: new Date("2023-04-18"),
  },
  {
    name: "Meera Das",
    membershipType: "Premium",
    joinDate: new Date("2020-11-01"),
  },
  {
    name: "Manish Tiwari",
    membershipType: "Regular",
    joinDate: new Date("2022-06-17"),
  },
  {
    name: "Kiran Rao",
    membershipType: "Premium",
    joinDate: new Date("2019-12-09"),
  },
  {
    name: "Rahul Nair",
    membershipType: "Regular",
    joinDate: new Date("2023-09-22"),
  },
  {
    name: "Divya Aggarwal",
    membershipType: "Premium",
    joinDate: new Date("2020-07-19"),
  },
  {
    name: "Suresh Yadav",
    membershipType: "Regular",
    joinDate: new Date("2023-02-28"),
  },
  {
    name: "Pooja Sinha",
    membershipType: "Premium",
    joinDate: new Date("2021-04-10"),
  },
  {
    name: "Abhishek Anand",
    membershipType: "Regular",
    joinDate: new Date("2022-10-05"),
  },
  {
    name: "Ritu Raj",
    membershipType: "Premium",
    joinDate: new Date("2020-01-15"),
  },
  {
    name: "Nitin Saxena",
    membershipType: "Regular",
    joinDate: new Date("2023-06-11"),
  },
  {
    name: "Anjali Patil",
    membershipType: "Premium",
    joinDate: new Date("2018-09-25"),
  },
];

// Storing the objectId of each member in variables

member1 = db.Members.findOne({ name: "Amit Sharma" })._id;
member2 = db.Members.findOne({ name: "Priya Verma" })._id;
member3 = db.Members.findOne({ name: "Rohit Gupta" })._id;
member4 = db.Members.findOne({ name: "Sneha Kapoor" })._id;
member5 = db.Members.findOne({ name: "Vikas Mehta" })._id;
member6 = db.Members.findOne({ name: "Neha Malhotra" })._id;
member7 = db.Members.findOne({ name: "Kunal Bansal" })._id;
member8 = db.Members.findOne({ name: "Swati Joshi" })._id;
member9 = db.Members.findOne({ name: "Arjun Khanna" })._id;
member10 = db.Members.findOne({ name: "Meera Das" })._id;
member11 = db.Members.findOne({ name: "Manish Tiwari" })._id;
member12 = db.Members.findOne({ name: "Kiran Rao" })._id;
member13 = db.Members.findOne({ name: "Rahul Nair" })._id;
member14 = db.Members.findOne({ name: "Divya Aggarwal" })._id;
member15 = db.Members.findOne({ name: "Suresh Yadav" })._id;
member16 = db.Members.findOne({ name: "Pooja Sinha" })._id;
member17 = db.Members.findOne({ name: "Abhishek Anand" })._id;
member18 = db.Members.findOne({ name: "Ritu Raj" })._id;
member19 = db.Members.findOne({ name: "Nitin Saxena" })._id;
member20 = db.Members.findOne({ name: "Anjali Patil" })._id;
