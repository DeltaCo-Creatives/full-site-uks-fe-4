export function formatDate(iso, options = { day: "numeric", month: "long", year: "numeric" }) {
  try {
    return new Date(iso).toLocaleDateString("id-ID", options);
  } catch {
    return iso;
  }
}
