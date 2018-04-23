const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API Server is running on http://localhost:${port}`);
});
