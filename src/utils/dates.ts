import dayjs from "dayjs";
import ca from "dayjs/locale/ca";

dayjs.locale(ca);

export const formatDate = (date: string) => {
  return dayjs(date).locale("ca").format("DD [de] MMM [de] YYYY");
};

export const formatSecondsToMinutes = (seconds: number) => {
  let min = Math.floor(Math.round(seconds) / 60).toString();
  let sec = (Math.round(seconds) % 60).toString();

  if (sec.length == 1) sec = `0${sec}`;
  if (min.length == 1) min = `0${min}`;

  return `${min}:${sec}`;
};
