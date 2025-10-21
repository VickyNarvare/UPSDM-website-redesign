import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import QuickLinks from "./Components/QuickLinks";
import WelcomeSection from "./Components/WelcomeSection";
import SkillingPath from "./Components/SkillingPath";
import PhotoGallery from "./Components/PhotoGallery";
import SkillingProgress from "./Components/SkillingProgress";

const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Page Content Area */}
        <main className="">
          {/* Carousel Section */}
          <div className="mx-auto mb-8">
            <Carousel autoPlayInterval={5000} />
          </div>

          {/* Quick Links Section */}
          <QuickLinks />

          {/* Welcome Section */}
          <WelcomeSection />

          {/* Skilling Path Section */}
          <SkillingPath />

          {/* Photo Gallery Section */}
          <PhotoGallery />

          {/* Skilling Progress Section */}
          <SkillingProgress />
        </main>
      </div>
    </div>
  )
}

export default App
