export default function StepCard({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
