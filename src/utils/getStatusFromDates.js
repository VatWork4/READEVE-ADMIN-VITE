import dayjs from "dayjs";

export const getStatusFromDates = (record) => {
  const now = dayjs();

  const [subStart, subEnd] = record.submission_period.map((d) =>
    dayjs(d, "DD/MM/YYYY")
  );
  const [judgeStart, judgeEnd] = record.judging_period.map((d) =>
    dayjs(d, "DD/MM/YYYY")
  );
  const [annStart, annEnd] = record.announcement.map((d) =>
    dayjs(d, "DD/MM/YYYY")
  );

  if (now.isBetween(subStart, subEnd, "day", "[]")) return "submission";
  if (now.isBetween(judgeStart, judgeEnd, "day", "[]")) return "judging";
  if (now.isBetween(annStart, annEnd, "day", "[]")) return "announcement";

  if (now.isAfter(annEnd)) return "closed";

  return "upcoming"; // ก่อนเริ่มทั้งหมด
};
