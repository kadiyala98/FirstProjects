const db = require('./db'); // Import your database connection pool

// Register a new user with additional details
async function registerUser(first_Name, last_Name, email, password) {
  try {
    const [results] = await db.execute(
      'INSERT INTO users (first_name, last_name, email, phone_number, referral, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [first_Name, last_Name, email, phoneNumber, referral, username, password]
    );
    return results.insertId; // Return the ID of the newly registered user
  } catch (error) {
    throw error;
  }
}

// Authenticate a user
async function authenticateUser(username, password) {
  try {
    const [results] = await db.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    return results.length > 0 ? results[0] : null; // Return the user if found, otherwise null
  } catch (error) {
    throw error;
  }
}

module.exports = {
  registerUser,
  authenticateUser
};
