// A "spinner" is a reusable component that displays an indicator while the application waits
// for a response from the API, rather than showing an empty page.

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading recipes...</p>
    </div>
  );
}