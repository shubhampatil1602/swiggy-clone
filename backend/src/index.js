import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

// CORS Middleware
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/restaurants', async (req, res) => {
  try {
    const response = await axios.get(
      'https://www.swiggy.com/dapi/restaurants/list/v5',
      {
        params: {
          lat: '12.9715987',
          lng: '77.5945627',
          // lat: '21.1702401',
          // lng: '72.83106070000001',
          'is-seo-homepage-enabled': true,
          page_type: 'DESKTOP_WEB_LISTING',
        },
        headers: {
          'User-Agent': req.headers['user-agent'],
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    console.error(
      'Error details:',
      error.response ? error.response.data : 'No response data'
    );
    res.status(500).send('Error fetching data');
  }
});

// Endpoint to fetch restaurant menu details
app.get('/api/restaurants/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const response = await axios.get('https://www.swiggy.com/dapi/menu/pl', {
      params: {
        'page-type': 'REGULAR_MENU',
        'complete-menu': true,
        lat: '12.9715987',
        lng: '77.5945627',
        // lat: '21.1702401',
        // lng: '72.83106070000001',
        restaurantId,
      },
      headers: {
        'User-Agent': req.headers['user-agent'],
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching menu data:', error.message);
    res.status(500).send('Error fetching menu data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
