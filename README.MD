Webpage application using ReactJS, NodeJS and "Finnhub" API.
This application extracts daily stock price data and displays it in diagram of a given company.
Company search input accepts only company stock ***TICKER***. 
Complete list of all companies stock tickers can be found here: https://stockanalysis.com/stocks/

To use application:
* For NodeJS application in backend folder there needs to be .env file with 2 variables : API_KEY=your_api_key (to connect with "Finnhub" API) and MONGODB_KEY=your_username:your_password (for connection with MongoDB database)
* For NodeJS and ReactJS applications in terminal run 'npm install' to install node modules
* For ReactJS in terminal run 'npm start' and react application should start
* For NodeJS application in terminal run 'nodemon app' and node application should start



How to use application: 
* Enter company ticker in input field and press button 'Get Company' and company card should appear
* Select date range for which you want to see stock price
* Once date range selected press on company name and it's stock price history will be shown in a candlestick diagram 
