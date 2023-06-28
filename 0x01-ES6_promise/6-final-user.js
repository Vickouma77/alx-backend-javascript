import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((values) => {
      const results = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          results.push({
            status: value.status,
            value: value.value
          });
        } else {
          results.push({
            status: value.status,
            value: `Error: ${value.reason.message}`
          });
        }
      });
      return results;
    });
}
