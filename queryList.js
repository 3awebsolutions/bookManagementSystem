/* Books Query */
// 1️. Find a book by title
db.Books.findOne({ title: "1984" });

// 2️. Find all books in a specific genre
db.Books.find({ genre: "Dystopian" });

// 3️. Find books published after the year 1950
db.Books.find({ publishedYear: { $gt: 1950 } });

// 4️. Find books with available copies greater than 5
db.Books.find({ availableCopies: { $gt: 5 } });

// 5️. Find books in multiple genres (Fantasy or Horror)
db.Books.find({ genre: { $in: ["Fantasy", "Horror"] } });

// 6️. Find books sorted by published year (oldest to newest)
db.Books.find().sort({ publishedYear: 1 });

/* Members Query */
// 7️. Find a member by name
db.Members.findOne({ name: "Amit Sharma" });

// 8️. Find all Premium members
db.Members.find({ membershipType: "Premium" });

// 9️. Find members who joined after 2022
db.Members.find({ joinDate: { $gt: new Date("2022-01-01") } });

// 10. Find Regular members who joined before 2023
db.Members.find({
  membershipType: "Regular",
  joinDate: { $lt: new Date("2023-01-01") },
});

db.Members.find({
  $or: [
    { membershipType: "Premium" },
    { joinDate: { $lt: new Date("2022-01-01") } },
  ],
});
db.Books.find({
  $and: [{ genre: "Fiction" }, { availableCopies: { $gt: 5 } }],
});
db.Books.find({
  availableCopies: { $exists: false },
});
db.BorrowRecords.find({
  returnDate: { $exists: true, $eq: null },
});
db.Books.find({
  publishedYear: { $type: "int" },
});

/* Borrow Records Query */
// 1️1. Find all books borrowed by a specific member
db.BorrowRecords.find({ memberId: member3 });

// 1️2. Find all books that are not yet returned
db.BorrowRecords.find({ returnDate: null });

/* Aggregation */
db.Books.aggregate([{ $group: { _id: "$genre", count: { $sum: 1 } } }]);

db.BorrowRecords.aggregate([
  { $group: { _id: "$bookId", borrowCount: { $sum: 1 } } },
  { $sort: { borrowCount: -1 } },
  { $limit: 5 },
]);

db.Members.aggregate([
  { $group: { _id: "$membershipType", totalMembers: { $sum: 1 } } },
]);

db.BorrowRecords.aggregate([
  { $group: { _id: "$memberId", totalBooksBorrowed: { $sum: 1 } } },
  { $sort: { totalBooksBorrowed: -1 } },
  { $limit: 5 },
]);

db.BorrowRecords.aggregate([
  { $match: { returnDate: null } },
  {
    $lookup: {
      from: "Books",
      localField: "bookId",
      foreignField: "_id",
      as: "bookDetails",
    },
  },
  { $unwind: "$bookDetails" },
]);
