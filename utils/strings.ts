export const PHONE_REGEX = /^\(?(\d{3})\)?[\s.-]?(\d{3})[\s.-]?(\d{4})$/;

export const formatPhone = (phone: string | undefined) => {
  if (!phone || !PHONE_REGEX.test(phone)) return;
  const [, area, prefix, number] = phone.match(PHONE_REGEX) as string[];
  return `(${area}) ${prefix}-${number}`;
};
