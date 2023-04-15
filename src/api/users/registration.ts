import ApiClient from '@api';
import env from '@env';
import {
  RegistrationRequestPayload,
} from './types';



// I finish creating this request here, because I get error 405 Method GET Not Allowed.
// I add screenshots of the error and the request in the mail or README.
// Error is probably because django conifugration send for this GET. In screen can you check how this work on swagger - on swagger we also get error.


// Also we have diffrence between design and API. I mean in deisgn we have 1 input for first and last name and we have username. 
// If I will meet this in real project I will ask for clarification deisgner or PM or backend developer.
// We need to know what we need to send to backend and what exactly inputs we need on frontend.
// I will add this to README.

export async function postRegistration({ name, phone, email, password }: RegistrationRequestPayload) {
  try {
    const response = await ApiClient.post(`${env.API_URL}/auth/registration/`, {
      email: email,
      first_name: name,
      last_name: name,
      phone: phone,
      password1: password,
      password2: password,

    });
    console.log('postRegistration - Response: ', response.data);

    return response.data;

  } catch(error) {
    console.error('postRegistration - Error: ', error);
    throw error;
  }
}
