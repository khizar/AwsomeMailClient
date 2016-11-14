export const GLOBAL_CLICK_EVENT = 'GLOBAL_CLICK_EVENT';
export const FETCH_EMAILS = 'FETCH_EMAILS';
export const SELECT_EMAIL = 'SELECT_EMAIL';
export const DELETE_EMAIL = 'DELETE_EMAIL';

export function globalClick() {
    return {
        type: GLOBAL_CLICK_EVENT
    };
}

export function fetchEmails(emails) {
    return {
        type: FETCH_EMAILS,
        emails
    }
}
 export function selectEmail(email) {
     return {
         type: SELECT_EMAIL,
         email
     }
 }
export function deleteEmail(emailId) {
    return {
        type: DELETE_EMAIL,
        emailId
    }
}