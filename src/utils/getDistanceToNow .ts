import { formatDistanceToNow } from "date-fns";

export function getDistanceToNow(date: Date) {
  const result = formatDistanceToNow(date, {
    addSuffix: true,
  });

  return result;
}
