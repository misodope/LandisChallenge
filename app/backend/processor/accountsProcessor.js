const fs = require('fs');
const JSONStream = require('JSONStream');
const db = require('../database');

const FILE_PATH = process.env.JSON_URL || "/Users/misodope/Downloads/Coding_Challenge/accounts.jsonl";

const stream = () => {
  const fileStream = fs.createReadStream(FILE_PATH, { encoding: 'utf-8' });
  const parser = JSONStream.parse();

  return fileStream.pipe(parser);
}

const __calculateStatus = (credit, balance) => {
  if (credit < 500 || balance < 3000) {
    return 'low';
  } else if (credit < 600) {
    if (balance < 3000) return 'low'
    if (balance > 3000 && balance < 5000) return 'low';
    if (balance < 8000) return 'medium';
    if (balance < 10000) return 'high';

    return 'high'
  } else if (credit < 700) {
    if (balance > 3000 && balance < 8000) return 'medium';
    if (balance < 10000) return 'high';

    return 'high'
  } else if (credit < 800) {
    if (balance > 3000) return 'high'
  }
}

const processor = async () => {
  stream().on('data', async (data) => {

    const account = {
      id: data.id,
      balance: data.balance,
      firstName: data.name_first,
      lastName: data.name_last,
      name: data.name_first + ' ' + data.name_last,
      employer: data.employer,
      email: data.email,
      phone: data.phone,
      address: data.address,
      comments: data.comments,
      tags: data.tags,
      createdAt: data.created,
      credit: data.credit,
      picture: data.picture,
      status: __calculateStatus(data.credit, data.balance)
    };

    try {
      const newAccount = await db.Account.create(account);

      if (!newAccount) {
        throw error;
      }
    } catch (error) {
      console.error("Error inserting data", error);
    }
  });
};

module.exports = processor;