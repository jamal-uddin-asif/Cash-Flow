import { FiShield } from "react-icons/fi";

export default function SecuritySection() {
  return (
    <section>
      <div className="text-center py-15">
        <FiShield className="text-5xl text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold">Your data is safe</h2>
        <p className="text-gray-600 mt-2">
          Secure authentication and protected data storage.
        </p>
      </div>
    </section>
  );
}
