import { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setOutput('');
  };

  const handleConvert = () => {
    // Simulated output
    setOutput("✅ Converted notes: 'This is simulated AI-generated content from image!'");
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* 🔷 Hero Banner */}
      <div
        style={{
          backgroundImage: 'url("/mountain-banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>ScriptFix – Handwriting to Notes</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
          Upload handwritten content and convert it into digital notes instantly!
        </p>
        <button
          onClick={() => document.getElementById('upload-section').scrollIntoView({ behavior: 'smooth' })}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>

      {/* 🔶 Upload Section */}
      <section id="upload-section" style={{ padding: '40px', background: '#f9f9f9', textAlign: 'center' }}>
        <h2>Upload Image & Convert</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ margin: '20px 0', padding: '10px' }}
        />
        {image && (
          <div style={{ margin: '20px auto' }}>
            <img src={image} alt="preview" style={{ width: '300px', borderRadius: '12px' }} />
          </div>
        )}
        <button
          onClick={handleConvert}
          style={{
            backgroundColor: '#673ab7',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Convert to Notes
        </button>
        {output && (
          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              color: '#2e7d32',
              fontWeight: 'bold',
            }}
          >
            {output}
          </div>
        )}
      </section>

      {/* 🔸 At a Glance Section */}
      <section style={{ background: '#2c3e50', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <h2>At a Glance</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
          <div>
            <h3>📄 1000+ Notes Converted</h3>
            <p>Trusted by students and teachers</p>
          </div>
          <div>
            <h3>🖋️ AI Accuracy ~90%</h3>
            <p>Handwriting analysis with simulated model</p>
          </div>
          <div>
            <h3>🚀 Instant Results</h3>
            <p>See your results in seconds</p>
          </div>
        </div>
      </section>
    </div>
  );
}
