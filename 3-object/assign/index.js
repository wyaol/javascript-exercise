export default function addSerialNumber(source) {
  return Object.assign(
    source,
    { serialNumber: '12345' },
    { properties: { color: 'green', status: 'processed' } }
  );
}
