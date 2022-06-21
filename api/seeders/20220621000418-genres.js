module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'genres',
      [
        {
          genre: 'Rock',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Jazz',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Metal',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Alternative & Punk',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Rock And Roll',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Blues',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Latin',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Reggae',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Pop',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Soundtrack',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Bossa Nova',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Easy Listening',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Heavy Metal',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'R&B/Soul',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Electronica/Dance',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'World',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Hip Hop/Rap',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Science Fiction',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'TV Shows',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Sci Fi & Fantasy',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Drama',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Comedy',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Alternative',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Classical',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          genre: 'Opera',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
