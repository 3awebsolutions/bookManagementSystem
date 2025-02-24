// 1. Books Collection Schemas

db.createCollection("Books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "title",
        "author",
        "genre",
        "publishedYear",
        "availableCopies",
      ],
      properties: {
        title: {
          bsonType: "string",
          description: "Title of the book, required and must be a string",
        },
        author: {
          bsonType: "string",
          description: "Author of the book, required and must be a string",
        },
        genre: {
          bsonType: "string",
          description: "Genre of the book, required and must be a string",
        },
        publishedYear: {
          bsonType: "int",
          minimum: 1000,
          maximum: 9999,
          description: "Year of publication, required and must be a valid year",
        },
        availableCopies: {
          bsonType: "int",
          minimum: 0,
          description:
            "Number of copies available, required and must be a non-negative integer",
        },
      },
    },
  },
});

// 2. Members Collection Schemas

db.createCollection("Members", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "membershipType", "joinDate"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name of the member, required and must be a string",
        },
        membershipType: {
          enum: ["Regular", "Premium"],
          description: "Membership type, must be 'Regular' or 'Premium'",
        },
        joinDate: {
          bsonType: "date",
          description: "Date when the member joined, required",
        },
      },
    },
  },
});

// 3. BorrowRecords Collection Schemas

db.createCollection("BorrowRecords", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["memberId", "bookId", "borrowDate"],
      properties: {
        memberId: {
          bsonType: "objectId",
          description: "Reference to the member, required",
        },
        bookId: {
          bsonType: "objectId",
          description: "Reference to the book, required",
        },
        borrowDate: {
          bsonType: "date",
          description: "Date when the book was borrowed, required",
        },
        returnDate: {
          bsonType: ["date", "null"],
          description: "Date when the book was returned, nullable",
        },
      },
    },
  },
});
