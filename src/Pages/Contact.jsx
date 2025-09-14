function Contact() {
  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <h2 className="text-center">Contact Me</h2>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: 'auto' }}>
        <input type="text" placeholder="Name" style={{ padding: '10px', marginBottom: '10px' }} />
        <input type="email" placeholder="Email" style={{ padding: '10px', marginBottom: '10px' }} />
        <textarea placeholder="Message" style={{ padding: '10px', marginBottom: '10px' }}></textarea>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#00aaff', color: 'white', border: 'none', cursor: 'pointer' }}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
