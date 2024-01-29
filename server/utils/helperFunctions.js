// this is not actually necessary. It's just practice with encryption. Let's assume that sampleSensitiveInfo is some important info in need of encryption
const crypto = require('node:crypto');

const algorithm = 'aes-256-cbc';
const encryption_key = "byz9VFNtbRQM0yBODcCb1lrUtVVH3D3x"; // Must be 32 characters
const initialization_vector = "X05IGQ5qdBnIqAWD"; // Must be 16 characters

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryption_key), Buffer.from(initialization_vector));
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const decrypt = (text) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc',Buffer.from(encryption_key), Buffer.from(initialization_vector));
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

module.exports = { encrypt, decrypt };