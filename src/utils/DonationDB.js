var PouchDB = require('pouchdb');

const RemoteDonationDB = new PouchDB('https://api.chikupos.com/ctb-donations', {
  auth: {
    username: 'root',
    password: 'chikupos92!!',
  },
});

// get this mounth starting date and ending date
const getThisMonth = () => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return {firstDay, lastDay};
};
const renge = getThisMonth();

const DonationDB = {
  getDonations: async () => {
    console.log('getDonations');
    try {
      const donations = await RemoteDonationDB.allDocs({
        include_docs: true,
      });
      console.log({donations});
      return donations.rows || [];
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getDonationsOfThisMonth: async () => {
    try {
      const donations = await RemoteDonationDB.query(
        'donationStats/donation-stats',
        {
          reduce: true,
        },
      );
      return donations.rows;
    } catch (error) {
      console.log(error);
    }
  },
  donate: async () => {
    const donation = {
      name: 'mustafa',
      amount: 500,
      createdAt: '18/09/2022',
      city: 'Raipur',
      isAnonymous: false,
    };
    try {
      await RemoteDonationDB.post(donation);
    } catch (error) {
      console.log(error);
    }
  },
};

export default DonationDB;
