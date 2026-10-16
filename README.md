# AirViews — Property Listing Platform

AirViews is a listing-based web application built using EJS and Node.js that allows users to explore property listings, upload images, share reviews, and view property locations on an interactive map.

## Features

- **Property Listings:** Browse property listings with detailed information and images.
- **Image Uploads:** Add and manage listing images using Cloudinary.
- **Reviews & Ratings:** Submit reviews and ratings for listings.
- **Interactive Maps:** Display property locations using Mapbox and geocoding.
- **Authentication:** User authentication and authorization for protected operations.
- **Data Validation:** Validate listing and review data to maintain data integrity.

## Tech Stack

- **Frontend:** EJS, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Passport.js
- **Image Management:** Cloudinary
- **Maps & Geocoding:** Mapbox
- **Validation:** Joi

## Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
cd <repository-folder>
npm install
```

Create a `.env` file and configure the required credentials:

```env
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

Start the application using the configured npm script.

## Objective

AirViews combines property discovery, image management, user reviews, ratings, and location-based visualization in one web application.

**Developed by:** Likhitha A J
