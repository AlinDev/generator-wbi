export const manage<%= Name %>Errors = (error) => {
  const errorString = JSON.stringify(error);
  let messageID;
  let pageId = " ";//fill it in
  let fieldId = " ";//fill it in
  switch (true) {
    case errorString.includes("invalid_grant"):
      messageID = languages.invalid_user.id;
      break;
    default:
      messageID = languages.NEW_ERROR.id;
      break;
  }
  return errorMessage(interpreter.t(messageID), pageId, fieldId);
};
