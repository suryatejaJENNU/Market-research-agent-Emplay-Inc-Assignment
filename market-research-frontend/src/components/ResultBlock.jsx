export default function ResultBlock({ label, value }) {
  return (
    <div className="border p-4 bg-gray-50 rounded-lg mb-2">
      <h3 className="font-bold text-gray-700 mb-1">{label}</h3>
      <pre className="whitespace-pre-wrap text-sm text-gray-800">
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  );
}
