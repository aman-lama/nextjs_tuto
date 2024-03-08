export default function Riya() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content grid gap-1 place-content-center h-48">
          <h3>Hello</h3>
          <h1>I am Riya Shrestha.</h1>

          <a
            href={
              "https://drive.google.com/file/d/1KeqzZ7M18N2dal9MjuClSLaBiLcY_FjS/view?usp=drive_link"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Download CV
          </a>
        </div>
      </section>
    </>
  );
}
