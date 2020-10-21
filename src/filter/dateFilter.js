export default function(dateStr) {
  if (typeof dateStr != 'string') return ''
  return dateStr.substr(0, 10) + ' ' + dateStr.substr(11, 8)
}
