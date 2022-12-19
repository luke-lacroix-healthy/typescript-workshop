import { Message, queueCall, queueEmail, queueMail, sendSms } from '../messages';
import { Contact } from './Contact';
import { Response } from './Response';

export async function sendMessage(contact: Contact, message: Message): Promise<Response> {
  try {
    switch (contact.type) {
      case 'address':
        return { success: true, confirmation: await queueMail(contact, message) };
      case 'email':
        return { success: true, confirmation: await queueEmail(contact, message) };
      case 'landline':
        return { success: true, confirmation: await queueCall(contact, message) };
      case 'mobile':
        return { success: true, confirmation: await sendSms(contact, message) };
      default:
        return { success: false, reason: `unknown contact type` };
    }
  } catch (error) {
    return { success: false, error: error as Error };
  }
}
