export default function ServicesPage() {
  return (
    <div className="p-10 bg-base-100">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <ul className="list-disc list-inside">
        <li className="mb-2">Haircuts - $25</li>
        <li className="mb-2">Beard Trim - $15</li>
        <li className="mb-2">Shave - $20</li>
      </ul>
      <a href="/" className="btn btn-secondary mt-4">Back to Home</a>
    </div>
  );
}