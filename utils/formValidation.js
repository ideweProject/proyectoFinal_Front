export default async (formData) => {
  let validDate = { msg: "" };
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = date.getMonth();

  if (year == formData.expireYY) {
    if (month >= formData.expireMM) validDate.msg = "Fecha incorrecta";
  }
  return validDate;
};
