import { FiAlertTriangle } from "react-icons/fi";
import Container from "../shared/Container";

export default function ProblemSection() {
  const problems = [
    "No idea where money goes",
    "Manual expense tracking is painful",
    "No clear monthly insights",
  ];

  return (
    <Container className={'md:my-20'}>
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">
          Managing money shouldn’t be hard
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="p-6 border rounded-xl text-center">
              <FiAlertTriangle className="mx-auto text-3xl text-red-400 mb-4" />
              <p className="text-gray-600">{p}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
