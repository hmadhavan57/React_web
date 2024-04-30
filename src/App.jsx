// Importing necessary components from the components directory
import {
  Navbar,   // Navbar component for navigation
  Home,     // Home component for the homepage
  About,    // About component for information about the website
  Teacher,  // Teacher component for teacher-related content
  Contact,  // Contact component for contact information
  Courses,  // Courses component for displaying available courses
  Footer,   // Footer component for the bottom section of the website
} from "./components/index";

// Main App component
function App() {
  return (
    // Wrapper div with custom classes for styling
    <div className="font-Poppins bg-Solitude">
    
      <Navbar />

      <Home />
    
      <About />
    
      <Courses />
     
      <Teacher />
     
      <Contact />
     
      <Footer />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
