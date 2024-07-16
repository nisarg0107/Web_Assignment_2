const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');
const cartRoutes = require('./routes/carts');
const orderRoutes = require('./routes/orders');

const app = express();

app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://nisarg172001:KNPknp123@nisargpatel.ci9qh6y.mongodb.net/?retryWrites=true&w=majority&appName=NisargPatel';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
