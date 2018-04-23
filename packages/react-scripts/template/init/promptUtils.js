const prompt = require('prompt');
const chalk = require('chalk');

const firebaseCredentialsSchema = require('./schemas/firebaseCredentialsSchema');
const askNpmTokenSchema = require('./schemas/askNpmTokenSchema');
const askFirebaseNeedeSchema = require('./schemas/askFirebaseNeededSchema');

module.exports = {
  askForToken() {
    prompt.start();

    return new Promise((resolve, reject) => {
      prompt.get(askNpmTokenSchema, function (err, result) {
        if (err) {
          console.log(chalk.red(`Error in: ${err}`));
          reject(err);
        }

        console.log(chalk.cyan(`You said your token is: ${result.token}`));
        resolve(result.token);
      });
    });
  },

  askIfFirebaseNeeded() {
    prompt.start();

    return new Promise((resolve, reject) => {
      prompt.get(askFirebaseNeedeSchema, function (err, result) {
        if (err) {
          console.log(chalk.red(`Error in: ${err}`));
          reject(err);
        }

        if (result.isFirebaseRequired) {
          console.log('You said, that you need firebase in the project!')
        } else {
          console.log('You said, that you don\'t need firebase');
        }

        resolve(result.isFirebaseRequired);
      });
    });
  },

  askFirebaseCredentials(isFirebaseRequired) {
    if (!isFirebaseRequired) return false;

    prompt.start();

    return new Promise((resolve, reject) => {
      prompt.get(firebaseCredentialsSchema, function (err, result) {
        if (err) {
          console.log(chalk.red(`Error in: ${err}`));
          reject(err);
        }

        const firebaseConfig = {
          apiKey,
          authDomain,
          databaseURL,
          projectId,
          storageBucket,
          messagingSenderId
        } = result;

        console.log('Your firebase config will look like this: ');
        console.log(firebaseConfig);

        resolve(firebaseConfig);
      });
    });
  }
};
