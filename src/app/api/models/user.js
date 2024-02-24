const db = require('../../db'); // Import the database connection

const db = require('../../db'); // Import the database connection

class User {
  // Other methods...

  static async findByEmailOrUsername(emailOrUsername) {
    try {
      // Check if a user with the provided email or username exists in the database
      const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1 OR username = $1', [emailOrUsername]);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async comparePassword(password) {
    // Compare the provided password with the hashed password stored in the database
    return password === this.password; // This is a placeholder, you should use bcrypt or a similar library for secure password hashing
  }
}

module.exports = User;
