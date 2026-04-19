export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Portfolio Mechatronics & Robotics</h1>
      <p>Selamat datang di dokumentasi proyek engineering saya.</p>
      
      <section>
        <h2>Proyek Utama</h2>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Remote I/O Industrial Fieldbus</h3>
          <p>Sistem komunikasi berbasis ESP32 untuk ModbusTCP dan OPC-UA pada Modular Production System.</p>
          <span style={{ background: '#eee', padding: '4px 8px', borderRadius: '4px' }}>Next.js</span>
          <span style={{ background: '#eee', padding: '4px 8px', borderRadius: '4px', marginLeft: '5px' }}>ESP32</span>
        </div>
      </section>
    </main>
  );
}