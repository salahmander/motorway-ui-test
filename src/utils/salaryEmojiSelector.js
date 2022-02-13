export const salaryEmojiSelector = (salaryRange) => {
  switch (true) {
    case salaryRange < 20000:
      return "😭";
    case salaryRange >= 20000 && salaryRange < 40000:
      return "😢";
    case salaryRange >= 40000 && salaryRange < 60000:
      return "😌";
    case salaryRange >= 60000 && salaryRange < 90000:
      return "😏";
    case salaryRange >= 90000 && salaryRange < 120000:
      return "😎";
    case salaryRange >= 120000:
      return "🤑";
    default:
      return "🙂";
  }
};
