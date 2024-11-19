export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h1 className="text-5xl font-bold mb-4">Welcome to Classic Barbershop</h1>
      <p className="text-lg text-center">
        Discover expert grooming services tailored just for you.
      </p>
      <a href="/services" className="mt-4 btn btn-primary">View Our Services</a>
    </div>
  );
}
