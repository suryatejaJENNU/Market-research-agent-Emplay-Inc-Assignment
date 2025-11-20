import { useState } from "react";
import StepCard from "../components/StepCard";
import Loading from "../components/Loading";
import ResultBlock from "../components/ResultBlock";
import { runResearch } from "../api/researchApi";

export default function Home() {
  const [brief, setBrief] = useState("");
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState(null);
  const [finalReport, setFinalReport] = useState("");
  const [finalData, setFinalData] = useState([]);

  const handleSubmit = async () => {
    setLoading(true);
    setSteps(null);

    try {
      const res = await runResearch(brief);

      setSteps(res.steps);
      setFinalReport(res.final_report);
      setFinalData(res.final_data);
    } catch (err) {
      alert("Error fetching research results");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        AI Market Research Agent
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <label className="font-semibold mb-2 block">Enter Research Brief</label>
        <textarea
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          className="w-full p-3 border rounded-md  focus:ring-blue-500"
          rows={4}
          placeholder="Example: Find top AI telecom companies..."
        />

        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
        >
          Run Research
        </button>
      </div>

      {loading && <Loading />}

      {steps && (
        <div className="space-y-6">
          {Object.entries(steps).map(([key, value]) => (
            <StepCard key={key} title={key}>
              <ResultBlock label="" value={value} />
            </StepCard>
          ))}

          <StepCard title="FINAL REPORT">
            <div className="whitespace-pre-wrap">{finalReport}</div>
          </StepCard>

          <StepCard title="FINAL DATA">
            <ResultBlock label="Companies" value={finalData} />
          </StepCard>
        </div>
      )}
    </div>
  );
}
