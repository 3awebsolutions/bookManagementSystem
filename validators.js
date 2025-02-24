db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "name",
        "email",
        "age",
        "password",
        "membershipType",
        "isActive",
        "createdAt",
      ],
      properties: {
        name: {
          bsonType: "string",
        },
        email: {
          bsonType: "string",
        },
        age: {
          bsonType: "int",
          minimum: 18,
          maximum: 50,
        },
        password: {
          bsonType: "string",
          minLength: 8,
        },
        membershipType: {
          bsonType: "string",
          enum: ["Regular", "Standard", "Premium"],
        },
        isActive: {
          bsonType: "bool",
        },
        createdAt: {
          bsonType: "date",
        },
      },
    },
  },
});

var user1 = db.users.findOne({ name: "Alice Smith" })._id;
var user2 = db.users.findOne({ name: "Bob Johnson" })._id;
var user3 = db.users.findOne({ name: "Charlie Brown" })._id;
var user4 = db.users.findOne({ name: "David Lee" })._id;
var user5 = db.users.findOne({ name: "Eve Williams" })._id;
var user6 = db.users.findOne({ name: "Frank Miller" })._id;
var user7 = db.users.findOne({ name: "Grace Davis" })._id;
var user8 = db.users.findOne({ name: "Henry Wilson" })._id;
var user9 = db.users.findOne({ name: "Ivy Moore" })._id;
var user10 = db.users.findOne({ name: "Jack Taylor" })._id;
var user11 = db.users.findOne({ name: "Kelly Anderson" })._id;
var user12 = db.users.findOne({ name: "Liam Thomas" })._id;
var user13 = db.users.findOne({ name: "Mia Jackson" })._id;
var user14 = db.users.findOne({ name: "Noah White" })._id;
var user15 = db.users.findOne({ name: "Olivia Harris" })._id;
var user16 = db.users.findOne({ name: "Peter Martin" })._id;
var user17 = db.users.findOne({ name: "Quinn Thompson" })._id;
var user18 = db.users.findOne({ name: "Ryan Garcia" })._id;
var user19 = db.users.findOne({ name: "Sophia Rodriguez" })._id;
var user20 = db.users.findOne({ name: "Thomas Martinez" })._id;
var user21 = db.users.findOne({ name: "Ursula Lopez" })._id;
var user22 = db.users.findOne({ name: "Victor Young" })._id;
var user23 = db.users.findOne({ name: "Wendy Hernandez" })._id;
var user24 = db.users.findOne({ name: "Xavier King" })._id;
var user25 = db.users.findOne({ name: "Yvonne Wright" })._id;
var user26 = db.users.findOne({ name: "Zachary Green" })._id;
var user27 = db.users.findOne({ name: "Ava Scott" })._id;
var user28 = db.users.findOne({ name: "Benjamin Adams" })._id;
var user29 = db.users.findOne({ name: "Charlotte Baker" })._id;
var user30 = db.users.findOne({ name: "Daniel Hill" })._id;

db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId", "title", "description", "status", "createdAt"],
      properties: {
        userId: {
          bsonType: "objectId",
        },
        title: { bsonType: "string" },
        description: { bsonType: "string" },
        status: {
          bsonType: "string",
          enum: ["Draft", "Published"],
        },
        createdAt: {
          bsonType: "date",
        },
      },
    },
  },
});

db.posts.insertMany([
  {
    userId: user1,
    title: "My First Post",
    description: "This is my first post.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user2,
    title: "MongoDB Tips",
    description: "Some useful MongoDB tips.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user3,
    title: "A Day in the Life",
    description: "A typical day for me.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user4,
    title: "Tech Trends",
    description: "Latest technology trends.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user5,
    title: "Cooking Recipes",
    description: "Delicious cooking recipes.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user6,
    title: "Travel Blog",
    description: "My travel experiences.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user7,
    title: "Fitness Journey",
    description: "My fitness journey.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user8,
    title: "Book Reviews",
    description: "Reviews of books I've read.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user9,
    title: "Coding Challenges",
    description: "Coding challenges and solutions.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user10,
    title: "Photography Tips",
    description: "Tips for better photography.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user11,
    title: "Gardening Guide",
    description: "A guide to gardening.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user12,
    title: "Data Science Basics",
    description: "Introduction to data science.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user13,
    title: "Web Development",
    description: "Web development tutorials.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user14,
    title: "Mobile Apps",
    description: "Mobile app development.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user15,
    title: "AI and Machine Learning",
    description: "Basics of AI and machine learning.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user16,
    title: "Cloud Computing",
    description: "Introduction to cloud computing.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user17,
    title: "Cybersecurity",
    description: "Cybersecurity best practices.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user18,
    title: "Game Development",
    description: "Game development tutorials.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user19,
    title: "Digital Marketing",
    description: "Digital marketing strategies.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user20,
    title: "Financial Planning",
    description: "Tips for financial planning.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user21,
    title: "Home Improvement",
    description: "Home improvement projects.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user22,
    title: "DIY Crafts",
    description: "DIY craft ideas.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user23,
    title: "Music Reviews",
    description: "Reviews of new music.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user24,
    title: "Movie Reviews",
    description: "Reviews of latest movies.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user25,
    title: "Podcast Recommendations",
    description: "Podcast recommendations.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user26,
    title: "Language Learning",
    description: "Tips for learning a new language.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user27,
    title: "Mental Health",
    description: "Tips for mental well-being.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user28,
    title: "Environmental Awareness",
    description: "Environmental awareness tips.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user29,
    title: "Personal Development",
    description: "Personal development strategies.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user30,
    title: "Startup Tips",
    description: "Tips for starting a startup.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user1,
    title: "Second Post",
    description: "Another post from Alice.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user2,
    title: "Advanced MongoDB",
    description: "Advanced MongoDB features.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user3,
    title: "Weekend Plans",
    description: "My weekend plans.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user4,
    title: "Future Tech",
    description: "Future technology predictions.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user5,
    title: "Quick Recipes",
    description: "Quick and easy recipes.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user6,
    title: "Travel Itinerary",
    description: "My travel itinerary.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user7,
    title: "Workout Routine",
    description: "My daily workout routine.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user8,
    title: "Classic Novels",
    description: "Reviews of classic novels.",
    status: "Published",
    createdAt: new Date(),
  },
  {
    userId: user9,
    title: "Algorithm Practice",
    description: "Algorithm practice problems.",
    status: "Draft",
    createdAt: new Date(),
  },
  {
    userId: user10,
    title: "Editing Photos",
    description: "Tips for editing photos.",
    status: "Published",
    createdAt: new Date(),
  },
]);
