import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardActions } from '@mui/material';

const SustainableLivingPage = () => {
  // In a real React application, SEO meta tags like <title>, <meta description>, and <meta keywords>
  // are typically managed by a library like 'react-helmet-async' or through server-side rendering (SSR)
  // solutions, as React components do not directly render into the document <head> tag.
  // For the purpose of this exercise, we include them as comments to indicate their intended content.
  /*
  <title>Sustainable Living Tips - Your Guide to an Eco-Friendly Lifestyle</title>
  <meta name="description" content="Discover comprehensive sustainable living tips, eco-friendly practices, and how to reduce your environmental impact. Learn about conscious consumption, energy conservation, and waste reduction for a greener lifestyle.">
  <meta name="keywords" content="sustainable living, eco-friendly, green lifestyle, reduce waste, conserve energy, conscious consumption, environmental impact, sustainable habits, carbon footprint, recycling">
  */

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-800 bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Section */}
      <Box component="header" className="bg-green-700 text-white p-4 shadow-md w-full">
        <Container maxWidth="lg" className="flex flex-col md:flex-row justify-between items-center">
          <Typography variant="h5" component="div" className="font-bold mb-2 md:mb-0">
            EcoLiving Guide
          </Typography>
          <nav className="flex space-x-4">
            <a href="#tips" className="hover:text-green-200 transition-colors duration-300">Tips</a>
            <a href="#products" className="hover:text-green-200 transition-colors duration-300">Products</a>
            <a href="#community" className="hover:text-green-200 transition-colors duration-300">Community</a>
          </nav>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box component="main" className="flex-grow py-8 md:py-12">
        <Container maxWidth="lg" className="px-4">
          <Typography
            variant="h1"
            component="h1"
            className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 text-center leading-tight"
          >
            Mastering Sustainable Living: Your Guide to an Eco-Friendly Lifestyle
          </Typography>

          <Typography variant="body1" className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Embrace a greener lifestyle with our comprehensive sustainable living tips. Discover how small changes can lead to a significant positive environmental impact and a more fulfilling life.
          </Typography>

          <Grid container spacing={4} className="mb-12">
            {/* Section 1: Reduce, Reuse, Recycle */}
            <Grid item xs={12} md={6} lg={4}>
              <Card className="h-full flex flex-col shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 bg-white">
                <CardContent className="p-6 flex-grow">
                  <Typography variant="h2" component="h2" className="text-2xl font-bold text-green-700 mb-4">
                    1. Reduce, Reuse, Recycle for Sustainable Living
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-4">
                    The foundation of sustainable living. Minimizing waste is crucial for preserving our planet's resources.
                  </Typography>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <Typography variant="body2"><strong>Reduce:</strong> Buy less, choose durable products, avoid single-use items.</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>Reuse:</strong> Repurpose old items, use reusable bags, bottles, and containers.</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>Recycle:</strong> Understand local recycling rules, separate waste properly.</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>Compost:</strong> Turn food scraps into rich soil for gardens.</Typography>
                    </li>
                  </ul>
                </CardContent>
                <CardActions className="p-4 flex justify-end">
                  <Button size="small" color="primary" className="text-green-600 hover:text-green-800">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Section 2: Energy Conservation */}
            <Grid item xs={12} md={6} lg={4}>
              <Card className="h-full flex flex-col shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 bg-white">
                <CardContent className="p-6 flex-grow">
                  <Typography variant="h2" component="h2" className="text-2xl font-bold text-green-700 mb-4">
                    2. Conserve Energy for a Greener Home
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-4">
                    Reducing energy consumption lowers your carbon footprint and saves money. It's a win-win for sustainable living.
                  </Typography>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <Typography variant="body2"><strong>Unplug:</strong> Devices still draw power when off (phantom load).</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>LED Lighting:</strong> Switch to energy-efficient LED bulbs.</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>Optimize Heating/Cooling:</strong> Insulate, use smart thermostats, adjust temperatures seasonally.</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>Air Dry:</strong> Line dry clothes instead of using a dryer.</Typography>
                    </li>
                  </ul>
                </CardContent>
                <CardActions className="p-4 flex justify-end">
                  <Button size="small" color="primary" className="text-green-600 hover:text-green-800">
                    Explore Solutions
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Section 3: Conscious Consumption */}
            <Grid item xs={12} md={6} lg={4}>
              <Card className="h-full flex flex-col shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 bg-white">
                <CardContent className="p-6 flex-grow">
                  <Typography variant="h2" component="h2" className="text-2xl font-bold text-green-700 mb-4">
                    3. Embrace Conscious Consumption & Ethical Choices
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-4">
                    Make informed decisions about what you buy and support businesses committed to sustainable practices. This is key to sustainable living.
                  </Typography>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <Typography variant="body2"><strong>Local & Seasonal:</strong> Support local farmers, reduce transportation emissions.</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>Ethical Brands:</strong> Research companies' environmental and labor practices.</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>Minimalism:</strong> Prioritize needs over wants, declutter your life.</Typography>
                    </li>
                    <li>
                      <Typography variant="body2"><strong>Water Conservation:</strong> Fix leaks, take shorter showers, efficient appliances.</Typography>
                    </li>
                  </ul>
                </CardContent>
                <CardActions className="p-4 flex justify-end">
                  <Button size="small" color="primary" className="text-green-600 hover:text-green-800">
                    Find Ethical Products
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          {/* Call to Action */}
          <Box className="text-center bg-green-100 p-8 rounded-lg shadow-md mt-10">
            <Typography
              variant="h3"
              component="h3"
              className="text-3xl font-bold text-green-800 mb-4"
            >
              Ready to Transform Your Lifestyle? Join Our Sustainable Living Community!
            </Typography>
            <Typography variant="body1" className="text-lg text-gray-700 mb-6">
              Start your journey towards a more sustainable and fulfilling life today. Get exclusive tips, resources, and connect with like-minded individuals.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Sign Up for Our Newsletter
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box component="footer" className="bg-gray-800 text-gray-300 p-6 w-full">
        <Container maxWidth="lg" className="text-center">
          <Typography variant="body2" className="mb-2">
            &copy; {new Date().getFullYear()} EcoLiving Guide. All rights reserved.
          </Typography>
          <Typography variant="body2">
            <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a> | 
            <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default SustainableLivingPage;
