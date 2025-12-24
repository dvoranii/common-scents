import * as brevo from "@getbrevo/brevo";

const contactsApi = new brevo.ContactsApi();
contactsApi.setApiKey(
  brevo.ContactsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

const NEWSLETTER_LIST_ID = 3;

export async function addContactToNewsletter(email: string): Promise<void> {
  const createContact = new brevo.CreateContact();
  createContact.email = email;
  createContact.listIds = [NEWSLETTER_LIST_ID];
  createContact.updateEnabled = true;

  await contactsApi.createContact(createContact);
}

export function isDuplicateContactError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as any).response === "object" &&
    (error as any).response?.body?.code === "duplicate_parameter"
  );
}
