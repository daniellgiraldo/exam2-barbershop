export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-600 text-white text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-4">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" className="mt-4 btn btn-accent">
        Go Back Home
      </a>
    </div>
  );
}