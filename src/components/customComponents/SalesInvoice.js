import React, {useState} from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

export const createPDF = async transactionDetails => {
  let options = {
    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Simple Invoice</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  margin: 20px;
              }
      
              .invoice {
                  max-width: 600px;
                  margin: auto;
                  border: 1px solid #ddd;
                  padding: 20px;
                  background-color: #f9f9f9;
              }
      
              .invoice-header {
                  text-align: center;
                  font-size: 24px;
                  margin-bottom: 20px;
              }
      
              .invoice-details {
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 20px;
              }
      
              .invoice-items {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 20px;
              }
      
              .invoice-items th, .invoice-items td {
                  border: 1px solid #ddd;
                  padding: 10px;
                  text-align: left;
              }
      
              .invoice-total {
                  text-align: right;
                  font-size: 18px;
                  margin-top: 20px;
              }
          </style>
      </head>
      <body>
          <div class="invoice">
              <div class="invoice-header">Invoice</div>
              
              <div class="invoice-details">
                  <div>
                      <strong>From:</strong><br>
                      Your Company Name<br>
                      123 Main Street<br>
                      City, Country
                  </div>
                  <div>
                      <strong>To:</strong><br>
                      Client Name<br>
                      456 Client Street<br>
                      City, Country
                  </div>
              </div>
      
              <div class="invoice-details">
                  <div>
                      <strong>Transaction ID:</strong> ${transactionDetails[0]._id}<br>
                      <strong>Transaction Date:</strong> ${transactionDetails[0].date.slice(0,10)}
                  </div>
              </div>
      
              <table class="invoice-items">
                  <thead>
                      <tr>
                          <th>Description</th>
                          <th>Quantity</th>
                          <th>Unit Price</th>
                          <th>Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>${transactionDetails[0].productName}</td>
                          <td>${transactionDetails[0].quantity}</td>
                          <td>$${transactionDetails[0].amount}</td>
                          <td>$${parseInt(transactionDetails[0].quantity)*parseInt(transactionDetails[0].amount)}</td>
                      </tr>
                  </tbody>
              </table>
      
              <div class="invoice-total">
                  <strong>Total: $${parseInt(transactionDetails[0].quantity)*parseInt(transactionDetails[0].amount)}</strong>
              </div>
          </div>
      </body>
      </html>          
      `,
    fileName: `${transactionDetails[0].productName} - ${transactionDetails[0]._id}`,
    directory: 'Download',
  };

  try {
    let file = await RNHTMLtoPDF.convert(options);
    // console.log(file.filePath);
    alert(file.filePath);
  } catch (error) {
    console.error('Error creating PDF:', error);
  }
};
const SalesInvoice = ({props}) => {
  console.log('Invoice Called');
  console.log(props);
  const createPDF = async () => {
    let options = {
      html: `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Simple Invoice</title>
              <style>
                  body {
                      font-family: 'Arial', sans-serif;
                      margin: 20px;
                  }
          
                  .invoice {
                      max-width: 600px;
                      margin: auto;
                      border: 1px solid #ddd;
                      padding: 20px;
                      background-color: #f9f9f9;
                  }
          
                  .invoice-header {
                      text-align: center;
                      font-size: 24px;
                      margin-bottom: 20px;
                  }
          
                  .invoice-details {
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 20px;
                  }
          
                  .invoice-items {
                      width: 100%;
                      border-collapse: collapse;
                      margin-bottom: 20px;
                  }
          
                  .invoice-items th, .invoice-items td {
                      border: 1px solid #ddd;
                      padding: 10px;
                      text-align: left;
                  }
          
                  .invoice-total {
                      text-align: right;
                      font-size: 18px;
                      margin-top: 20px;
                  }
              </style>
          </head>
          <body>
              <div class="invoice">
                  <div class="invoice-header">Invoice</div>
                  
                  <div class="invoice-details">
                      <div>
                          <strong>From:</strong><br>
                          Your Company Name<br>
                          123 Main Street<br>
                          City, Country
                      </div>
                      <div>
                          <strong>To:</strong><br>
                          Client Name<br>
                          456 Client Street<br>
                          City, Country
                      </div>
                  </div>
          
                  <div class="invoice-details">
                      <div>
                          <strong>Transaction ID:</strong> {#12345}<br>
                          <strong>Transaction Date:</strong> March 15, 2023
                      </div>
                  </div>
          
                  <table class="invoice-items">
                      <thead>
                          <tr>
                              <th>Description</th>
                              <th>Quantity</th>
                              <th>Unit Price</th>
                              <th>Total</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Item 1</td>
                              <td>2</td>
                              <td>$50.00</td>
                              <td>$100.00</td>
                          </tr>
                          <tr>
                              <td>Item 2</td>
                              <td>1</td>
                              <td>$75.00</td>
                              <td>$75.00</td>
                          </tr>
                      </tbody>
                  </table>
          
                  <div class="invoice-total">
                      <strong>Total: $175.00</strong>
                  </div>
              </div>
          </body>
          </html>          
          `,
      fileName: `${transactionDetails[0].productName}${transactionDetails[0]._id}`,
      directory: 'Download',
    };

    try {
      let file = await RNHTMLtoPDF.convert(options);
      // console.log(file.filePath);
      alert(file.filePath);
    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  };
  return (
    <View>
      <TouchableHighlight onPress={createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SalesInvoice;

const styles = StyleSheet.create({});
