import { FiPieChart, FiList, FiLock } from "react-icons/fi";
import Container from "../shared/Container";

export default function FeaturesSection() {
  const features = [
    { icon: <FiPieChart />, title: "Smart Reports" },
    { icon: <FiList />, title: "Easy Transactions" },
    { icon: <FiLock />, title: "Secure Data" },
  ];

  return (
    <Container>
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-xl text-center">
            <div className="text-3xl text-green-500 mb-4 mx-auto">
              {f.icon}
            </div>
            <h3 className="font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
    </Container>
  );
}
