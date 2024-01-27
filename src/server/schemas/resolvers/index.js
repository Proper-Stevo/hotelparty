// graphql/resolvers.js
import pool from '../../config/db';

export const resolvers = {
  Query: {
    async getAllItems() {
      const [rows] = await pool.query("SELECT * FROM items");
      return rows;
    },
  },
};
