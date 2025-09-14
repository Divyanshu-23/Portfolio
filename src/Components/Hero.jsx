import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/photo.jpg"; // replace with your image

function Hero() {
  return (
    <section className="hero-section" style={{ padding: "60px 0", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Hi, I'm <span style={{ color: "#007bff" }}>Divyanshu Majhi</span>
        </h1>

        <ReactTyped
          strings={[
            "A Passionate Software Developer 💻",
            "AI/ML Enthusiast 🤖",
            "Future Software Engineer 🚀",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          style={{ fontSize: "1.3rem", display: "block", marginBottom: "20px" }}
        />

        <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
          I love building modern web applications and exploring cutting-edge technologies.
        </p>

        <div style={{ marginBottom: "20px" }}>
          <a
            href="/projects"
            style={{
              padding: "10px 20px",
              border: "2px solid #007bff",
              borderRadius: "5px",
              marginRight: "10px",
              textDecoration: "none",
              color: "#007bff",
            }}
          >
            View Projects
          </a>
        </div>

        <div style={{ fontSize: "1.8rem" }}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 10px", color: "#333" }}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 10px", color: "#0a66c2" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            style={{ margin: "0 10px", color: "#d93025" }}
          >
            <FaEnvelope />
          </a>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{ marginTop: "40px" }}
        >
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #007bff",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
