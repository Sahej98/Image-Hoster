import './App.css';

const images = import.meta.glob('./images/**/*.{png,jpg,jpeg,svg}', {
  eager: true,
});

export default function App() {
  return (
    <div className='gallery'>
      {Object.values(images).map((img, i) => (
        <img key={i} src={img.default} alt={`Gallery ${i}`} />
      ))}
    </div>
  );
}
