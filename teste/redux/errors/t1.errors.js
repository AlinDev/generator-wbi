

export const manageT1Errors = (error) => {
  const errorString = JSON.stringify(error);
  let messageID;
  let pageId = " ";//fill it in
  let fieldId = " ";//fill it in
  switch (true) {
    case errorString.includes("invalid_grant"):
      messageID = l.invalid_user.id;
      break;
    default:
      messageID = l.NEW_ERROR.id;
      break;
  }
  return errorMessage(I18n.t(messageID), pageId, fieldId);
};
