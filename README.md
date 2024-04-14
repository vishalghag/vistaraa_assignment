# My Opinon

0:Please check Common Folder

1:Great project to learn with, and I have given my best.

2: I used localStorage, toast, and also implemented basic authentication. Additionally, I demonstrated my knowledge of user context

3:Here's a MongoDB query to list account IDs with transactions below 5000:

```javascript
db.transactions.aggregate([
  {
    $match: {
      amount: { $lt: 5000 },
    },
  },
  {
    $group: {
      _id: "$accountId",
    },
  },
]);
```

4:And here's a query to list distinct products available in the system:

```javascript
db.transactions.distinct("product");
```

5: I have solved up to my current capability, but with some guidance, I can also perform the MongoDB part.

6: Just eager to learn. If possible, could you give me guidance on how to use dump data properly? Please check for grammar and spelling errors.

7: solved that question you asked in interview regarding json:

```javascript
const datas = {
  data: [
    {
      one: [{ price: 30 }, { price: 40 }, { price: 10 }],
      two: [{ price: 60 }, { price: 40 }, { price: 10 }],
      three: [{ price: 90 }, { price: 40 }, { price: 10 }],
    },
  ],
};

const result = {};
let sum = 0;

datas.data.forEach((group) => {
  Object.keys(group).map((key) => {
    const prices = group[key].map((item) => item.price);

    const sum = prices.reduce((total, price) => total + price, 0);

    result[key] = sum;
  });
});

console.log(result);
```

# Test

1. Create a login page from any third party (0auth, Firebase)

After login 👇

2.  List active Customer details in a table using REACT or Angular, with the following columns (Name, Address, Accounts)

3.  Accounts to be clickable and on click of an account list down the transactions linked to it

4.  Create a Mongo query to list down account IDs which has made at least one transaction below the amount of 5000

5.  Create a Mongo query to list down a distinct list of products available in the system
