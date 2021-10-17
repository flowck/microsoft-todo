import dayjs from "dayjs";

export function format(date: Date | undefined): string {
  return date ? dayjs(date).format("ddd, D MMM") : "";
}
