import { FiCheckCircle } from "react-icons/fi";
import Container from "../shared/Container";


export default function SolutionSection() {
  return (

    <section className="bg-base-200 my-10">
    <Container className={'py-10'}>
      <h2 className="text-3xl font-bold text-center mb-6">
        CashFlow solves this
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Track income and expenses in one place and get instant clarity on your finances.
      </p>

      <div className="mt-10 flex justify-center">
        <FiCheckCircle className="text-green-500 text-5xl" />
      </div>
    </Container>
    </section>
  );
}
