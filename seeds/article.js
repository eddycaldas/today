exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('article').del()
    .then(function () {
      // Inserts seed entries
      return knex('article').insert([
        {
          title: 'GuestCenter POS Integration FAQs',
          articlenumber: '000001821',
          url: 'https://opentable.my.salesforce.com/articles/en_US/Info/GuestCenter-POS-Integration-FAQs/p'
        }
      ]);
    });
};